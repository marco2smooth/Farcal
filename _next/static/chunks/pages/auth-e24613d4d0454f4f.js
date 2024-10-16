(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2473],
  {
    91485: function (e, a, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/auth",
        function () {
          return t(37347);
        },
      ]);
    },
    21221: function (e, a, t) {
      "use strict";
      t.r(a);
      var n = t(52322);
      a.default = function (e) {
        let { icon: a, color: t } = e;
        return (0, n.jsx)("div", {
          className: [
            "inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md",
            t && "black" !== t
              ? ""
              : "bg-foreground text-background-alternative",
            t && "gray" === t ? "bg-border-strong text-foreground-light" : "",
            t && "green" === t ? "bg-brand text-brand-100" : "",
            t && "alt" === t ? "bg-alternative text-brand" : "",
          ].join(" "),
          children: (0, n.jsx)("svg", {
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
            children: (0, n.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "1.5",
              d: a,
            }),
          }),
        });
      };
    },
    14528: function (e, a, t) {
      "use strict";
      var n = t(52322);
      t(2784);
      var s = t(44382),
        i = t(39097),
        l = t.n(i),
        r = t(82577),
        c = t(37637);
      a.Z = function (e) {
        let { activePage: a } = e;
        return (0, n.jsx)("nav", {
          className:
            "relative z-30 hidden md:flex items-center bg-background w-full border-b",
          children: (0, n.jsx)(c.default, {
            className: "!py-0 flex gap-3 items-center",
            children: Object.entries(r.RB).map((e) => {
              let t = e[1],
                i = t.name === r.$7.AUTHENTICATION;
              return (0, n.jsxs)(
                l(),
                {
                  className: (0, s.cn)(
                    "flex items-center gap-1.5 px-2 first:-ml-2 py-4 border-b border-transparent text-sm text-foreground-lighter hover:text-foreground",
                    "focus-visible:ring-2 focus-visible:ring-foreground-lighter focus-visible:text-foreground focus-visible:outline-brand-600",
                    t.name === a && "border-foreground-light text-foreground"
                  ),
                  href: "/".concat(
                    i ? "auth" : t.name.toLowerCase().replace(" ", "-")
                  ),
                  children: [
                    (0, n.jsx)("svg", {
                      className:
                        "h-4 w-4 group-hover/menu-item:text-foreground group-focus-visible/menu-item:text-foreground",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 18 18",
                      children: (0, n.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "1",
                        d: t.icon["18"],
                        stroke: "currentColor",
                      }),
                    }),
                    (0, n.jsx)("p", { children: i ? "Auth" : t.name }),
                  ],
                },
                t.name
              );
            }),
          }),
        });
      };
    },
    6322: function (e, a, t) {
      "use strict";
      var n = t(52322),
        s = t(39097),
        i = t.n(s),
        l = t(29982),
        r = t(21221),
        c = t(47048);
      a.Z = (e) =>
        (0, n.jsx)("div", {
          className:
            "container relative mx-auto px-6 pt-16 pb-0 sm:px-16 lg:pt-28 xl:px-20",
          children: (0, n.jsxs)("div", {
            className: "grid grid-cols-12",
            children: [
              (0, n.jsxs)("div", {
                className: "col-span-12 space-y-8 lg:col-span-5",
                children: [
                  e.callout && e.callout,
                  (0, n.jsxs)("div", {
                    children: [
                      e.icon || e.title
                        ? (0, n.jsxs)("div", {
                            className: "mb-4 flex items-center gap-3",
                            children: [
                              e.icon && (0, n.jsx)(r.default, { icon: e.icon }),
                              e.title &&
                                (0, n.jsx)(
                                  "span",
                                  {
                                    className: "text-foreground",
                                    children: e.title,
                                  },
                                  "product-name-".concat(e.title)
                                ),
                            ],
                          })
                        : null,
                      (0, n.jsx)(
                        "h1",
                        { className: "h1", children: e.h1 },
                        "h1"
                      ),
                    ],
                  }),
                  (0, n.jsx)("div", {
                    children:
                      e.subheader &&
                      e.subheader.map((e, a) =>
                        (0, n.jsx)(
                          "p",
                          { className: "p lg:text-lg", children: e },
                          a
                        )
                      ),
                  }),
                  (0, n.jsxs)("div", {
                    className: "flex flex-row md:flex-row md:items-center",
                    children: [
                      (0, n.jsx)(l.z, {
                        asChild: !0,
                        size: "medium",
                        children: (0, n.jsx)(i(), {
                          href: "https://supabase.com/dashboard",
                          as: "https://supabase.com/dashboard",
                          children: "Start a project",
                        }),
                      }),
                      e.documentation_url &&
                        (0, n.jsx)(l.z, {
                          asChild: !0,
                          type: "default",
                          size: "medium",
                          icon: (0, n.jsx)(c.Z, {}),
                          children: (0, n.jsx)(i(), {
                            href: e.documentation_url,
                            as: e.documentation_url,
                            className: "ml-2",
                            children: "See documentation",
                          }),
                        }),
                    ],
                  }),
                  e.footer &&
                    (0, n.jsx)("div", {
                      className: "mb-4",
                      children: e.footer,
                    }),
                ],
              }),
              e.image &&
                (0, n.jsx)("div", {
                  className:
                    "col-span-12 mt-8 lg:col-span-7 lg:mt-0 xl:col-span-6 xl:col-start-7",
                  children: e.image,
                }),
            ],
          }),
        });
    },
    37347: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          default: function () {
            return G;
          },
        });
      var n = t(52322),
        s = [
          {
            lang: "js",
            title: "Sign up",
            description: "",
            code: "\n  // Sign up with email\n  const { user, error } = await supabase.auth.signUp({\n    email: 'example@email.com',\n    password: 'example-password',\n  })\n\n\n\n\n\n\n\n\n\n\n\n\n\n      ",
          },
          {
            lang: "js",
            title: "Sign in",
            description: "",
            code: "\n  // Sign in with email\n  const { user, error } = await supabase.auth.signIn({\n    email: 'example@email.com',\n    password: 'example-password',\n  })\n\n\n\n\n\n\n\n\n\n\n\n\n      ",
          },
          {
            lang: "js",
            title: "Magic Links",
            description: "",
            code: "\n  // Sign in with magic links\n  const { user, error } = await supabase.auth.signIn({\n    email: 'example@email.com'\n  })\n\n\n\n\n\n  \n\n\n\n\n\n\n\n\n      ",
          },
          {
            lang: "js",
            title: "OAuth logins",
            description: "",
            code: "\n  // Sign in with GitHub\n  // And request extra permissions!\n  const { user, error } = await supabase.auth.signIn({\n    provider: 'github',\n  }, {\n    scopes: 'repo gist notifications'\n  })\n\n\n\n\n\n\n\n\n\n\n\n\n      ",
          },
        ],
        i = [
          {
            lang: "sql",
            title: "Allow read access",
            detail_title: "Public profiles are viewable by everyone",
            detail_text: "Create a policy that allows public access to a table",
            badges_label: "",
            badges: [],
            url: "/docs/guides/auth#allow-read-access",
            code: '\n-- 1. Create table\ncreate table profiles (\n  id serial primary key,\n  name text\n);\n\n-- 2. Enable RLS\nalter table profiles enable row level security;\n\n-- 3. Create Policy\ncreate policy "Public profiles are viewable by everyone." \non profiles for select \nusing ( true );\n'.trim(),
          },
          {
            lang: "sql",
            title: "Restrict updates",
            detail_title: "Users can update their own profiles",
            detail_text:
              "Create a policy that only allows a user to update rows that match their unique ID",
            badges_label: "",
            badges: [],
            url: "/docs/guides/auth#restrict-updates",
            code: '\n-- 1. Create table\ncreate table profiles (\n  id serial primary key,\n  name text\n);\n\n-- 2. Enable RLS\nalter table profiles enable row level security;\n\n-- 3. Create Policy\ncreate policy "Users can update their own profiles." \non profiles for update \nusing ( (select auth.uid()) = id );\n'.trim(),
          },
          {
            lang: "sql",
            title: "Advanced rules",
            detail_title: "Team members can update team details",
            detail_text:
              "Create a policy that allows for team members to update only rows which match their team ID.",
            badges_label: "",
            badges: [],
            url: "/docs/guides/auth#policies-with-joins",
            code: '\ncreate table teams (\n  id bigint primary key generated always as identity,\n  name text\n);\n\ncreate table members (\n  team_id bigint references teams,\n  user_id uuid references auth.users\n);\n\nalter table teams enable row level security;\n\ncreate policy "Team members can update team details if they belong to the team"\n  on teams\n  for update using (\n    (select auth.uid()) in (\n      select user_id from members\n      where team_id = id\n    )\n  );\n'.trim(),
          },
        ],
        l = t(55132);
      let r = (0, l.Z)("Link", [
          [
            "path",
            {
              d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
              key: "1cjeqo",
            },
          ],
          [
            "path",
            {
              d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
              key: "19qd67",
            },
          ],
        ]),
        c = (0, l.Z)("Shield", [
          [
            "path",
            {
              d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
              key: "oel41y",
            },
          ],
        ]),
        o = (0, l.Z)("Briefcase", [
          [
            "path",
            { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" },
          ],
          [
            "rect",
            {
              width: "20",
              height: "14",
              x: "2",
              y: "6",
              rx: "2",
              key: "i6l2r4",
            },
          ],
        ]),
        d = (0, l.Z)("Eye", [
          [
            "path",
            {
              d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
              key: "1nclc0",
            },
          ],
          ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
        ]);
      var u = t(99),
        h = t(55351),
        m = t(25237),
        p = t.n(m),
        g = t(96577),
        x = t.n(g),
        b = t(39097),
        f = t.n(b),
        j = t(5632),
        w = t(20194),
        v = t(29982),
        y = t(30175),
        N = t(27478),
        k = t(37637),
        _ = t(14528),
        A = t(6322),
        S = t(45411),
        C = t(89460),
        Z = t(82577),
        z = JSON.parse(
          '[{"name":"apple"},{"name":"bitbucket"},{"name":"discord"},{"name":"facebook"},{"name":"gitlab"},{"name":"google"},{"name":"messagebird"},{"name":"microsoft"},{"name":"slack"},{"name":"spotify"},{"name":"twitch"},{"name":"twitter"},{"name":"twilio"}]'
        );
      let P = p()(
          () =>
            Promise.all([t.e(1070), t.e(9573), t.e(1401), t.e(1734)]).then(
              t.bind(t, 91935)
            ),
          { loadableGenerated: { webpack: () => [91935] } }
        ),
        E = p()(() => t.e(7042).then(t.bind(t, 57042)), {
          loadableGenerated: { webpack: () => [57042] },
        }),
        M = p()(() => t.e(5909).then(t.bind(t, 75909)), {
          loadableGenerated: { webpack: () => [75909] },
        }),
        I = p()(
          () =>
            Promise.all([
              t.e(1070),
              t.e(9573),
              t.e(1401),
              t.e(6176),
              t.e(6006),
            ]).then(t.bind(t, 66176)),
          { loadableGenerated: { webpack: () => [66176] } }
        ),
        L = p()(
          () =>
            Promise.all([t.e(1401), t.e(4852), t.e(1553), t.e(2677)]).then(
              t.bind(t, 52677)
            ),
          { loadableGenerated: { webpack: () => [52677] } }
        );
      var G = function () {
        let e = (0, y.Gc)(768),
          { basePath: a } = (0, j.useRouter)(),
          t = "Auth | Built-in user management",
          l =
            "Authentication that you can afford that is built in to your supabase project.";
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(h.PB, {
              title: t,
              description: l,
              openGraph: {
                title: t,
                description: l,
                url: "https://supabase.com/auth",
                images: [
                  {
                    url: "https://supabase.com".concat(
                      a,
                      "/images/product/auth/auth-og.jpg"
                    ),
                  },
                ],
              },
            }),
            (0, n.jsxs)(N.default, {
              children: [
                (0, n.jsx)(_.Z, { activePage: Z.$7.AUTHENTICATION }),
                (0, n.jsx)(A.Z, {
                  callout: (0, n.jsx)(S.Z, {
                    size: e ? "tiny" : "small",
                    className: "mb-4 lg:mb-8 -mt-8 lg:-mt-10",
                  }),
                  icon: C.Z.authentication.icon,
                  title: C.Z.authentication.name,
                  h1: [
                    (0, n.jsxs)(
                      "span",
                      {
                        children: [
                          "Open Source Auth",
                          (0, n.jsx)("br", {}),
                          " (with tons of integrations)",
                        ],
                      },
                      "authentication-h1"
                    ),
                  ],
                  subheader: [
                    "Every Supabase project comes with a complete User Management system that works without any additional tools.",
                    "Including PostgreSQL's policy engine, for fine-grained access rules.",
                  ],
                  image: [
                    (0, n.jsx)(w.Z, {
                      src: {
                        light: "".concat(
                          a,
                          "/images/product/auth/header--light.png"
                        ),
                        dark: "".concat(
                          a,
                          "/images/product/auth/header--dark.png"
                        ),
                      },
                      alt: "auth header",
                      layout: "responsive",
                      width: "1372",
                      height: "1074",
                    }),
                  ],
                  documentation_url: "/docs/guides/auth",
                }),
                (0, n.jsx)(k.default, {
                  children: (0, n.jsxs)("div", {
                    className: "grid grid-cols-12",
                    children: [
                      (0, n.jsxs)("div", {
                        className: "col-span-12 mb-10 lg:col-span-3 lg:mb-0",
                        children: [
                          (0, n.jsx)("div", {
                            className: "mb-4 -mt-[1.9rem]",
                            children: (0, n.jsxs)("div", {
                              className:
                                "grid grid-flow-col grid-rows-2 gap-2 xl:w-64",
                              children: [
                                (0, n.jsx)("div", {
                                  className: "flex w-fit items-center",
                                  children: (0, n.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 32.58 31.77",
                                    width: 21,
                                    height: 21,
                                    className: "text-foreground-light",
                                    children: (0, n.jsx)("path", {
                                      fill: "currentColor",
                                      d: "M16.29,0a16.29,16.29,0,0,0-5.15,31.75c.82.15,1.11-.36,1.11-.79s0-1.41,0-2.77C7.7,29.18,6.74,26,6.74,26a4.36,4.36,0,0,0-1.81-2.39c-1.47-1,.12-1,.12-1a3.43,3.43,0,0,1,2.49,1.68,3.48,3.48,0,0,0,4.74,1.36,3.46,3.46,0,0,1,1-2.18c-3.62-.41-7.42-1.81-7.42-8a6.3,6.3,0,0,1,1.67-4.37,5.94,5.94,0,0,1,.16-4.31s1.37-.44,4.48,1.67a15.41,15.41,0,0,1,8.16,0c3.11-2.11,4.47-1.67,4.47-1.67A5.91,5.91,0,0,1,25,11.07a6.3,6.3,0,0,1,1.67,4.37c0,6.26-3.81,7.63-7.44,8a3.85,3.85,0,0,1,1.11,3c0,2.18,0,3.94,0,4.47s.29.94,1.12.78A16.29,16.29,0,0,0,16.29,0Z",
                                    }),
                                  }),
                                }),
                                z.map((e, t) =>
                                  (0, n.jsx)(
                                    "div",
                                    {
                                      className: "flex w-fit items-center",
                                      children: (0, n.jsx)(
                                        x(),
                                        {
                                          src: ""
                                            .concat(a, "/images/product/auth/")
                                            .concat(e.name, "-icon.svg"),
                                          alt: "".concat(
                                            e.name,
                                            " auth login icon"
                                          ),
                                          height: 21,
                                          width: 21,
                                        },
                                        e.name
                                      ),
                                    },
                                    t
                                  )
                                ),
                              ],
                            }),
                          }),
                          (0, n.jsx)("h4", {
                            className: "h4",
                            children: "All the social providers",
                          }),
                          (0, n.jsx)("p", {
                            className: "p text-base",
                            children:
                              "Enable social logins with the click of a button. Google, Facebook, GitHub, Azure (Microsoft), Gitlab, Twitter, Discord, and many more.",
                          }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "col-span-12 mb-10 lg:col-span-3 lg:col-start-5 lg:mb-0",
                        children: [
                          (0, n.jsx)("div", {
                            className: "p mb-4",
                            children: (0, n.jsx)(r, {}),
                          }),
                          (0, n.jsx)("h4", {
                            className: "h4",
                            children: "Fully integrated",
                          }),
                          (0, n.jsx)("p", {
                            className: "p text-base",
                            children:
                              "Incredibly simple Auth, without a single external authentication service. Built-in Authentication, Authorization, and User Management.",
                          }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className: "col-span-12 lg:col-span-3 lg:col-start-9",
                        children: [
                          (0, n.jsx)("div", {
                            className: "p mb-4",
                            children: (0, n.jsx)(c, {}),
                          }),
                          (0, n.jsx)("h4", {
                            className: "h4",
                            children: "Own your data",
                          }),
                          (0, n.jsx)("p", {
                            className: "p text-base",
                            children:
                              "User data stored in your Supabase database so you never have to worry about 3rd party privacy issues. Host your data in 16 different locations.",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, n.jsx)(k.default, {
                  children: (0, n.jsx)(I, {
                    title: "Simple APIs",
                    content: s,
                    size: "large",
                    text: [
                      (0, n.jsx)(
                        "p",
                        {
                          className: "text-base lg:text-lg",
                          children:
                            "APIs that you can understand. With powerful libraries that work on client and server-side applications.",
                        },
                        0
                      ),
                    ],
                    footer: [
                      (0, n.jsxs)(
                        "div",
                        {
                          className:
                            "mt-8 grid grid-cols-12 md:gap-8 lg:gap-0 xl:gap-16",
                          children: [
                            (0, n.jsx)("div", {
                              className:
                                "col-span-12 sm:col-span-6 lg:col-span-12 xl:col-span-4",
                              children: (0, n.jsx)(M, {
                                icon: (0, n.jsx)(o, {}),
                                title: "Enterprise logins",
                                text: "Support for SAML, Azure. More enterprise providers and SSO coming soon.",
                              }),
                            }),
                            (0, n.jsx)("div", {
                              className:
                                "col-span-12 sm:col-span-6 lg:col-span-12 xl:col-span-4",
                              children: (0, n.jsx)(M, {
                                icon: (0, n.jsx)(d, {}),
                                title: "Social login scopes",
                                text: "Request additional user data permissions when using social logins.",
                              }),
                            }),
                          ],
                        },
                        0
                      ),
                    ],
                    documentation_link: "/docs/guides/auth",
                  }),
                }),
                (0, n.jsx)("div", {
                  className: "relative",
                  children: (0, n.jsxs)("div", {
                    className: "section--masked",
                    children: [
                      (0, n.jsx)("div", {
                        className: "section--bg-masked",
                        children: (0, n.jsx)("div", {
                          className:
                            "section--bg border-t border-b border-control",
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className: "section-container pt-12 pb-0",
                        children: (0, n.jsx)("div", {
                          className: "overflow-x-hidden",
                          children: (0, n.jsx)(k.default, {
                            className: "mb-0 pb-8",
                            children: (0, n.jsx)(L, {}),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, n.jsx)(k.default, {
                  children: (0, n.jsxs)("div", {
                    className: "grid grid-cols-12 lg:mt-16 lg:gap-16",
                    children: [
                      (0, n.jsxs)("div", {
                        className: "col-span-12 mb-8 lg:col-span-5",
                        children: [
                          (0, n.jsx)("h2", {
                            className: "h3",
                            children: "User permissions without the middleware",
                          }),
                          (0, n.jsx)("p", {
                            className: "p text-base lg:text-lg",
                            children:
                              "Supabase Auth works without any additional servers. Build Authorization rules with Postgres' Row Level Security, controlling who can create, edit and delete specific rows in your database.",
                          }),
                          (0, n.jsx)("p", {
                            className: "p",
                            children:
                              "Policies can be written in SQL or using the dashboard online.",
                          }),
                          (0, n.jsx)(v.z, {
                            asChild: !0,
                            size: "small",
                            type: "default",
                            className: "mt-4",
                            icon: (0, n.jsx)(u.Z, {}),
                            children: (0, n.jsx)(f(), {
                              href: "/docs/guides/database/postgres/row-level-security",
                              children: "Explore documentation",
                            }),
                          }),
                        ],
                      }),
                      (0, n.jsx)("div", {
                        className: "col-span-12 lg:col-span-6 lg:col-start-7",
                        children: (0, n.jsx)(P, { content: i }),
                      }),
                    ],
                  }),
                }),
                (0, n.jsx)(E, {}),
              ],
            }),
          ],
        });
      };
    },
    47048: function (e, a, t) {
      "use strict";
      t.d(a, {
        Z: function () {
          return n;
        },
      });
      let n = (0, t(55132).Z)("BookOpen", [
        [
          "path",
          { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z", key: "vv98re" },
        ],
        [
          "path",
          { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z", key: "1cyq3y" },
        ],
      ]);
    },
    20194: function (e, a, t) {
      "use strict";
      t.d(a, {
        Z: function () {
          return m;
        },
      });
      var n = t(52322);
      t(96813);
      var s = t(2784),
        i = t(96577),
        l = t.n(i),
        r = t(22965),
        c = t(30175),
        o = t(44382),
        d = t(72170),
        u = (e) => {
          let { img: a } = e;
          return (0, n.jsx)("figure", {
            className: " [&_img]:rounded-md [&_img]:border [&_img]:bg-default ",
            children: a,
          });
        };
      let h = (e) => {
        switch (e) {
          case "left":
            return "text-left";
          case "right":
            return "text-right";
          default:
            return "text-center";
        }
      };
      var m = (e) => {
        let { src: a, alt: t = "", zoomable: i, ...m } = e,
          [p, g] = (0, s.useState)(!1),
          { resolvedTheme: x } = (0, r.F)(),
          b = (0, c.Gc)(),
          f = i ? d.Z : "span",
          j =
            "string" == typeof a
              ? a
              : (null == x ? void 0 : x.includes("dark"))
              ? a.dark
              : a.light;
        return ((0, s.useEffect)(() => {
          g(!0);
        }, []),
        p)
          ? (0, n.jsxs)("figure", {
              className: (0, o.cn)(
                "next-image--dynamic-fill",
                m.containerClassName
              ),
              children: [
                (0, n.jsx)(f, {
                  ...(i ? { ZoomContent: u, zoomMargin: b ? 20 : 80 } : void 0),
                  children: (0, n.jsx)(
                    l(),
                    {
                      alt: t,
                      src: j,
                      sizes: i
                        ? "(max-width: 768px) 200vw, (max-width: 1200px) 120vw, 200vw"
                        : "(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 33vw",
                      className: m.className,
                      style: m.style,
                      ...m,
                    },
                    x
                  ),
                }),
                m.caption &&
                  (0, n.jsx)("figcaption", {
                    className: (0, o.cn)(h(m.captionAlign)),
                    children: m.caption,
                  }),
              ],
            })
          : null;
      };
    },
  },
  function (e) {
    e.O(
      0,
      [5126, 2787, 2251, 4697, 977, 5669, 7478, 6999, 2888, 9774, 179],
      function () {
        return e((e.s = 91485));
      }
    ),
      (_N_E = e.O());
  },
]);
