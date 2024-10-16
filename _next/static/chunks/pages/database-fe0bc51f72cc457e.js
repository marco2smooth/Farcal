(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5498, 6006, 1070],
  {
    71519: function (e, a, t) {
      "use strict";
      t.d(a, {
        VY: function () {
          return C;
        },
        aV: function () {
          return S;
        },
        fC: function () {
          return k;
        },
        xz: function () {
          return E;
        },
      });
      var s = t(7560),
        r = t(2784),
        n = t(38930),
        i = t(72422),
        l = t(19106),
        o = t(80254),
        d = t(57915),
        c = t(97368),
        u = t(68622),
        h = t(62825);
      let p = "Tabs",
        [b, m] = (0, i.b)(p, [l.Pc]),
        g = (0, l.Pc)(),
        [x, f] = b(p),
        v = (0, r.forwardRef)((e, a) => {
          let {
              __scopeTabs: t,
              value: n,
              onValueChange: i,
              defaultValue: l,
              orientation: o = "horizontal",
              dir: p,
              activationMode: b = "automatic",
              ...m
            } = e,
            g = (0, c.gm)(p),
            [f, v] = (0, u.T)({ prop: n, onChange: i, defaultProp: l });
          return (0, r.createElement)(
            x,
            {
              scope: t,
              baseId: (0, h.M)(),
              value: f,
              onValueChange: v,
              orientation: o,
              dir: g,
              activationMode: b,
            },
            (0, r.createElement)(
              d.WV.div,
              (0, s.Z)({ dir: g, "data-orientation": o }, m, { ref: a })
            )
          );
        }),
        j = (0, r.forwardRef)((e, a) => {
          let { __scopeTabs: t, loop: n = !0, ...i } = e,
            o = f("TabsList", t),
            c = g(t);
          return (0, r.createElement)(
            l.fC,
            (0, s.Z)({ asChild: !0 }, c, {
              orientation: o.orientation,
              dir: o.dir,
              loop: n,
            }),
            (0, r.createElement)(
              d.WV.div,
              (0, s.Z)(
                { role: "tablist", "aria-orientation": o.orientation },
                i,
                { ref: a }
              )
            )
          );
        }),
        w = (0, r.forwardRef)((e, a) => {
          let { __scopeTabs: t, value: i, disabled: o = !1, ...c } = e,
            u = f("TabsTrigger", t),
            h = g(t),
            p = N(u.baseId, i),
            b = _(u.baseId, i),
            m = i === u.value;
          return (0, r.createElement)(
            l.ck,
            (0, s.Z)({ asChild: !0 }, h, { focusable: !o, active: m }),
            (0, r.createElement)(
              d.WV.button,
              (0, s.Z)(
                {
                  type: "button",
                  role: "tab",
                  "aria-selected": m,
                  "aria-controls": b,
                  "data-state": m ? "active" : "inactive",
                  "data-disabled": o ? "" : void 0,
                  disabled: o,
                  id: p,
                },
                c,
                {
                  ref: a,
                  onMouseDown: (0, n.M)(e.onMouseDown, (e) => {
                    o || 0 !== e.button || !1 !== e.ctrlKey
                      ? e.preventDefault()
                      : u.onValueChange(i);
                  }),
                  onKeyDown: (0, n.M)(e.onKeyDown, (e) => {
                    [" ", "Enter"].includes(e.key) && u.onValueChange(i);
                  }),
                  onFocus: (0, n.M)(e.onFocus, () => {
                    let e = "manual" !== u.activationMode;
                    m || o || !e || u.onValueChange(i);
                  }),
                }
              )
            )
          );
        }),
        y = (0, r.forwardRef)((e, a) => {
          let {
              __scopeTabs: t,
              value: n,
              forceMount: i,
              children: l,
              ...c
            } = e,
            u = f("TabsContent", t),
            h = N(u.baseId, n),
            p = _(u.baseId, n),
            b = n === u.value,
            m = (0, r.useRef)(b);
          return (
            (0, r.useEffect)(() => {
              let e = requestAnimationFrame(() => (m.current = !1));
              return () => cancelAnimationFrame(e);
            }, []),
            (0, r.createElement)(o.z, { present: i || b }, ({ present: t }) =>
              (0, r.createElement)(
                d.WV.div,
                (0, s.Z)(
                  {
                    "data-state": b ? "active" : "inactive",
                    "data-orientation": u.orientation,
                    role: "tabpanel",
                    "aria-labelledby": h,
                    hidden: !t,
                    id: p,
                    tabIndex: 0,
                  },
                  c,
                  {
                    ref: a,
                    style: {
                      ...e.style,
                      animationDuration: m.current ? "0s" : void 0,
                    },
                  }
                ),
                t && l
              )
            )
          );
        });
      function N(e, a) {
        return `${e}-trigger-${a}`;
      }
      function _(e, a) {
        return `${e}-content-${a}`;
      }
      let k = v,
        S = j,
        E = w,
        C = y;
    },
    2275: function (e, a, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/database",
        function () {
          return t(10279);
        },
      ]);
    },
    21221: function (e, a, t) {
      "use strict";
      t.r(a);
      var s = t(52322);
      a.default = function (e) {
        let { icon: a, color: t } = e;
        return (0, s.jsx)("div", {
          className: [
            "inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md",
            t && "black" !== t
              ? ""
              : "bg-foreground text-background-alternative",
            t && "gray" === t ? "bg-border-strong text-foreground-light" : "",
            t && "green" === t ? "bg-brand text-brand-100" : "",
            t && "alt" === t ? "bg-alternative text-brand" : "",
          ].join(" "),
          children: (0, s.jsx)("svg", {
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
            children: (0, s.jsx)("path", {
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
      var s = t(52322);
      t(2784);
      var r = t(44382),
        n = t(39097),
        i = t.n(n),
        l = t(82577),
        o = t(37637);
      a.Z = function (e) {
        let { activePage: a } = e;
        return (0, s.jsx)("nav", {
          className:
            "relative z-30 hidden md:flex items-center bg-background w-full border-b",
          children: (0, s.jsx)(o.default, {
            className: "!py-0 flex gap-3 items-center",
            children: Object.entries(l.RB).map((e) => {
              let t = e[1],
                n = t.name === l.$7.AUTHENTICATION;
              return (0, s.jsxs)(
                i(),
                {
                  className: (0, r.cn)(
                    "flex items-center gap-1.5 px-2 first:-ml-2 py-4 border-b border-transparent text-sm text-foreground-lighter hover:text-foreground",
                    "focus-visible:ring-2 focus-visible:ring-foreground-lighter focus-visible:text-foreground focus-visible:outline-brand-600",
                    t.name === a && "border-foreground-light text-foreground"
                  ),
                  href: "/".concat(
                    n ? "auth" : t.name.toLowerCase().replace(" ", "-")
                  ),
                  children: [
                    (0, s.jsx)("svg", {
                      className:
                        "h-4 w-4 group-hover/menu-item:text-foreground group-focus-visible/menu-item:text-foreground",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 18 18",
                      children: (0, s.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "1",
                        d: t.icon["18"],
                        stroke: "currentColor",
                      }),
                    }),
                    (0, s.jsx)("p", { children: n ? "Auth" : t.name }),
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
      var s = t(52322),
        r = t(39097),
        n = t.n(r),
        i = t(29982),
        l = t(21221),
        o = t(47048);
      a.Z = (e) =>
        (0, s.jsx)("div", {
          className:
            "container relative mx-auto px-6 pt-16 pb-0 sm:px-16 lg:pt-28 xl:px-20",
          children: (0, s.jsxs)("div", {
            className: "grid grid-cols-12",
            children: [
              (0, s.jsxs)("div", {
                className: "col-span-12 space-y-8 lg:col-span-5",
                children: [
                  e.callout && e.callout,
                  (0, s.jsxs)("div", {
                    children: [
                      e.icon || e.title
                        ? (0, s.jsxs)("div", {
                            className: "mb-4 flex items-center gap-3",
                            children: [
                              e.icon && (0, s.jsx)(l.default, { icon: e.icon }),
                              e.title &&
                                (0, s.jsx)(
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
                      (0, s.jsx)(
                        "h1",
                        { className: "h1", children: e.h1 },
                        "h1"
                      ),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    children:
                      e.subheader &&
                      e.subheader.map((e, a) =>
                        (0, s.jsx)(
                          "p",
                          { className: "p lg:text-lg", children: e },
                          a
                        )
                      ),
                  }),
                  (0, s.jsxs)("div", {
                    className: "flex flex-row md:flex-row md:items-center",
                    children: [
                      (0, s.jsx)(i.z, {
                        asChild: !0,
                        size: "medium",
                        children: (0, s.jsx)(n(), {
                          href: "https://supabase.com/dashboard",
                          as: "https://supabase.com/dashboard",
                          children: "Start a project",
                        }),
                      }),
                      e.documentation_url &&
                        (0, s.jsx)(i.z, {
                          asChild: !0,
                          type: "default",
                          size: "medium",
                          icon: (0, s.jsx)(o.Z, {}),
                          children: (0, s.jsx)(n(), {
                            href: e.documentation_url,
                            as: e.documentation_url,
                            className: "ml-2",
                            children: "See documentation",
                          }),
                        }),
                    ],
                  }),
                  e.footer &&
                    (0, s.jsx)("div", {
                      className: "mb-4",
                      children: e.footer,
                    }),
                ],
              }),
              e.image &&
                (0, s.jsx)("div", {
                  className:
                    "col-span-12 mt-8 lg:col-span-7 lg:mt-0 xl:col-span-6 xl:col-start-7",
                  children: e.image,
                }),
            ],
          }),
        });
    },
    10279: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          default: function () {
            return Q;
          },
        });
      var s = t(52322);
      t(31395);
      var r = t(55351),
        n = t(25237),
        i = t.n(n),
        l = t(96577),
        o = t.n(l),
        d = t(39097),
        c = t.n(d),
        u = t(5632),
        h = t(2784),
        p = t(41401),
        b = t(20194),
        m = t(93419),
        g = t(83940),
        x = t(29982),
        f = t(89460),
        v = [
          {
            lang: "js",
            title: "Create a record",
            size: "large",
            code: "// Create a record\n\n// Insert new record into a table called `rooms`\nconst { data, error } = await supabase\n  .from('rooms')\n  .insert({ \n    name: 'Supabase Fan Club', \n    public: true \n  })\n\n\n  \n\n\n\n\n\n\n\n\n",
          },
          {
            lang: "js",
            title: "Read a record",
            size: "large",
            code: "// Read a record\n\n// Retrieve all of the `rooms`, \n// and get all the messages for each room.\nconst { data, error } = await supabase\n  .from('rooms').select(`\n    name,\n    messages ( text )\n  `)\n  .eq('public', true)\n\n\n\n\n\n\n\n\n\n\n",
          },
        ],
        j = [
          {
            lang: "sql",
            title: "Geographical",
            code: "SELECT superhero.name\nFROM city, superhero\nWHERE ST_Contains(city.geom, superhero.geom)\nAND city.name = 'Gotham';\n  ",
            detail_title: "Spatial and Geographic objects for PostgreSQL",
            detail_text:
              "PostGIS is a spatial database extender for PostgreSQL object-relational database. It adds support for geographic objects allowing location queries to be run in SQL.",
            badges_label: "Extensions used:",
            badges: ["PostGIS"],
            url: "",
          },
          {
            lang: "sql",
            title: "Crypto",
            code: "-- This can be run in the SQL editor\npsql\nCREATE EXTENSION pgcrypto;\nSELECT crypt('mypass', gen_salt('bf', 4));\ncrypt\n--------------------------------------------------------------\n$2a$04$1bfMQDOR6aLyD4q3KVb8/ujG7ZAkyie4d/s3ABwuZNbzkFFgXtC76\n\n-- We can now execute the statement below to store the string safely in the database:\nINSERT INTO users (user_id,enc_pass) VALUES (1,'$2a$04$1bfMQDOR6aLyD4q3KVb8/ujG7ZAkyie4d/s3ABwuZNbzkFFgXtC76');",
            detail_title: "Cryptographic functions for PostgreSQL.",
            detail_text:
              "The pgcrypto module is a cryptographic extension that provides a number of hashing and cryptographic functions.",
            badges_label: "Extensions used:",
            badges: ["pgcrypto"],
            url: "",
          },
          {
            lang: "sql",
            title: "Monitoring",
            code: "SELECT order_details.qty,\n    order_details.item_id,\n    order_details.item_price\nFROM order_details,\n  customers\nWHERE customers.id = order_details.customer_id\nAND customers.email = 'john@supabase.io'\n\n-- You can now view pg_stat_statements\n\nSELECT * \nFROM pg_stat_statements;\n\nuserid              | 16384\ndbid                | 16388\nquery               | select * from users where email = ?;\ncalls               | 2\ntotal_time          | 0.000268\nrows                | 2\nshared_blks_hit     | 16\nshared_blks_read    | 0\nshared_blks_dirtied | 0\nshared_blks_written | 0\nlocal_blks_hit      | 0\nlocal_blks_read     | 0\nlocal_blks_dirtied  | 0\nlocal_blks_written  | 0\n...\n",
            detail_title: "Tracking execution statistics of all SQL statements",
            detail_text:
              "The pg_stat_statements module provides a means for tracking execution statistics of all SQL statements executed by a server.",
            badges_label: "Extensions used:",
            badges: ["pg_stat_statements"],
            url: "",
          },
        ],
        w = JSON.parse(
          '[{"title":"Full SQL","label":"SQL Editor built in","img_url":"/images/product/database/sql-view/sql-editor.png","text":"Create tables, functions, join tables - A full SQL editor built into the dashboard","url":""},{"title":"Monaco editor","label":"Monaco editor","img_url":"/images/product/database/sql-view/manaco-editor.png","text":"Built in Monaco editor, with rich validation and autocomplete.","url":""},{"title":"Favorite queries","label":"Favorite queries","img_url":"/images/product/database/sql-view/favorites.png","text":"Save your favorite queries to use again and again.","url":""},{"title":"Export to CSV","label":"Select and Export","img_url":"/images/product/database/sql-view/export.png","text":"Any output can be exported into a CSV","url":""}]'
        ),
        y = JSON.parse(
          '[{"title":"The simplicity of a spreadsheet","label":"Spreadsheet like editing","img_url":"/images/product/database/table-view/spreadsheet-interface.png","text":"Add, edit, and update your data with the simplicity of a no-code tool.","url":"/docs/guides/database/tables"},{"title":"Create tables","label":"Create tables","img_url":"/images/product/database/table-view/create-table.png","text":"Add tables, columns and rows right in the dashboard. Without a single line SQL.","url":"/docs/guides/database/tables#creating-tables"},{"title":"Set up foreign keys","label":"Set up foreign keys","img_url":"/images/product/database/table-view/foreign-keys.png","text":"Build connections throughout your data with the full power of a Relational Database.","url":"/docs/guides/database/tables#joining-tables-with-foreign-keys"},{"title":"Select and Export","label":"Select and Export","img_url":"/images/product/database/table-view/export.png","text":"Pick the rows you want and export them into a CSV. ","url":""}]'
        ),
        N = {
          title: "Branching",
          badge: "New",
          features: [
            "Branch your Supabase project",
            "Sync with your git branches",
            "Manage every Preview from the Dashboard",
            "Support for Vercel Previews",
          ],
          ctas: [
            {
              label: "Learn more",
              href: "https://supabase.com/docs/guides/platform/branching",
              target: "_blank",
              type: "default",
            },
          ],
          image: {
            dark: "/images/product/database/branching.svg",
            light: "/images/product/database/branching-light.svg",
          },
        },
        _ = {
          title: "Read Replicas",
          badge: "New",
          features: [
            "Serve data closer to your users",
            "Provide data redundancy",
            "Run complex queries without affecting your primary database",
            "Distribute load across various databases",
          ],
          ctas: [
            {
              label: "Learn more",
              href: "https://supabase.com/docs/guides/platform/read-replicas",
              target: "_blank",
              type: "default",
            },
          ],
          image: {
            dark: "/images/product/database/read-replicas.svg",
            light: "/images/product/database/read-replicas-light.svg",
          },
        },
        k = t(51929),
        S = t(99),
        E = t(82577),
        C = t(88554),
        L = t(14528),
        P = t(6322);
      let Z = i()(
          () => Promise.all([t.e(5126), t.e(5334)]).then(t.bind(t, 25334)),
          { loadableGenerated: { webpack: () => [25334] } }
        ),
        T = i()(
          () => Promise.all([t.e(2358), t.e(3580)]).then(t.bind(t, 53580)),
          { loadableGenerated: { webpack: () => [53580] } }
        ),
        M = i()(
          () => Promise.all([t.e(9573), t.e(8502)]).then(t.bind(t, 91935)),
          { loadableGenerated: { webpack: () => [91935] } }
        ),
        q = i()(() => t.e(5909).then(t.bind(t, 75909)), {
          loadableGenerated: { webpack: () => [75909] },
        }),
        D = i()(
          () =>
            Promise.all([t.e(5126), t.e(2787), t.e(4697), t.e(7478)]).then(
              t.bind(t, 27478)
            ),
          { loadableGenerated: { webpack: () => [27478] } }
        ),
        A = i()(() => Promise.resolve().then(t.bind(t, 37637)), {
          loadableGenerated: { webpack: () => [37637] },
        }),
        R = i()(() => Promise.resolve().then(t.bind(t, 21221)), {
          loadableGenerated: { webpack: () => [21221] },
        }),
        V = i()(
          () =>
            Promise.all([t.e(9573), t.e(6176), t.e(5159)]).then(
              t.bind(t, 66176)
            ),
          { loadableGenerated: { webpack: () => [66176] } }
        ),
        z = i()(
          () =>
            Promise.all([t.e(5126), t.e(4852), t.e(1553), t.e(9402)]).then(
              t.bind(t, 52677)
            ),
          { loadableGenerated: { webpack: () => [52677] } }
        );
      var Q = function () {
        let { basePath: e } = (0, u.useRouter)(),
          [a, t] = (0, h.useState)(void 0),
          [n, i] = (0, h.useState)(0),
          l = "Database | Open source SQL Database",
          d =
            "With supabase’s APIs and easy to use dashboard, it makes designing relational databases easy.";
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(r.PB, {
              title: l,
              description: d,
              openGraph: {
                title: l,
                description: d,
                url: "https://supabase.com/database",
                images: [
                  {
                    url: "https://supabase.com".concat(
                      e,
                      "/images/product/database/database-og.jpg"
                    ),
                  },
                ],
              },
            }),
            (0, s.jsxs)(D, {
              children: [
                (0, s.jsx)(L.Z, { activePage: E.$7.DATABASE }),
                (0, s.jsx)(P.Z, {
                  icon: f.Z.database.icon,
                  title: f.Z.database.name,
                  h1: [
                    (0, s.jsxs)(
                      "span",
                      {
                        children: [
                          "Open Source SQL Database",
                          (0, s.jsx)("br", {}),
                          " (without the hassle)",
                        ],
                      },
                      "database-h1"
                    ),
                  ],
                  subheader: [
                    "Every Supabase project is a dedicated PostgreSQL database, trusted by millions of developers.",
                    "PostgreSQL is one of the world's most scalable databases.",
                  ],
                  image: [
                    (0, s.jsx)(b.Z, {
                      src: {
                        dark: "".concat(
                          e,
                          "/images/product/database/header--dark-2.png"
                        ),
                        light: "".concat(
                          e,
                          "/images/product/database/header--light-2.png"
                        ),
                      },
                      alt: "database header",
                      layout: "responsive",
                      width: "1680",
                      height: "1116",
                    }),
                  ],
                  documentation_url: "/docs/guides/database",
                }),
                (0, s.jsx)(A, {
                  children: (0, s.jsxs)("div", {
                    className: "grid grid-cols-12",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "col-span-12 mb-10 lg:col-span-3 lg:mb-0",
                        children: [
                          (0, s.jsxs)("div", {
                            className: "p mb-4 flex items-center space-x-2",
                            children: [
                              (0, s.jsx)(R, { icon: f.Z.database.icon }),
                              (0, s.jsx)(k.Z, {}),
                              (0, s.jsx)("div", {
                                className: "flex w-fit items-center",
                                children: (0, s.jsx)(o(), {
                                  src: "".concat(
                                    e,
                                    "/images/product/database/postgresql-icon.svg"
                                  ),
                                  width: 30,
                                  height: 30,
                                  alt: "postgresql icon",
                                }),
                              }),
                            ],
                          }),
                          (0, s.jsx)("h4", {
                            className: "h4",
                            children: "Just Postgres",
                          }),
                          (0, s.jsx)("p", {
                            className: "p",
                            children:
                              "Every Supabase project is a dedicated Postgres database.",
                          }),
                          (0, s.jsx)("p", {
                            className: "p text-sm",
                            children:
                              "100% portable. Bring your existing Postgres database, or migrate away at any time.",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          "col-span-12 mb-10 lg:col-span-3 lg:col-start-5 lg:mb-0",
                        children: [
                          (0, s.jsxs)("div", {
                            className: "p mb-4 flex items-center space-x-2",
                            children: [
                              (0, s.jsx)(R, { icon: f.Z.database.icon }),
                              (0, s.jsx)(k.Z, {}),
                              (0, s.jsx)(R, { icon: f.Z.authentication.icon }),
                            ],
                          }),
                          (0, s.jsx)("h4", {
                            className: "h4",
                            children: "Built-in Auth",
                          }),
                          (0, s.jsx)("p", {
                            className: "p",
                            children:
                              "Leveraging PostgreSQL's proven Row Level Security.",
                          }),
                          (0, s.jsx)("p", {
                            className: "p text-sm",
                            children:
                              "Integrated with JWT authentication which controls exactly what your users can access.",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "col-span-12 lg:col-span-3 lg:col-start-9",
                        children: [
                          (0, s.jsxs)("div", {
                            className: "p mb-4 flex items-center space-x-2",
                            children: [
                              (0, s.jsx)(R, { icon: f.Z.database.icon }),
                              (0, s.jsx)(k.Z, {}),
                              (0, s.jsx)(R, {
                                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                              }),
                            ],
                          }),
                          (0, s.jsx)("h4", {
                            className: "h4",
                            children: "Realtime enabled",
                          }),
                          (0, s.jsx)("p", {
                            className: "p",
                            children: "Data-change listeners over websockets.",
                          }),
                          (0, s.jsx)("p", {
                            className: "p text-sm",
                            children:
                              "Subscribe and react to database changes, milliseconds after they happen.",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, s.jsxs)(A, {
                  className: "!py-0 grid lg:grid-cols-2 gap-2 lg:gap-4",
                  children: [(0, s.jsx)(Z, { ...N }), (0, s.jsx)(Z, { ..._ })],
                }),
                (0, s.jsx)(A, {
                  className: "text-center md:pb-0 lg:pb-0",
                  children: (0, s.jsx)("div", {
                    className: "grid grid-cols-12",
                    children: (0, s.jsxs)("div", {
                      className: "col-span-12 lg:col-span-8 lg:col-start-3",
                      children: [
                        (0, s.jsx)("h2", {
                          className: "h3",
                          children: "Easy to use dashboard",
                        }),
                        (0, s.jsx)("p", {
                          className: "p",
                          children:
                            "The simplicity of a Table Editor, or the power of a SQL editor. Your choice.",
                        }),
                      ],
                    }),
                  }),
                }),
                (0, s.jsx)("div", {
                  className: "grid",
                  children: (0, s.jsx)("div", {
                    className: "dashboard-tabs sbui-tabs--underline-alt",
                    children: (0, s.jsxs)(m.Z, {
                      size: "xlarge",
                      activeId: n.toString(),
                      onChange: (e) => {
                        var t;
                        i((t = Number(e))), a.slideTo(t);
                      },
                      type: "underlined",
                      tabBarStyle: { marginBottom: 0 },
                      children: [
                        (0, s.jsx)(m.Z.Panel, {
                          id: "0",
                          label: "Table editor",
                          children: (0, s.jsx)("span", {}),
                        }),
                        (0, s.jsx)(m.Z.Panel, {
                          id: "1",
                          label: "SQL editor",
                          children: (0, s.jsx)("span", {}),
                        }),
                      ],
                    }),
                  }),
                }),
                (0, s.jsx)(p.tq, {
                  onSwiper: t,
                  style: { overflow: "hidden" },
                  initialSlide: 0,
                  spaceBetween: 0,
                  slidesPerView: 1,
                  speed: 300,
                  allowTouchMove: !1,
                  children: (0, s.jsxs)("div", {
                    className: "grid grid-cols-12",
                    children: [
                      (0, s.jsx)(
                        p.o5,
                        {
                          children: (0, s.jsx)(A, {
                            className: "pt-16 pb-0",
                            children: (0, s.jsx)(T, {
                              content: y,
                              footer: [
                                (0, s.jsx)(
                                  C.V,
                                  {
                                    handle: "@Elsolo244",
                                    img_url: "".concat(
                                      e,
                                      "/images/twitter-profiles/v6citnk33y2wpeyzrq05_400x400.jpeg"
                                    ),
                                    quote:
                                      "Where has @supabase been all my life? \uD83D\uDE0D",
                                  },
                                  "@Elsolo244"
                                ),
                              ],
                            }),
                          }),
                        },
                        0
                      ),
                      (0, s.jsx)(
                        p.o5,
                        {
                          children: (0, s.jsx)(A, {
                            className: "pt-16 pb-0",
                            children: (0, s.jsx)(T, {
                              content: w,
                              footer: [
                                (0, s.jsx)(
                                  C.V,
                                  {
                                    handle: "@jim_bisenius",
                                    img_url: "".concat(
                                      e,
                                      "/images/twitter-profiles/rLgwUZSB_400x400.jpg"
                                    ),
                                    quote:
                                      "@MongoDB or @MySQL?!?! Please, let me introduce you to @supabase and the wonderful world of @PostgreSQL before it's too late!!",
                                  },
                                  "@jim_bisenius"
                                ),
                              ],
                            }),
                          }),
                        },
                        1
                      ),
                    ],
                  }),
                }),
                (0, s.jsx)(A, {
                  className: "-mb-48",
                  children: (0, s.jsx)(V, {
                    content: v,
                    title: "Never write an API again",
                    text: [
                      (0, s.jsx)(
                        "p",
                        {
                          children:
                            "We introspect your database and provide instant APIs. Focus on building your product, while Supabase handles the CRUD.",
                        },
                        0
                      ),
                    ],
                    footer: [
                      (0, s.jsx)(
                        "div",
                        {
                          className: "grid grid-cols-12",
                          children: (0, s.jsxs)("div", {
                            className:
                              "col-span-12 mt-0 flex flex-col 2xl:flex-row lg:col-span-6 xl:col-span-12 xl:mb-8 gap-1",
                            children: [
                              (0, s.jsx)("p", {
                                className: "text-foreground-light m-0",
                                children: "Available libraries:",
                              }),
                              (0, s.jsxs)("div", {
                                className: "flex gap-1",
                                children: [
                                  (0, s.jsx)(c(), {
                                    href: "/docs/reference/javascript/introduction",
                                    target: "_blank",
                                    children: (0, s.jsx)(g.C, {
                                      children: "Javascript",
                                    }),
                                  }),
                                  (0, s.jsx)(c(), {
                                    href: "/docs/reference/dart/introduction",
                                    target: "_blank",
                                    children: (0, s.jsx)(g.C, {
                                      children: "Flutter",
                                    }),
                                  }),
                                  (0, s.jsx)(c(), {
                                    href: "/docs/reference/python/introduction",
                                    target: "_blank",
                                    children: (0, s.jsx)(g.C, {
                                      children: "Python",
                                    }),
                                  }),
                                  (0, s.jsx)(c(), {
                                    href: "/docs/reference/csharp/introduction",
                                    target: "_blank",
                                    children: (0, s.jsx)(g.C, {
                                      children: "C#",
                                    }),
                                  }),
                                  (0, s.jsx)(c(), {
                                    href: "/docs/reference/kotlin/introduction",
                                    target: "_blank",
                                    children: (0, s.jsx)(g.C, {
                                      children: "Kotlin",
                                    }),
                                  }),
                                  (0, s.jsx)(c(), {
                                    href: "/docs/reference/swift/introduction",
                                    target: "_blank",
                                    children: (0, s.jsx)(g.C, {
                                      children: "Swift",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        },
                        0
                      ),
                    ],
                    documentation_link: "/docs/guides/database",
                  }),
                }),
                (0, s.jsx)("div", {
                  className: "relative",
                  children: (0, s.jsxs)("div", {
                    className: "section--masked",
                    children: [
                      (0, s.jsx)("div", {
                        className: "section--bg-masked",
                        children: (0, s.jsx)("div", {
                          className:
                            "section--bg border-t border-b border-control",
                        }),
                      }),
                      (0, s.jsx)("div", {
                        className: "section-container pt-12 pb-0",
                        children: (0, s.jsx)("div", {
                          className: "overflow-x-hidden",
                          children: (0, s.jsx)(A, {
                            className: "mb-0 pb-8 lg:pt-32",
                            children: (0, s.jsx)(z, {}),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, s.jsx)(A, {
                  children: (0, s.jsxs)("div", {
                    className: "grid grid-cols-12 lg:gap-16",
                    children: [
                      (0, s.jsxs)("div", {
                        className:
                          "col-span-12 mb-8 lg:col-span-6 xl:col-span-5",
                        children: [
                          (0, s.jsx)("h2", {
                            className: "h3",
                            children: "Extend your database",
                          }),
                          (0, s.jsx)("p", {
                            className: "p",
                            children:
                              "Supabase works natively with Postgres extensions.",
                          }),
                          (0, s.jsx)("p", {
                            className: "p",
                            children:
                              "Choose from a huge collection of Postgres extensions, enabled with a single click.",
                          }),
                          (0, s.jsx)(q, {
                            title: "40+ preinstalled extensions",
                            text: "We only show a few of the extensions supported by Supabase here, but we preinstall many more that you can use right away.",
                          }),
                          (0, s.jsx)(x.z, {
                            asChild: !0,
                            size: "small",
                            type: "default",
                            icon: (0, s.jsx)(S.Z, {}),
                            children: (0, s.jsx)(c(), {
                              href: "/docs/guides/database",
                              children: "Explore documentation",
                            }),
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "col-span-12 mt-8 lg:col-span-6 lg:col-start-7 lg:mt-0",
                        children: (0, s.jsx)(M, { content: j }),
                      }),
                    ],
                  }),
                }),
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
          return s;
        },
      });
      let s = (0, t(55132).Z)("BookOpen", [
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
    88554: function (e, a, t) {
      "use strict";
      t.d(a, {
        V: function () {
          return l;
        },
      });
      var s = t(52322),
        r = t(96577),
        n = t.n(r),
        i = t(44382);
      function l(e) {
        return (0, s.jsxs)("div", {
          className: (0, i.cn)(
            "bg-surface-75",
            "border group-hover/tweet-card:border-foreground-muted transition-colors",
            "rounded-2xl p-6",
            "drop-shadow-sm",
            e.className
          ),
          children: [
            (0, s.jsx)("div", {
              className: "relative",
              children: (0, s.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [
                  e.img_url
                    ? (0, s.jsx)("div", {
                        className:
                          "h-10 w-10 overflow-hidden rounded-full border border-control",
                        children: (0, s.jsx)(n(), {
                          src: e.img_url,
                          width: "64",
                          height: "64",
                          alt: "".concat(e.handle, " twitter image"),
                        }),
                      })
                    : (0, s.jsx)("div", { className: "w-6" }),
                  (0, s.jsx)("p", {
                    className: "text-foreground text-sm font-medium",
                    children: e.handle,
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "absolute -left-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-black",
                    children: (0, s.jsx)("svg", {
                      className: "h-[12px] w-[12px]",
                      fill: "white",
                      viewBox: "0 0 24 24",
                      "aria-hidden": "true",
                      children: (0, s.jsx)("path", {
                        d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                      }),
                    }),
                  }),
                ],
              }),
            }),
            (0, s.jsxs)("p", {
              className: "text-foreground-lighter mt-3 text-base",
              children: ['"', e.quote, '"'],
            }),
          ],
        });
      }
    },
    20194: function (e, a, t) {
      "use strict";
      t.d(a, {
        Z: function () {
          return p;
        },
      });
      var s = t(52322);
      t(96813);
      var r = t(2784),
        n = t(96577),
        i = t.n(n),
        l = t(22965),
        o = t(30175),
        d = t(44382),
        c = t(72170),
        u = (e) => {
          let { img: a } = e;
          return (0, s.jsx)("figure", {
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
      var p = (e) => {
        let { src: a, alt: t = "", zoomable: n, ...p } = e,
          [b, m] = (0, r.useState)(!1),
          { resolvedTheme: g } = (0, l.F)(),
          x = (0, o.Gc)(),
          f = n ? c.Z : "span",
          v =
            "string" == typeof a
              ? a
              : (null == g ? void 0 : g.includes("dark"))
              ? a.dark
              : a.light;
        return ((0, r.useEffect)(() => {
          m(!0);
        }, []),
        b)
          ? (0, s.jsxs)("figure", {
              className: (0, d.cn)(
                "next-image--dynamic-fill",
                p.containerClassName
              ),
              children: [
                (0, s.jsx)(f, {
                  ...(n ? { ZoomContent: u, zoomMargin: x ? 20 : 80 } : void 0),
                  children: (0, s.jsx)(
                    i(),
                    {
                      alt: t,
                      src: v,
                      sizes: n
                        ? "(max-width: 768px) 200vw, (max-width: 1200px) 120vw, 200vw"
                        : "(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 33vw",
                      className: p.className,
                      style: p.style,
                      ...p,
                    },
                    g
                  ),
                }),
                p.caption &&
                  (0, s.jsx)("figcaption", {
                    className: (0, d.cn)(h(p.captionAlign)),
                    children: p.caption,
                  }),
              ],
            })
          : null;
      };
    },
    93419: function (e, a, t) {
      "use strict";
      var s = t(52322),
        r = t(71519),
        n = t(2784),
        i = t(1903);
      let l = (e) => {
        var a, t, l;
        let {
            defaultActiveId: o,
            activeId: d,
            type: c = "pills",
            size: u = "tiny",
            block: h,
            onChange: p,
            onClick: b,
            scrollable: m,
            wrappable: g,
            addOnBefore: x,
            addOnAfter: f,
            listClassNames: v,
            baseClassNames: j,
            refs: w,
            children: y,
          } = e,
          N = n.Children.toArray(y),
          [_, k] = (0, n.useState)(
            null !== (l = null != d ? d : o) && void 0 !== l
              ? l
              : null == N
              ? void 0
              : null === (t = N[0]) || void 0 === t
              ? void 0
              : null === (a = t.props) || void 0 === a
              ? void 0
              : a.id
          );
        (0, n.useMemo)(() => {
          d && d !== _ && k(d);
        }, [d]);
        let S = (0, i.Z)("tabs");
        function E(e) {
          null == b || b(e), e !== _ && (null == p || p(e), k(e));
        }
        let C = [S[c].list];
        return (
          m && C.push(S.scrollable),
          g && C.push(S.wrappable),
          v && C.push(v),
          (0, s.jsxs)(r.fC, {
            value: _,
            className: [S.base, j].join(" "),
            ref: null == w ? void 0 : w.base,
            children: [
              (0, s.jsxs)(r.aV, {
                className: C.join(" "),
                ref: null == w ? void 0 : w.list,
                children: [
                  x,
                  N.map((e) => {
                    let a = _ === e.props.id,
                      t = [S[c].base, S.size[u]];
                    return (
                      a ? t.push(S[c].active) : t.push(S[c].inactive),
                      h && t.push(S.block),
                      (0, s.jsxs)(
                        r.xz,
                        {
                          onKeyDown: (a) => {
                            "Enter" === a.key &&
                              (a.preventDefault(), E(e.props.id));
                          },
                          onClick: () => E(e.props.id),
                          value: e.props.id,
                          className: t.join(" "),
                          children: [
                            e.props.icon,
                            (0, s.jsx)("span", { children: e.props.label }),
                            e.props.iconRight,
                          ],
                        },
                        "".concat(e.props.id, "-tab-button")
                      )
                    );
                  }),
                  f,
                ],
              }),
              N,
            ],
          })
        );
      };
      (l.Panel = (e) => {
        let { children: a, id: t, className: n } = e,
          l = (0, i.Z)("tabs");
        return (0, s.jsx)(r.VY, {
          value: t,
          className: [l.content, n].join(" "),
          children: a,
        });
      }),
        (a.Z = l);
    },
    31395: function () {},
  },
  function (e) {
    e.O(0, [2251, 977, 1401, 5669, 6999, 2888, 9774, 179], function () {
      return e((e.s = 2275));
    }),
      (_N_E = e.O());
  },
]);
