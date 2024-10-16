(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4949],
  {
    76081: function (e, a, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/enterprise",
        function () {
          return t(20515);
        },
      ]);
    },
    21221: function (e, a, t) {
      "use strict";
      t.r(a);
      var i = t(52322);
      a.default = function (e) {
        let { icon: a, color: t } = e;
        return (0, i.jsx)("div", {
          className: [
            "inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md",
            t && "black" !== t
              ? ""
              : "bg-foreground text-background-alternative",
            t && "gray" === t ? "bg-border-strong text-foreground-light" : "",
            t && "green" === t ? "bg-brand text-brand-100" : "",
            t && "alt" === t ? "bg-alternative text-brand" : "",
          ].join(" "),
          children: (0, i.jsx)("svg", {
            className: [
              "h-5 w-5",
              t && "black" !== t ? "" : "stroke-background",
              t && "gray" === t ? "stroke-foreground-light" : "",
              t && "green" === t ? "stroke-brand-200" : "",
              t && "alt" === t ? "stroke-brand" : "",
            ].join(" "),
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            children: (0, i.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "1.5",
              d: a,
            }),
          }),
        });
      };
    },
    63452: function (e, a, t) {
      "use strict";
      var i = t(52322);
      t(2784);
      var s = t(44382),
        r = t(29982),
        n = t(39097),
        o = t.n(n),
        l = t(21221),
        d = t(37637);
      a.Z = (e) => {
        var a;
        return (0, i.jsx)("div", {
          className: (0, s.cn)(
            "w-full max-w-full relative mx-auto py-16 lg:py-24 border-b bg-alternative overflow-hidden",
            e.className
          ),
          children: (0, i.jsxs)(d.default, {
            className: (0, s.cn)(
              "!py-0 grid grid-cols-12",
              e.sectionContainerClassName
            ),
            children: [
              (0, i.jsxs)("div", {
                className: "relative z-10 col-span-12 gap-8 lg:col-span-5",
                children: [
                  (0, i.jsxs)("div", {
                    children: [
                      (e.icon || e.title) &&
                        (0, i.jsxs)("div", {
                          className: "mb-4 flex items-center gap-3",
                          children: [
                            e.icon && (0, i.jsx)(l.default, { icon: e.icon }),
                            e.title &&
                              (0, i.jsx)(
                                "span",
                                {
                                  className:
                                    "text-brand-600 dark:text-brand font-mono uppercase",
                                  children: e.title,
                                },
                                "product-name-".concat(e.title)
                              ),
                          ],
                        }),
                      (0, i.jsx)("h1", {
                        className:
                          "h1 text-3xl md:!text-4xl lg:!text-4xl 2xl:!text-6xl tracking-[-.15px]",
                        children: e.h1,
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    children:
                      e.subheader &&
                      e.subheader.map((e, a) =>
                        (0, i.jsx)(
                          "p",
                          {
                            className: "p lg:text-lg max-w-lg lg:max-w-none",
                            children: e,
                          },
                          a
                        )
                      ),
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "flex flex-row md:flex-row md:items-center gap-2",
                    children:
                      null === (a = e.ctas) || void 0 === a
                        ? void 0
                        : a.map((e) => {
                            var a, t;
                            return (0, i.jsx)(
                              r.z,
                              {
                                size: "medium",
                                type:
                                  null !== (a = e.type) && void 0 !== a
                                    ? a
                                    : "default",
                                asChild: !0,
                                children: (0, i.jsx)(o(), {
                                  href: e.href,
                                  children:
                                    null !== (t = e.label) && void 0 !== t
                                      ? t
                                      : "Start for free",
                                }),
                              },
                              e.href
                            );
                          }),
                  }),
                  e.footer &&
                    "left" === e.footerPosition &&
                    (0, i.jsx)("div", {
                      className:
                        "ph-footer relative z-10 mt-4 md:mt-8 lg:mt-20 xl:mt-32 col-span-12",
                      children: e.footer,
                    }),
                ],
              }),
              e.image &&
                (0, i.jsx)("div", {
                  className:
                    "relative min-h-[300px] col-span-12 mt-8 lg:col-span-7 lg:mt-0 xl:col-span-6 xl:col-start-7",
                  children: e.image,
                }),
              e.footer &&
                "left" !== e.footerPosition &&
                (0, i.jsx)("div", {
                  className:
                    "relative z-10 mt-4 md:mt-8 lg:mt-20 xl:mt-32 col-span-12",
                  children: e.footer,
                }),
            ],
          }),
        });
      };
    },
    20515: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          default: function () {
            return _;
          },
        });
      var i = t(52322),
        s = t(25237),
        r = t.n(s),
        n = t(55351),
        o = t(27478),
        l = t(63452),
        d = t(55132);
      let c = (0, d.Z)("ChartLine", [
        ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
        ["path", { d: "m19 9-5 5-4-4-3 3", key: "2osh9i" }],
      ]);
      var h = t(14126);
      let u = (0, d.Z)("Timer", [
          ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
          ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
          ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }],
        ]),
        g = (0, d.Z)("Scale", [
          [
            "path",
            {
              d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",
              key: "7g6ntu",
            },
          ],
          [
            "path",
            {
              d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",
              key: "ijws7r",
            },
          ],
          ["path", { d: "M7 21h10", key: "1b0cd5" }],
          ["path", { d: "M12 3v18", key: "108xh3" }],
          ["path", { d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2", key: "3gwbw2" }],
        ]),
        p = (0, d.Z)("ShieldCheck", [
          [
            "path",
            {
              d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
              key: "oel41y",
            },
          ],
          ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
        ]);
      var m = t(30537);
      let b = (0, d.Z)("ShieldAlert", [
        [
          "path",
          {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y",
          },
        ],
        ["path", { d: "M12 8v4", key: "1got3b" }],
        ["path", { d: "M12 16h.01", key: "1drbdi" }],
      ]);
      var x = t(90812);
      let y = (0, d.Z)("ClipboardCheck", [
          [
            "rect",
            {
              width: "8",
              height: "4",
              x: "8",
              y: "2",
              rx: "1",
              ry: "1",
              key: "tgr4d6",
            },
          ],
          [
            "path",
            {
              d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
              key: "116196",
            },
          ],
          ["path", { d: "m9 14 2 2 4-4", key: "df797q" }],
        ]),
        f = (0, d.Z)("Users", [
          [
            "path",
            { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" },
          ],
          ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
          ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
          ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
        ]),
        v = (0, d.Z)("LayoutList", [
          [
            "rect",
            { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" },
          ],
          [
            "rect",
            {
              width: "7",
              height: "7",
              x: "3",
              y: "14",
              rx: "1",
              key: "1bb6yr",
            },
          ],
          ["path", { d: "M14 4h7", key: "3xa0d5" }],
          ["path", { d: "M14 9h7", key: "1icrd9" }],
          ["path", { d: "M14 15h7", key: "1mj8o2" }],
          ["path", { d: "M14 20h7", key: "11slyb" }],
        ]),
        w = (0, d.Z)("Lightbulb", [
          [
            "path",
            {
              d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
              key: "1gvzjb",
            },
          ],
          ["path", { d: "M9 18h6", key: "x1upvd" }],
          ["path", { d: "M10 22h4", key: "ceow96" }],
        ]),
        C = (0, d.Z)("FolderLock", [
          [
            "rect",
            {
              width: "8",
              height: "5",
              x: "14",
              y: "17",
              rx: "1",
              key: "19aais",
            },
          ],
          [
            "path",
            {
              d: "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5",
              key: "1w6v7t",
            },
          ],
          ["path", { d: "M20 17v-2a2 2 0 1 0-4 0v2", key: "pwaxnr" }],
        ]),
        k = (0, d.Z)("UserX", [
          [
            "path",
            { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" },
          ],
          ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
          ["line", { x1: "17", x2: "22", y1: "8", y2: "13", key: "3nzzx3" }],
          ["line", { x1: "22", x2: "17", y1: "8", y2: "13", key: "1swrse" }],
        ]),
        j = (0, d.Z)("Earth", [
          ["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54", key: "1djwo0" }],
          [
            "path",
            {
              d: "M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",
              key: "1tzkfa",
            },
          ],
          [
            "path",
            {
              d: "M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",
              key: "14pb5j",
            },
          ],
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ]),
        M = (0, d.Z)("ArrowLeftRight", [
          ["path", { d: "M8 3 4 7l4 4", key: "9rb6wj" }],
          ["path", { d: "M4 7h16", key: "6tx8e3" }],
          ["path", { d: "m16 21 4-4-4-4", key: "siv7j2" }],
          ["path", { d: "M20 17H4", key: "h6l3hr" }],
        ]);
      var S = t(84729),
        H = {
          metadata: {
            metaTitle: "Supabase for Enterprise",
            metaDescription:
              "Leading enterprises use Supabase to build faster, better, and more scalable products.",
          },
          heroSection: {
            id: "hero",
            title: "Supabase for Enterprise",
            h1: (0, i.jsxs)(i.Fragment, {
              children: [
                "Innovative Enterprises",
                (0, i.jsx)("span", {
                  className: "block",
                  children: "use Supabase",
                }),
              ],
            }),
            subheader: [
              (0, i.jsx)(i.Fragment, {
                children:
                  "Leading enterprises use Supabase to build faster, better, and more scalable products. From GitHub to PwC, innovative companies trust Supabase to drive their digital transformation strategy.",
              }),
            ],
            image: (0, i.jsx)(S.Z, {}),
            logos: [
              { name: "GitHub", image: "/images/enterprise/github.svg" },
              { name: "PwC", image: "/images/enterprise/pwc.svg" },
            ],
          },
          "use-cases": {
            id: "use-cases",
            label: (0, i.jsx)(i.Fragment, { children: "Build with Supabase" }),
            heading: (0, i.jsx)(i.Fragment, {
              children: "Stay on the forefront",
            }),
            stories: [
              {
                icon: "/images/customers/logos/light/mozilla.png",
                url: "https://developer.mozilla.org/en-US/blog/introducing-ai-help/",
                target: "_blank",
                heading: "Mozilla use Supabase for GenAI and RAG",
                subheading: (0, i.jsxs)(i.Fragment, {
                  children: [
                    "We store embeddings in a PostgreSQL database, hosted by Supabase, to perform a",
                    " ",
                    (0, i.jsx)("span", {
                      className: "text-foreground",
                      children:
                        "similarity search to identify the most relevant sections within the MDN",
                    }),
                    ".",
                  ],
                }),
              },
              {
                icon: "/images/customers/logos/light/epsilon3.png",
                url: "/customers/epsilon3",
                heading: "Epsilon3 use Supabase to build software for NASA",
                subheading: (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)("span", {
                      className: "text-foreground",
                      children:
                        "Billion dollar missions need to run reliably and securely",
                    }),
                    ". We use Supabase because they give us an open-source scalable back-end built by database experts that we can self-host.",
                  ],
                }),
              },
              {
                icon: "/images/customers/logos/light/pebblely.png",
                url: "/customers/pebblely",
                heading: "Pebblely use Supabase to scale to millions of users.",
                subheading: (0, i.jsxs)(i.Fragment, {
                  children: [
                    "It streamlined the database, the API, and authentication.",
                    " ",
                    (0, i.jsx)("span", {
                      className: "text-foreground",
                      children: "Everything was up and running in two days",
                    }),
                    ". It is easy to get started and provides all the solutions we require as we continue to grow.",
                  ],
                }),
              },
            ],
            highlights: [
              {
                icon: c,
                heading: "100x scale",
                subheading:
                  "Maergo handled 100x their highest sustained traffic with Supabase.",
                url: "/customers/maergo",
              },
              {
                icon: h.Z,
                heading: "83% cost reduction",
                subheading:
                  "Shotgun reduced costs by 83% by migrating to Supabase.",
                url: "/customers/shotgun",
              },
              {
                icon: u,
                heading: "20% faster dev",
                subheading: "Voypost enjoyed a 20% faster development process.",
                url: "/customers/voypost",
              },
              {
                icon: g,
                heading: "GDPR compliance",
                subheading:
                  "Markprompt use Supabase to build GDPR-compliant AI chatbots.",
                url: "/customers/markprompt",
              },
            ],
          },
          performance: {
            id: "performance",
            heading: (0, i.jsxs)(i.Fragment, {
              children: [
                "Top performance,",
                (0, i.jsx)("br", {}),
                " at any scale",
              ],
            }),
            subheading:
              "Supabase ensures optimal database performance at any scale, so you can focus on innovating and growing without worrying about infrastructure limitations—whether you're handling high-traffic applications, complex queries, or massive data volumes.",
            highlights: [
              { heading: "Databases managed", subheading: "1,000,000+" },
              { heading: "Databases launched daily", subheading: "3,500+" },
            ],
          },
          security: {
            id: "security",
            label: "Security",
            heading: (0, i.jsx)(i.Fragment, {
              children:
                "Trusted for medical records, missions to the moon, and everything in between",
            }),
            subheading:
              "Keep your data secure with SOC 2, HIPAA, and GDPR compliance. Your customers’ data is encrypted at rest and in transit, with built-in tools for monitoring and managing security threats.",
            cta: { label: "Learn more about Security", url: "/security" },
            features: [
              { icon: p, heading: "SOC 2 Type II certified" },
              { icon: m.Z, heading: "HIPAA compliant" },
              { icon: b, heading: "DDoS Protection" },
              { icon: x.Z, heading: "Multi-factor Authentication" },
              { icon: y, heading: "Vulnerability Management" },
              { icon: f, heading: "Role-based access control" },
              { icon: v, heading: "Database Audit Logs" },
              { icon: w, heading: "Security Advisors" },
              { icon: C, heading: "Encrypted Storage" },
              { icon: k, heading: "Network restrictions" },
            ],
          },
          support: {
            id: "support",
            label: "Support",
            heading: (0, i.jsxs)(i.Fragment, {
              children: [
                "Get expert help,",
                (0, i.jsx)("br", {}),
                " whenever you need it",
              ],
            }),
            features: [
              {
                icon: j,
                heading: "Global Support, 24/7",
                subheading:
                  "Our team has 100% global coverage. No matter where you are, we’re always available to resolve issues and keep your operations running smoothly.",
              },
              {
                icon: f,
                heading: "Dedicated team of experts",
                subheading:
                  "Get direct access to talented engineers. From onboarding to optimizations, our expert team is here to provide personalized, hands-on support whenever you need it.",
              },
              {
                icon: M,
                heading: "Migration & Success Support",
                subheading:
                  "Our team ensures a smooth transition to Supabase while guiding you with best practices for scaling. We’re dedicated to your long-term success, every step of the way.",
              },
            ],
          },
          quote: {
            id: "quote",
            quote: {
              text: "Supabase powers prototyping for fast-moving teams such as GitHub Next.",
              author: "Idan Gazit",
              logo: (0, i.jsxs)("svg", {
                width: "91",
                height: "24",
                viewBox: "0 0 91 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  (0, i.jsx)("path", {
                    d: "M10.4878 10.2692C10.2941 10.2692 10.1376 10.4244 10.1376 10.6166V14.263C10.1376 14.4552 10.2941 14.6129 10.4878 14.6129H13.4204V19.1438C13.4204 19.1438 12.7624 19.3656 10.9422 19.3656C8.79419 19.3656 5.79445 18.587 5.79445 12.0431C5.79445 5.49923 8.91835 4.6369 11.851 4.6369C14.3889 4.6369 15.484 5.08038 16.1793 5.29474C16.3978 5.36126 16.599 5.14444 16.599 4.95227L17.4383 1.42901C17.4383 1.33785 17.4085 1.22944 17.3042 1.15799C17.0211 0.958425 15.2978 2.14502e-06 10.9422 2.14502e-06C5.92606 -0.00246167 0.77832 2.11642 0.77832 12.2969C0.77832 22.4774 6.67103 23.9951 11.6375 23.9951C15.7497 23.9951 18.2429 22.2507 18.2429 22.2507C18.3447 22.194 18.3571 22.0511 18.3571 21.9871V10.6166C18.3571 10.4244 18.2007 10.2692 18.007 10.2692H10.4878Z",
                    fill: "currentColor",
                  }),
                  (0, i.jsx)("path", {
                    d: "M56.7404 1.21713C56.7404 1.02248 56.5864 0.867264 56.3927 0.867264H52.1613C51.9676 0.867264 51.8112 1.02495 51.8112 1.21713V9.33046H45.2157V1.21713C45.2157 1.02248 45.0593 0.867264 44.8656 0.867264H40.6342C40.4405 0.867264 40.284 1.02495 40.284 1.21713V23.1894C40.284 23.384 40.4405 23.5417 40.6342 23.5417H44.8656C45.0593 23.5417 45.2157 23.384 45.2157 23.1894V13.7924H51.8112L51.7988 23.1894C51.7988 23.384 51.9552 23.5417 52.1489 23.5417H56.3903C56.584 23.5417 56.7379 23.384 56.7404 23.1894V1.21713Z",
                    fill: "currentColor",
                  }),
                  (0, i.jsx)("path", {
                    d: "M25.9906 4.09979C25.9906 2.58701 24.7688 1.36495 23.2615 1.36495C21.7542 1.36495 20.5324 2.58701 20.5324 4.09979C20.5324 5.61257 21.7542 6.83462 23.2615 6.83462C24.7688 6.83462 25.9906 5.6101 25.9906 4.09979Z",
                    fill: "currentColor",
                  }),
                  (0, i.jsx)("path", {
                    d: "M25.6876 8.41392C25.6876 8.22174 25.5312 8.06406 25.3375 8.06406H21.1185C20.9248 8.06406 20.7509 8.26117 20.7509 8.45581V22.9874C20.7509 23.4136 21.0191 23.5417 21.3668 23.5417H25.1686C25.5858 23.5417 25.6876 23.3397 25.6876 22.98V8.41392Z",
                    fill: "currentColor",
                  }),
                  (0, i.jsx)("path", {
                    d: "M72.8218 8.09609H68.6227C68.429 8.09609 68.2725 8.25377 68.2725 8.44842V19.2227C68.2725 19.2227 67.2047 19.9963 65.6924 19.9963C64.1802 19.9963 63.7754 19.3138 63.7754 17.8429V8.44842C63.7754 8.25377 63.6189 8.09609 63.4253 8.09609H59.164C58.9728 8.09609 58.8139 8.25377 58.8139 8.44842V18.555C58.8139 22.9233 61.2673 23.9926 64.6445 23.9926C67.4133 23.9926 69.6482 22.4749 69.6482 22.4749C69.6482 22.4749 69.755 23.2756 69.8022 23.3693C69.8494 23.4629 69.976 23.559 70.1101 23.559L72.8218 23.5467C73.013 23.5467 73.1719 23.389 73.1719 23.1968V8.44842C73.1719 8.25377 73.013 8.09609 72.8193 8.09609H72.8218Z",
                    fill: "currentColor",
                  }),
                  (0, i.jsx)("path", {
                    d: "M84.3018 7.60086C81.9154 7.60086 80.2938 8.65784 80.2938 8.65784V1.21713C80.2938 1.02248 80.1374 0.867264 79.9437 0.867264H75.6999C75.5062 0.867264 75.3497 1.02495 75.3497 1.21713V23.1894C75.3497 23.384 75.5062 23.5417 75.6999 23.5417H78.645C78.7766 23.5417 78.8784 23.4727 78.9529 23.3545C79.0249 23.2362 79.1317 22.3419 79.1317 22.3419C79.1317 22.3419 80.8675 23.9729 84.1528 23.9729C88.0092 23.9729 90.2218 22.0314 90.2218 15.2584C90.2218 8.48537 86.6882 7.60086 84.3018 7.60086ZM82.6455 19.9815C81.1878 19.9372 80.202 19.2818 80.202 19.2818V12.324C80.202 12.324 81.1754 11.7302 82.3723 11.6243C83.8846 11.4888 85.3423 11.9421 85.3423 15.522C85.3423 19.2966 84.6842 20.0407 82.6479 19.9815H82.6455Z",
                    fill: "currentColor",
                  }),
                  (0, i.jsx)("path", {
                    d: "M37.8505 8.05913H34.6769C34.6769 8.05913 34.6719 3.90022 34.6719 3.89775C34.6719 3.74007 34.59 3.66123 34.4062 3.66123H30.0804C29.9116 3.66123 29.8222 3.73514 29.8222 3.89529V8.19464C29.8222 8.19464 27.6543 8.71451 27.5078 8.75639C27.3613 8.79828 27.2545 8.93132 27.2545 9.09147V11.7943C27.2545 11.9889 27.411 12.1441 27.6047 12.1441H29.8222V18.6437C29.8222 23.4727 33.2366 23.9458 35.5386 23.9458C36.5915 23.9458 37.8505 23.6107 38.0591 23.5343C38.1857 23.4875 38.2577 23.3594 38.2577 23.219V20.2476C38.2602 20.053 38.0963 19.8978 37.9101 19.8978C37.7238 19.8978 37.252 19.9717 36.7653 19.9717C35.2058 19.9717 34.6769 19.2522 34.6769 18.3209C34.6769 17.3896 34.6769 12.1441 34.6769 12.1441H37.8505C38.0442 12.1441 38.2006 11.9865 38.2006 11.7943V8.409C38.2006 8.21435 38.0442 8.05913 37.8505 8.05913Z",
                    fill: "currentColor",
                  }),
                ],
              }),
              role: "Senior Director of Research, GitHub Next",
            },
          },
          "request-a-demo": {
            id: "request-a-demo",
            heading: "Request a demssso",
            subheading:
              "We can take your requirements and show you how Supabase can help you achieve your goals.",
            quote: {
              text: "Supabase powers prototyping for fast-moving teams such as GitHub Next.",
              author: "",
              logo: "",
              company: "GitHub",
            },
          },
        };
      t(2784);
      var N = t(44382);
      let Z = [
        {
          image: "/images/logos/publicity/mozilla.svg",
          alt: "mozilla",
          name: "mozilla",
        },
        {
          image: "/images/logos/publicity/1password.svg",
          alt: "1password",
          name: "1password",
        },
        { image: "/images/logos/publicity/pwc.svg", alt: "pwc", name: "pwc" },
        {
          image: "/images/logos/publicity/langchain.svg",
          alt: "langchain",
          name: "langchain",
        },
      ];
      var V = (e) => {
        let { className: a } = e;
        return (0, i.jsx)("div", {
          className: (0, N.cn)(
            "flex lg:grid grid-cols-2 xl:flex flex-wrap gap-4 md:gap-8 lg:gap-4 2xl:gap-8",
            a
          ),
          suppressHydrationWarning: !0,
          children: Z.map((e) =>
            (0, i.jsx)(
              "div",
              {
                className: "h-12 lg:h-12 w-max",
                children: (0, i.jsx)("img", {
                  src: e.image,
                  alt: e.alt,
                  className:
                    " w-auto block h-10 !min-h-10 md:h-12 md:!min-h-12 lg:h-11 lg:!min-h-11 2xl:h-12 2xl:!min-h-12 ",
                  draggable: !1,
                }),
              },
              "ent-logo-".concat(e.name)
            )
          ),
        });
      };
      let z = r()(
          () =>
            Promise.all([t.e(1070), t.e(1401), t.e(3651)]).then(
              t.bind(t, 13651)
            ),
          { loadableGenerated: { webpack: () => [13651] } }
        ),
        G = r()(() => t.e(4409).then(t.bind(t, 4409)), {
          loadableGenerated: { webpack: () => [4409] },
        }),
        A = r()(() => t.e(5309).then(t.bind(t, 45309)), {
          loadableGenerated: { webpack: () => [45309] },
        }),
        L = r()(() => t.e(3620).then(t.bind(t, 23620)), {
          loadableGenerated: { webpack: () => [23620] },
        }),
        P = r()(() => t.e(6536).then(t.bind(t, 36536)), {
          loadableGenerated: { webpack: () => [36536] },
        }),
        q = r()(() => t.e(8100).then(t.bind(t, 98100)), {
          loadableGenerated: { webpack: () => [98100] },
        });
      var _ = () =>
        (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(n.PB, {
              title: H.metadata.metaTitle,
              description: H.metadata.metaDescription,
              openGraph: {
                title: H.metadata.metaTitle,
                description: H.metadata.metaDescription,
                url: "https://supabase.com/enterprise",
                images: [{ url: "/images/enterprise/enterprise-og.png" }],
              },
            }),
            (0, i.jsxs)(o.default, {
              className: "overflow-visible",
              children: [
                (0, i.jsx)(l.Z, {
                  ...H.heroSection,
                  className:
                    "[&_h1]:2xl:!text-5xl bg-default border-0 lg:pb-8 [&_.ph-footer]:mt-0 [&_.ph-footer]:lg:mt-16 [&_.ph-footer]:xl:mt-32",
                  sectionContainerClassName: "lg:gap-4",
                  footer: (0, i.jsx)(V, {
                    className: "lg:max-w-xs xl:max-w-none",
                  }),
                  footerPosition: "left",
                }),
                (0, i.jsx)(z, { ...H["use-cases"] }),
                (0, i.jsx)(G, { ...H.performance }),
                (0, i.jsx)(A, { ...H.security }),
                (0, i.jsx)(L, { ...H.support }),
                (0, i.jsx)(P, { ...H.quote }),
                (0, i.jsx)(q, {}),
              ],
            }),
          ],
        });
    },
    30537: function (e, a, t) {
      "use strict";
      t.d(a, {
        Z: function () {
          return i;
        },
      });
      let i = (0, t(55132).Z)("Activity", [
        [
          "path",
          {
            d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
            key: "169zse",
          },
        ],
      ]);
    },
    14126: function (e, a, t) {
      "use strict";
      t.d(a, {
        Z: function () {
          return i;
        },
      });
      let i = (0, t(55132).Z)("DollarSign", [
        ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
        [
          "path",
          {
            d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
            key: "1b0p4s",
          },
        ],
      ]);
    },
    90812: function (e, a, t) {
      "use strict";
      t.d(a, {
        Z: function () {
          return i;
        },
      });
      let i = (0, t(55132).Z)("Lock", [
        [
          "rect",
          {
            width: "18",
            height: "11",
            x: "3",
            y: "11",
            rx: "2",
            ry: "2",
            key: "1w4ew1",
          },
        ],
        ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
      ]);
    },
  },
  function (e) {
    e.O(
      0,
      [5126, 2787, 2251, 4697, 977, 7478, 6999, 4729, 2888, 9774, 179],
      function () {
        return e((e.s = 76081));
      }
    ),
      (_N_E = e.O());
  },
]);
