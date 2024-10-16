(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9365, 7042, 6006, 1070],
  {
    71519: function (e, t, s) {
      "use strict";
      s.d(t, {
        VY: function () {
          return L;
        },
        aV: function () {
          return C;
        },
        fC: function () {
          return _;
        },
        xz: function () {
          return z;
        },
      });
      var a = s(7560),
        n = s(2784),
        r = s(38930),
        i = s(72422),
        o = s(19106),
        l = s(80254),
        c = s(57915),
        d = s(97368),
        u = s(68622),
        h = s(62825);
      let m = "Tabs",
        [p, g] = (0, i.b)(m, [o.Pc]),
        x = (0, o.Pc)(),
        [f, b] = p(m),
        v = (0, n.forwardRef)((e, t) => {
          let {
              __scopeTabs: s,
              value: r,
              onValueChange: i,
              defaultValue: o,
              orientation: l = "horizontal",
              dir: m,
              activationMode: p = "automatic",
              ...g
            } = e,
            x = (0, d.gm)(m),
            [b, v] = (0, u.T)({ prop: r, onChange: i, defaultProp: o });
          return (0, n.createElement)(
            f,
            {
              scope: s,
              baseId: (0, h.M)(),
              value: b,
              onValueChange: v,
              orientation: l,
              dir: x,
              activationMode: p,
            },
            (0, n.createElement)(
              c.WV.div,
              (0, a.Z)({ dir: x, "data-orientation": l }, g, { ref: t })
            )
          );
        }),
        j = (0, n.forwardRef)((e, t) => {
          let { __scopeTabs: s, loop: r = !0, ...i } = e,
            l = b("TabsList", s),
            d = x(s);
          return (0, n.createElement)(
            o.fC,
            (0, a.Z)({ asChild: !0 }, d, {
              orientation: l.orientation,
              dir: l.dir,
              loop: r,
            }),
            (0, n.createElement)(
              c.WV.div,
              (0, a.Z)(
                { role: "tablist", "aria-orientation": l.orientation },
                i,
                { ref: t }
              )
            )
          );
        }),
        y = (0, n.forwardRef)((e, t) => {
          let { __scopeTabs: s, value: i, disabled: l = !1, ...d } = e,
            u = b("TabsTrigger", s),
            h = x(s),
            m = N(u.baseId, i),
            p = k(u.baseId, i),
            g = i === u.value;
          return (0, n.createElement)(
            o.ck,
            (0, a.Z)({ asChild: !0 }, h, { focusable: !l, active: g }),
            (0, n.createElement)(
              c.WV.button,
              (0, a.Z)(
                {
                  type: "button",
                  role: "tab",
                  "aria-selected": g,
                  "aria-controls": p,
                  "data-state": g ? "active" : "inactive",
                  "data-disabled": l ? "" : void 0,
                  disabled: l,
                  id: m,
                },
                d,
                {
                  ref: t,
                  onMouseDown: (0, r.M)(e.onMouseDown, (e) => {
                    l || 0 !== e.button || !1 !== e.ctrlKey
                      ? e.preventDefault()
                      : u.onValueChange(i);
                  }),
                  onKeyDown: (0, r.M)(e.onKeyDown, (e) => {
                    [" ", "Enter"].includes(e.key) && u.onValueChange(i);
                  }),
                  onFocus: (0, r.M)(e.onFocus, () => {
                    let e = "manual" !== u.activationMode;
                    g || l || !e || u.onValueChange(i);
                  }),
                }
              )
            )
          );
        }),
        w = (0, n.forwardRef)((e, t) => {
          let {
              __scopeTabs: s,
              value: r,
              forceMount: i,
              children: o,
              ...d
            } = e,
            u = b("TabsContent", s),
            h = N(u.baseId, r),
            m = k(u.baseId, r),
            p = r === u.value,
            g = (0, n.useRef)(p);
          return (
            (0, n.useEffect)(() => {
              let e = requestAnimationFrame(() => (g.current = !1));
              return () => cancelAnimationFrame(e);
            }, []),
            (0, n.createElement)(l.z, { present: i || p }, ({ present: s }) =>
              (0, n.createElement)(
                c.WV.div,
                (0, a.Z)(
                  {
                    "data-state": p ? "active" : "inactive",
                    "data-orientation": u.orientation,
                    role: "tabpanel",
                    "aria-labelledby": h,
                    hidden: !s,
                    id: m,
                    tabIndex: 0,
                  },
                  d,
                  {
                    ref: t,
                    style: {
                      ...e.style,
                      animationDuration: g.current ? "0s" : void 0,
                    },
                  }
                ),
                s && o
              )
            )
          );
        });
      function N(e, t) {
        return `${e}-trigger-${t}`;
      }
      function k(e, t) {
        return `${e}-content-${t}`;
      }
      let _ = v,
        C = j,
        z = y,
        L = w;
    },
    49701: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/realtime",
        function () {
          return s(15784);
        },
      ]);
    },
    57042: function (e, t, s) {
      "use strict";
      s.r(t);
      var a = s(52322),
        n = s(39097),
        r = s.n(n),
        i = s(44382),
        o = s(29982);
      t.default = (e) => {
        let { darkerBg: t, className: s } = e;
        return (0, a.jsxs)("div", {
          className: (0, i.cn)(
            "bg-background grid grid-cols-12 items-center gap-4 border-t py-32 text-center px-16",
            t && "bg-alternative",
            s
          ),
          children: [
            (0, a.jsx)("div", {
              className: "col-span-12",
              children: (0, a.jsxs)("h2", {
                className: "h2",
                children: [
                  (0, a.jsx)("span", {
                    className: "text-foreground-lighter",
                    children: "Build in a weekend,",
                  }),
                  (0, a.jsx)("span", {
                    className: "text-foreground block sm:inline",
                    children: " scale to millions",
                  }),
                ],
              }),
            }),
            (0, a.jsxs)("div", {
              className:
                "flex items-center justify-center gap-2 col-span-12 mt-4",
              children: [
                (0, a.jsx)(o.z, {
                  asChild: !0,
                  size: "medium",
                  children: (0, a.jsx)(r(), {
                    href: "https://supabase.com/dashboard",
                    children: "Start your projectsssss",
                  }),
                }),
                (0, a.jsx)(o.z, {
                  asChild: !0,
                  size: "medium",
                  type: "default",
                  children: (0, a.jsx)(r(), {
                    href: "/contact/sales",
                    children: "Request a demos",
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    21221: function (e, t, s) {
      "use strict";
      s.r(t);
      var a = s(52322);
      t.default = function (e) {
        let { icon: t, color: s } = e;
        return (0, a.jsx)("div", {
          className: [
            "inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md",
            s && "black" !== s
              ? ""
              : "bg-foreground text-background-alternative",
            s && "gray" === s ? "bg-border-strong text-foreground-light" : "",
            s && "green" === s ? "bg-brand text-brand-100" : "",
            s && "alt" === s ? "bg-alternative text-brand" : "",
          ].join(" "),
          children: (0, a.jsx)("svg", {
            className: [
              "h-5 w-5",
              s && "black" !== s ? "" : "stroke-background",
              s && "gray" === s ? "stroke-foreground-light" : "",
              s && "green" === s ? "stroke-brand-200" : "",
              s && "alt" === s ? "stroke-brand" : "",
            ].join(" "),
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            children: (0, a.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "1.5",
              d: t,
            }),
          }),
        });
      };
    },
    14528: function (e, t, s) {
      "use strict";
      var a = s(52322);
      s(2784);
      var n = s(44382),
        r = s(39097),
        i = s.n(r),
        o = s(82577),
        l = s(37637);
      t.Z = function (e) {
        let { activePage: t } = e;
        return (0, a.jsx)("nav", {
          className:
            "relative z-30 hidden md:flex items-center bg-background w-full border-b",
          children: (0, a.jsx)(l.default, {
            className: "!py-0 flex gap-3 items-center",
            children: Object.entries(o.RB).map((e) => {
              let s = e[1],
                r = s.name === o.$7.AUTHENTICATION;
              return (0, a.jsxs)(
                i(),
                {
                  className: (0, n.cn)(
                    "flex items-center gap-1.5 px-2 first:-ml-2 py-4 border-b border-transparent text-sm text-foreground-lighter hover:text-foreground",
                    "focus-visible:ring-2 focus-visible:ring-foreground-lighter focus-visible:text-foreground focus-visible:outline-brand-600",
                    s.name === t && "border-foreground-light text-foreground"
                  ),
                  href: "/".concat(
                    r ? "auth" : s.name.toLowerCase().replace(" ", "-")
                  ),
                  children: [
                    (0, a.jsx)("svg", {
                      className:
                        "h-4 w-4 group-hover/menu-item:text-foreground group-focus-visible/menu-item:text-foreground",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 18 18",
                      children: (0, a.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "1",
                        d: s.icon["18"],
                        stroke: "currentColor",
                      }),
                    }),
                    (0, a.jsx)("p", { children: r ? "Auth" : s.name }),
                  ],
                },
                s.name
              );
            }),
          }),
        });
      };
    },
    6322: function (e, t, s) {
      "use strict";
      var a = s(52322),
        n = s(39097),
        r = s.n(n),
        i = s(29982),
        o = s(21221),
        l = s(47048);
      t.Z = (e) =>
        (0, a.jsx)("div", {
          className:
            "container relative mx-auto px-6 pt-16 pb-0 sm:px-16 lg:pt-28 xl:px-20",
          children: (0, a.jsxs)("div", {
            className: "grid grid-cols-12",
            children: [
              (0, a.jsxs)("div", {
                className: "col-span-12 space-y-8 lg:col-span-5",
                children: [
                  e.callout && e.callout,
                  (0, a.jsxs)("div", {
                    children: [
                      e.icon || e.title
                        ? (0, a.jsxs)("div", {
                            className: "mb-4 flex items-center gap-3",
                            children: [
                              e.icon && (0, a.jsx)(o.default, { icon: e.icon }),
                              e.title &&
                                (0, a.jsx)(
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
                      (0, a.jsx)(
                        "h1",
                        { className: "h1", children: e.h1 },
                        "h1"
                      ),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    children:
                      e.subheader &&
                      e.subheader.map((e, t) =>
                        (0, a.jsx)(
                          "p",
                          { className: "p lg:text-lg", children: e },
                          t
                        )
                      ),
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex flex-row md:flex-row md:items-center",
                    children: [
                      (0, a.jsx)(i.z, {
                        asChild: !0,
                        size: "medium",
                        children: (0, a.jsx)(r(), {
                          href: "https://supabase.com/dashboard",
                          as: "https://supabase.com/dashboard",
                          children: "Start a project",
                        }),
                      }),
                      e.documentation_url &&
                        (0, a.jsx)(i.z, {
                          asChild: !0,
                          type: "default",
                          size: "medium",
                          icon: (0, a.jsx)(l.Z, {}),
                          children: (0, a.jsx)(r(), {
                            href: e.documentation_url,
                            as: e.documentation_url,
                            className: "ml-2",
                            children: "See documentation",
                          }),
                        }),
                    ],
                  }),
                  e.footer &&
                    (0, a.jsx)("div", {
                      className: "mb-4",
                      children: e.footer,
                    }),
                ],
              }),
              e.image &&
                (0, a.jsx)("div", {
                  className:
                    "col-span-12 mt-8 lg:col-span-7 lg:mt-0 xl:col-span-6 xl:col-start-7",
                  children: e.image,
                }),
            ],
          }),
        });
    },
    15784: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return z;
          },
        });
      var a = s(52322),
        n = [
          {
            lang: "js",
            title: "Database changes",
            description: "",
            code: "\n  import { createClient } from '@supabase/supabase-js'\n\n  const supabaseClient = createClient('URL', 'ANON')\n  const channel = supabaseClient\n    .channel('postgresChangesChannel')\n    .on('postgres_changes', {\n      event: 'INSERT',\n      schema: 'public',\n      table: 'messages'\n    }, payload => console.log(payload))\n    .subscribe()\n\n\n\n\n\n\n\n\n\n\n      ",
          },
          {
            lang: "js",
            title: "Presence",
            description: "",
            code: "\n  import { createClient } from '@supabase/supabase-js'\n\n  const supabaseClient = createClient('URL', 'ANON')\n  const channel = supabaseClient.channel('presenceChannel', { configs: { presence: 'id123' } })\n\n  channel\n    .on('presence', { event: 'sync' }, () => console.log(channel.presenceState()))\n    .on('presence', { event: 'join' }, ({ key, currentPresences, newPresences }) => console.log(key, currentPresences, newPresences))\n    .on('presence', { event: 'leave' }, ({ key, currentPresences, leftPresences }) => console.log(key, currentPresences, leftPresences))\n    .subscribe((status) => {\n      if (status === 'SUBSCRIBED') {\n        channel.track({ user_name: 'user123' })\n        channel.track({ user_name: 'user345' })\n      }\n    })\n\n\n\n\n\n      ",
          },
          {
            lang: "js",
            title: "Broadcast",
            description: "",
            code: "\n  import { createClient } from '@supabase/supabase-js'\n\n  const supabaseClient = createClient('URL', 'ANON')\n  const channel = supabaseClient.channel('broadcastChannel', { configs: { broadcast: { self: true, ack: true } } })\n\n  channel\n    .on('broadcast', { event: 'pos' }, payload => console.log(payload))\n    .subscribe((status) => {\n      if (status === 'SUBSCRIBED') {\n        channel\n        .send({ type: 'broadcast', event: 'pos', payload: { x: 0, y: 0 }})\n        .then(status => {\n          if (status === 'ok') console.log('ok')\n    \n          // if ack is false then channel.send will always return 'ok'\n          if (status === 'timed out') console.log('timed out')\n        })\n      }\n    })\n\n    \n\n\n      ",
          },
        ],
        r = [
          {
            img: "toast-messages.svg",
            title: "Toast messages",
            description:
              "Listen to changes in the database and show users a toast message.",
          },
          {
            img: "live-avatars.svg",
            title: "Live avatars",
            description: "Share the status of users across multiple clients.",
          },
          {
            img: "live-cursors.svg",
            title: "Live cursors",
            description:
              "Share the position and status of multiple cursors across multiple clients.",
          },
          {
            img: "leaderboard.svg",
            title: "Leaderboards",
            description:
              "Listen to changes in your database regarding the scores of your users and display them live.",
          },
          {
            img: "stock-market.svg",
            title: "Live charts",
            description:
              "Keep charts updated in Realtime by listening to changes in the database rather than polling at intervals.",
          },
          {
            img: "in-app-chat.svg",
            title: "In app chat",
            description:
              "Listen to changes in the database to display up-to-date text messages.",
          },
          {
            img: "code-editor.svg",
            title: "Shared text editor",
            description:
              "Users can collaborate with text documents or even code editors.",
          },
          {
            img: "whiteboard.svg",
            title: "Shared whiteboard",
            description:
              "Allow users to collaborate on a shared whiteboard, sharing positions and states of any kind of object in Realtime.",
          },
          {
            img: "location.svg",
            title: "Location",
            description:
              "Listen to changes in the database regarding the position of a moving coordinate.",
          },
          {
            img: "multiplayer-game.svg",
            title: "Multiplayer games",
            description:
              "Keep track of how long a player has been playing, who's turn it is and even share to other clients what the player is doing.",
          },
          {
            img: "form-presence.svg",
            title: "Form presence",
            description:
              "Display the active selection of different users throughout an interactive form.",
          },
        ],
        i = s(89460),
        o = s(55351),
        l = s(39097),
        c = s.n(l),
        d = s(5632),
        u = s(29982),
        h = s(20194),
        m = s(57042),
        p = s(27478),
        g = s(37637),
        x = s(14528),
        f = s(66176),
        b = s(6322),
        v = s(18519),
        j = s.n(v),
        y = s(55132);
      let w = (0, y.Z)("Menu", [
        ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
        ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
        ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
      ]);
      var N = s(13088);
      let k = (0, y.Z)("Layers", [
        [
          "path",
          {
            d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",
            key: "8b97xw",
          },
        ],
        [
          "path",
          { d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65", key: "dd6zsq" },
        ],
        [
          "path",
          { d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65", key: "ep9fru" },
        ],
      ]);
      var _ = s(82577);
      s(31395);
      let C = (e) => {
        let { className: t = "", color: s = "none" } = e;
        return (0, a.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: s,
          viewBox: "0 0 24 24",
          "aria-hidden": "true",
          className: "h-10 w-10 stroke-foreground ".concat(t),
          children: (0, a.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "1.5",
            d: "M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z",
          }),
        });
      };
      var z = function () {
        var e, t;
        let { basePath: s } = (0, d.useRouter)(),
          l = "Realtime | Sync your data in real time",
          v =
            "Listens to changes in a PostgreSQL Database and broadcasts them over WebSockets";
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(o.PB, {
              title: l,
              description: v,
              openGraph: {
                title: l,
                description: v,
                url: "https://supabase.com/realtime",
                images: [
                  {
                    url: "https://supabase.com".concat(
                      s,
                      "/images/realtime/og.jpg"
                    ),
                  },
                ],
              },
            }),
            (0, a.jsxs)(p.default, {
              children: [
                (0, a.jsx)(x.Z, { activePage: _.$7.REALTIME }),
                (0, a.jsx)(b.Z, {
                  icon:
                    null === (e = i.Z.realtime) || void 0 === e
                      ? void 0
                      : e.icon,
                  title:
                    null === (t = i.Z.realtime) || void 0 === t
                      ? void 0
                      : t.name,
                  h1: [
                    (0, a.jsx)(
                      "span",
                      { children: "Build modern web and mobile applications" },
                      "authentication-h1"
                    ),
                  ],
                  subheader: [
                    "Sync client state globally over WebSockets in Realtime",
                  ],
                  image: [
                    (0, a.jsxs)("div", {
                      className:
                        "bg-surface-100 border-default relative flex h-[372px] w-[560px] items-center justify-center overflow-hidden rounded border drop-shadow-md",
                      children: [
                        (0, a.jsx)("div", {
                          className: [
                            "border-brand-300 relative h-12 w-48 bg-brand",
                            "flex items-center justify-center ".concat(
                              j().shape
                            ),
                          ].join(" "),
                          children: (0, a.jsx)("p", {
                            className:
                              "text-foreground text-[18px] font-medium ".concat(
                                j()["button-text"]
                              ),
                            children: "Start a project",
                          }),
                        }),
                        (0, a.jsx)(C, {
                          color: "var(--colors-yellow9)",
                          className: "".concat(
                            j()["cursor-one"],
                            " absolute top-[220px] right-[130px]"
                          ),
                        }),
                        (0, a.jsx)(C, {
                          color: "var(--colors-indigo9)",
                          className: "".concat(
                            j()["cursor-two"],
                            " absolute top-[180px] right-[280px]"
                          ),
                        }),
                        (0, a.jsx)("div", {
                          className: [
                            "border-foreground absolute bottom-[40px] left-[175px] flex h-10 w-20",
                            "items-center justify-center space-x-2 rounded-full border-[3px] bg-indigo-900",
                            "".concat(j()["cursor-two-comment"]),
                          ].join(" "),
                          children: (0, a.jsx)("p", {
                            className: "text-lg",
                            children: "\uD83E\uDD14",
                          }),
                        }),
                        (0, a.jsx)(C, {
                          color: "var(--colors-tomato9)",
                          className: "".concat(
                            j()["cursor-three"],
                            " absolute top-[170px] right-[180px]"
                          ),
                        }),
                        (0, a.jsx)("div", {
                          className: [
                            "border-foreground absolute top-[72px] left-[320px] flex h-10 w-20",
                            "items-center justify-center space-x-2 rounded-full border-[3px] bg-tomato-900",
                            "".concat(j()["cursor-three-comment"]),
                          ].join(" "),
                          children: (0, a.jsx)("p", {
                            className: "text-lg",
                            children: "\uD83D\uDE04",
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "bg-background border-default absolute top-0 flex h-9 w-full items-center justify-between border-b",
                          children: [
                            (0, a.jsxs)("div", {
                              className: "flex items-center",
                              children: [
                                (0, a.jsx)(w, {
                                  className: "text-foreground mx-3",
                                  strokeWidth: 1,
                                  size: 16,
                                }),
                                (0, a.jsx)(N.Z, {
                                  className: "text-foreground mx-3",
                                  strokeWidth: 1,
                                  size: 15,
                                }),
                                (0, a.jsx)(k, {
                                  className: "text-foreground mx-3",
                                  strokeWidth: 1,
                                  size: 15,
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "mx-3 flex items-center",
                              children: [
                                (0, a.jsx)("div", {
                                  className:
                                    "border-foreground bg-tomato-900 relative -right-4 h-5 w-5 rounded-full border",
                                }),
                                (0, a.jsx)("div", {
                                  className:
                                    "border-foreground bg-yellow-900 relative -right-2 z-[2] h-5 w-5 rounded-full border",
                                }),
                                (0, a.jsx)("div", {
                                  className:
                                    "border-foreground bg-indigo-900 z-[3] h-5 w-5 rounded-full border",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                  documentation_url: "/docs/guides/realtime/broadcast",
                }),
                (0, a.jsx)(g.default, {
                  children: (0, a.jsxs)("div", {
                    className: "grid grid-cols-12",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "prose col-span-12 mb-10 lg:col-span-3 lg:mb-0",
                        children: [
                          (0, a.jsx)("div", {
                            className: "p mb-4",
                            children: (0, a.jsx)("img", {
                              src: "/images/realtime/icons/database-changes.svg",
                              alt: "realtime broadcast",
                              className: "-mb-4 w-9",
                            }),
                          }),
                          (0, a.jsx)("h3", { children: "Database changes" }),
                          (0, a.jsx)("p", {
                            children:
                              "Listen to changes in the Database inserts, updates, and deletes and other changes.",
                          }),
                          (0, a.jsx)("div", {
                            className: "not-prose mt-3",
                            children: (0, a.jsx)(u.z, {
                              asChild: !0,
                              type: "default",
                              children: (0, a.jsx)(c(), {
                                href: "/docs/guides/realtime/postgres-changes",
                                children: "View docs",
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "prose col-span-12 mb-10 lg:col-span-3 lg:col-start-5 lg:mb-0",
                        children: [
                          (0, a.jsx)("div", {
                            className: "p mb-4",
                            children: (0, a.jsx)("img", {
                              src: "/images/realtime/icons/presence.svg",
                              alt: "realtime broadcast",
                              className: "-mb-4 w-9",
                            }),
                          }),
                          (0, a.jsx)("h3", { children: "Presence" }),
                          (0, a.jsx)("p", {
                            children:
                              "Store and synchronize online user state consistently across clients.",
                          }),
                          (0, a.jsx)("div", {
                            className: "not-prose mt-3",
                            children: (0, a.jsx)(u.z, {
                              asChild: !0,
                              type: "default",
                              children: (0, a.jsx)(c(), {
                                href: "/docs/guides/realtime/presence",
                                children: "View docs",
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "prose col-span-12 lg:col-span-3 lg:col-start-9",
                        children: [
                          (0, a.jsx)("div", {
                            className: "p mb-4",
                            children: (0, a.jsx)("img", {
                              src: "/images/realtime/icons/broadcast.svg",
                              alt: "realtime broadcast",
                              className: "-mb-4 w-9",
                            }),
                          }),
                          (0, a.jsx)("h3", { children: "Broadcast" }),
                          (0, a.jsx)("p", {
                            children:
                              "Send any data to any client subscribed to the same Channel.",
                          }),
                          (0, a.jsx)("div", {
                            className: "not-prose mt-3",
                            children: (0, a.jsx)(u.z, {
                              asChild: !0,
                              type: "default",
                              children: (0, a.jsx)(c(), {
                                href: "/docs/guides/realtime/broadcast",
                                children: "View docs",
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, a.jsxs)(g.default, {
                  className: "flex flex-col gap-8",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex flex-col items-center justify-center",
                      children: [
                        (0, a.jsx)("h2", {
                          className: "h3",
                          children: "What you can build with Realtime",
                        }),
                        (0, a.jsx)("p", {
                          className: "p mx-auto text-center lg:w-1/2",
                          children:
                            "Build any kind of Realtime application with ease, including any of these scenarios.",
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "grid gap-10 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4",
                      children: r.map((e) =>
                        (0, a.jsx)(a.Fragment, {
                          children: (0, a.jsxs)("div", {
                            className: "flex flex-col gap-3",
                            children: [
                              (0, a.jsx)(h.Z, {
                                alt: e.title,
                                src: {
                                  light:
                                    "/images/realtime/example-apps/light/".concat(
                                      e.img,
                                      "?type=1"
                                    ),
                                  dark: "/images/realtime/example-apps/dark/".concat(
                                    e.img
                                  ),
                                },
                                className: "bg-surface-100 rounded-lg",
                                layout: "fill",
                                objectFit: "contain",
                              }),
                              (0, a.jsxs)("div", {
                                className: "prose",
                                children: [
                                  (0, a.jsx)("h4", { children: e.title }),
                                  (0, a.jsx)("p", {
                                    className: "text-sm",
                                    children: e.description,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        })
                      ),
                    }),
                  ],
                }),
                (0, a.jsx)(g.default, {
                  children: (0, a.jsx)(f.default, {
                    title: "Simple and convenient APIs",
                    content: n,
                    size: "large",
                    text: [
                      (0, a.jsx)(
                        "p",
                        {
                          children: (0, a.jsx)("p", {
                            className: "text-base lg:text-lg",
                            children:
                              "APIs that you can understand. With powerful libraries that work on client and server-side applications.",
                          }),
                        },
                        0
                      ),
                    ],
                    documentation_link: "/docs/guides/realtime/broadcast",
                  }),
                }),
                (0, a.jsx)(m.default, {}),
              ],
            }),
          ],
        });
      };
    },
    47048: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return a;
        },
      });
      let a = (0, s(55132).Z)("BookOpen", [
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
    13088: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return a;
        },
      });
      let a = (0, s(55132).Z)("Grid3x3", [
        [
          "rect",
          { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
        ],
        ["path", { d: "M3 9h18", key: "1pudct" }],
        ["path", { d: "M3 15h18", key: "5xshup" }],
        ["path", { d: "M9 3v18", key: "fh3hqa" }],
        ["path", { d: "M15 3v18", key: "14nvp0" }],
      ]);
    },
    20194: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return m;
        },
      });
      var a = s(52322);
      s(96813);
      var n = s(2784),
        r = s(96577),
        i = s.n(r),
        o = s(22965),
        l = s(30175),
        c = s(44382),
        d = s(72170),
        u = (e) => {
          let { img: t } = e;
          return (0, a.jsx)("figure", {
            className: " [&_img]:rounded-md [&_img]:border [&_img]:bg-default ",
            children: t,
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
        let { src: t, alt: s = "", zoomable: r, ...m } = e,
          [p, g] = (0, n.useState)(!1),
          { resolvedTheme: x } = (0, o.F)(),
          f = (0, l.Gc)(),
          b = r ? d.Z : "span",
          v =
            "string" == typeof t
              ? t
              : (null == x ? void 0 : x.includes("dark"))
              ? t.dark
              : t.light;
        return ((0, n.useEffect)(() => {
          g(!0);
        }, []),
        p)
          ? (0, a.jsxs)("figure", {
              className: (0, c.cn)(
                "next-image--dynamic-fill",
                m.containerClassName
              ),
              children: [
                (0, a.jsx)(b, {
                  ...(r ? { ZoomContent: u, zoomMargin: f ? 20 : 80 } : void 0),
                  children: (0, a.jsx)(
                    i(),
                    {
                      alt: s,
                      src: v,
                      sizes: r
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
                  (0, a.jsx)("figcaption", {
                    className: (0, c.cn)(h(m.captionAlign)),
                    children: m.caption,
                  }),
              ],
            })
          : null;
      };
    },
    93419: function (e, t, s) {
      "use strict";
      var a = s(52322),
        n = s(71519),
        r = s(2784),
        i = s(1903);
      let o = (e) => {
        var t, s, o;
        let {
            defaultActiveId: l,
            activeId: c,
            type: d = "pills",
            size: u = "tiny",
            block: h,
            onChange: m,
            onClick: p,
            scrollable: g,
            wrappable: x,
            addOnBefore: f,
            addOnAfter: b,
            listClassNames: v,
            baseClassNames: j,
            refs: y,
            children: w,
          } = e,
          N = r.Children.toArray(w),
          [k, _] = (0, r.useState)(
            null !== (o = null != c ? c : l) && void 0 !== o
              ? o
              : null == N
              ? void 0
              : null === (s = N[0]) || void 0 === s
              ? void 0
              : null === (t = s.props) || void 0 === t
              ? void 0
              : t.id
          );
        (0, r.useMemo)(() => {
          c && c !== k && _(c);
        }, [c]);
        let C = (0, i.Z)("tabs");
        function z(e) {
          null == p || p(e), e !== k && (null == m || m(e), _(e));
        }
        let L = [C[d].list];
        return (
          g && L.push(C.scrollable),
          x && L.push(C.wrappable),
          v && L.push(v),
          (0, a.jsxs)(n.fC, {
            value: k,
            className: [C.base, j].join(" "),
            ref: null == y ? void 0 : y.base,
            children: [
              (0, a.jsxs)(n.aV, {
                className: L.join(" "),
                ref: null == y ? void 0 : y.list,
                children: [
                  f,
                  N.map((e) => {
                    let t = k === e.props.id,
                      s = [C[d].base, C.size[u]];
                    return (
                      t ? s.push(C[d].active) : s.push(C[d].inactive),
                      h && s.push(C.block),
                      (0, a.jsxs)(
                        n.xz,
                        {
                          onKeyDown: (t) => {
                            "Enter" === t.key &&
                              (t.preventDefault(), z(e.props.id));
                          },
                          onClick: () => z(e.props.id),
                          value: e.props.id,
                          className: s.join(" "),
                          children: [
                            e.props.icon,
                            (0, a.jsx)("span", { children: e.props.label }),
                            e.props.iconRight,
                          ],
                        },
                        "".concat(e.props.id, "-tab-button")
                      )
                    );
                  }),
                  b,
                ],
              }),
              N,
            ],
          })
        );
      };
      (o.Panel = (e) => {
        let { children: t, id: s, className: r } = e,
          o = (0, i.Z)("tabs");
        return (0, a.jsx)(n.VY, {
          value: s,
          className: [o.content, r].join(" "),
          children: t,
        });
      }),
        (t.Z = o);
    },
    31395: function () {},
    18519: function (e) {
      e.exports = {
        shape: "realtime_shape__jNtbQ",
        "button-text": "realtime_button-text__T9tpg",
        "cursor-one": "realtime_cursor-one__bZat8",
        "cursor-two": "realtime_cursor-two__48lJ2",
        "cursor-two-comment": "realtime_cursor-two-comment__OnmOQ",
        "cursor-three": "realtime_cursor-three__aSGNg",
        "cursor-three-comment": "realtime_cursor-three-comment__R2f06",
      };
    },
  },
  function (e) {
    e.O(
      0,
      [
        5126, 2787, 2251, 4697, 977, 9573, 1401, 5669, 7478, 6999, 6176, 2888,
        9774, 179,
      ],
      function () {
        return e((e.s = 49701));
      }
    ),
      (_N_E = e.O());
  },
]);
