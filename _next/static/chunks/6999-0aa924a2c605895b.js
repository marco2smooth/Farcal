"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6999],
  {
    37637: function (e, n, r) {
      r.r(n);
      var t = r(52322),
        o = r(72779),
        a = r.n(o);
      let i = (0, r(2784).forwardRef)((e, n) => {
        let { children: r, className: o, id: i } = e;
        return (0, t.jsx)("div", {
          ref: n,
          id: i,
          className: a()(
            "sm:py-18 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20",
            o
          ),
          children: r,
        });
      });
      n.default = i;
    },
    89460: function (e, n, r) {
      var t = r(52322),
        o = r(29750),
        a = r(82577);
      let i = {
        [a.ZF.DATABASE]: {
          name: a.$7.DATABASE,
          icon: o.RB.database.icon[24],
          description: (0, t.jsxs)(t.Fragment, {
            children: [
              "Every project is ",
              (0, t.jsx)("strong", { children: "a full Postgres database" }),
              ", the world's most trusted relational database.",
            ],
          }),
          description_short: "Fully portable Postgres database",
          label: "",
          url: "/database",
        },
        [a.ZF.AUTHENTICATION]: {
          name: a.$7.AUTHENTICATION,
          icon: o.RB.authentication.icon[24],
          description: (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("strong", {
                children: "Add user sign ups and logins",
              }),
              ", securing your data with Row Level Security.",
            ],
          }),
          description_short: "User Management out of the box",
          label: "",
          url: "/auth",
        },
        [a.ZF.STORAGE]: {
          name: a.$7.STORAGE,
          icon: o.RB.storage.icon[24],
          description: (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("strong", { children: "Store, organize, and serve" }),
              " large files, from videos to images.",
            ],
          }),
          description_short: "Serverless storage for any media",
          label: "",
          url: "/storage",
        },
        [a.ZF.FUNCTIONS]: {
          name: a.$7.FUNCTIONS,
          icon: o.RB.functions.icon[24],
          description: (0, t.jsxs)(t.Fragment, {
            children: [
              "Easily write custom code ",
              (0, t.jsx)("strong", {
                children: "without deploying or scaling servers.",
              }),
            ],
          }),
          description_short: "Deploy code globally on the edge",
          label: "",
          url: "/edge-functions",
        },
        [a.ZF.REALTIME]: {
          name: a.$7.REALTIME,
          icon: o.RB.realtime.icon[24],
          description: (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("strong", {
                children: "Build multiplayer experiences",
              }),
              " with real-time data synchronization.",
            ],
          }),
          description_short: "Synchronize and broadcast events",
          label: "",
          url: "/realtime",
        },
        [a.ZF.VECTOR]: {
          name: a.$7.VECTOR,
          icon: o.RB.vector.icon[24],
          description: (0, t.jsxs)(t.Fragment, {
            children: [
              "Integrate your favorite ML-models to",
              " ",
              (0, t.jsx)("strong", {
                children: "store, index and search vector embeddings",
              }),
              ".",
            ],
          }),
          description_short: "AI toolkit to manage embeddings",
          label: "",
          url: "/vector",
        },
      };
      n.Z = i;
    },
    29750: function (e, n, r) {
      r.d(n, {
        RB: function () {
          return t.RB;
        },
        Xl: function () {
          return o;
        },
      }),
        r(70151),
        r(34528);
      var t = r(82577),
        o = [
          "How do I restart my database?",
          "How do I get started with Supabase?",
          "How do I run Supabase locally?",
          "How do I connect to my database?",
          "How do I run migrations? ",
          "How do I listen to changes in a table?",
          "How do I set up authentication?",
        ];
    },
    70151: function (e, n, r) {
      r.d(n, {
        g_: function () {
          return o;
        },
        nq: function () {
          return a;
        },
        z5: function () {
          return t;
        },
      });
      let t = [
        {
          id: "tier_free",
          name: "Free",
          nameBadge: "",
          costUnit: "/ month",
          href: "https://supabase.com/dashboard/new?plan=free",
          priceLabel: "",
          priceMonthly: 0,
          description: "Perfect for passion projects & simple websites.",
          preface: "Get started with:",
          features: [
            {
              partners: [],
              features: [
                "Unlimited API requests",
                "50,000 monthly active users",
                ["500 MB database space", "Shared CPU • 500 MB RAM"],
                "5 GB bandwidth",
                "1 GB file storage",
                "Community support",
              ],
            },
            {
              partners: ["fly"],
              features: [
                "Unlimited API requests",
                "50,000 monthly active users",
                ["500 MB database space", "Shared CPU • 500 MB RAM"],
                "5 GB bandwidth",
                "Community support",
              ],
            },
          ],
          footer: [
            {
              partners: [],
              footer:
                "Free projects are paused after 1 week of inactivity. Limit of 2 active projects.",
            },
            {
              partners: ["fly"],
              footer:
                "Free projects are paused after 1 week of inactivity. Limit of 1 active project.",
            },
          ],
          cta: "Start for Free",
        },
        {
          id: "tier_pro",
          name: "Pro",
          nameBadge: "Most Popular",
          costUnit: "/ month",
          href: "https://supabase.com/dashboard/new?plan=pro",
          priceLabel: "From",
          warning: "$10 in compute credits included",
          priceMonthly: 25,
          description: "For production applications with the power to scale.",
          features: [
            {
              partners: [],
              features: [
                ["100,000 monthly active users", "then $0.00325 per MAU"],
                ["8 GB disk size per project", "then $0.125 per GB"],
                ["250 GB bandwidth", "then $0.09 per GB"],
                ["100 GB file storage", "then $0.021 per GB"],
                "Email support",
                "Daily backups stored for 7 days",
                "7-day log retention",
              ],
            },
            {
              partners: ["fly"],
              features: [
                ["8 GB disk size per project", "then $0.125 per GB"],
                ["250 GB bandwidth", "then $0.09 per GB"],
                "Email support",
                "Daily backups stored for 7 days",
                "7-day log retention",
              ],
            },
          ],
          preface: "Everything in the Free Plan, plus:",
          cta: "Get Started",
        },
        {
          id: "tier_team",
          name: "Team",
          nameBadge: "",
          costUnit: "/ month",
          href: "https://supabase.com/dashboard/new?plan=team",
          priceLabel: "From",
          warning: "$10 in compute credits included",
          priceMonthly: 599,
          description:
            "Add features such as SSO, control over backups, and industry certifications.",
          features: [
            {
              partners: [],
              features: [
                "SOC2",
                "HIPAA available as paid add-on",
                "Read-only and Billing member roles",
                "SSO for Supabase Dashboard",
                "Priority email support & SLAs",
                "Daily backups stored for 14 days",
                "28-day log retention",
              ],
            },
          ],
          preface: "Everything in the Pro Plan, plus:",
          cta: "Get Started",
        },
        {
          id: "tier_enterprise",
          name: "Enterprise",
          href: "https://forms.supabase.com/enterprise",
          description:
            "For large-scale applications running Internet scale workloads.",
          features: [
            {
              partners: [],
              features: [
                "Designated Support manager",
                "Uptime SLAs",
                "On-premise support",
                "24\xd77\xd7365 premium enterprise support",
                "Private Slack channel",
                "Custom Security Questionnaires",
              ],
            },
          ],
          priceLabel: "",
          priceMonthly: "Custom",
          preface: "",
          cta: "Contact Us",
        },
      ];
      function o(e) {
        var n;
        let r =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return (
          (null === (n = e.features.find((e) => e.partners.includes(r))) ||
          void 0 === n
            ? void 0
            : n.features) ||
          e.features.find((e) => 0 === e.partners.length).features
        );
      }
      function a(e) {
        var n, r, t;
        let o =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return (
          (null === (r = e.footer) || void 0 === r
            ? void 0
            : null === (n = r.find((e) => e.partners.includes(o))) ||
              void 0 === n
            ? void 0
            : n.footer) ||
          (null === (t = e.footer) || void 0 === t
            ? void 0
            : t.find((e) => 0 === e.partners.length).footer)
        );
      }
    },
    34528: function (e, n, r) {
      r.d(n, {
        D: function () {
          return t;
        },
      });
      let t = {
        database: {
          title: "Database",
          icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
          features: [
            {
              title: "Dedicated Postgres Database",
              tooltips: {
                main: "A Postgres database with no restrictions? You get it. No pseudo limited users, you are the postgres root user.  No caveats.",
              },
              plans: { free: !0, pro: !0, team: !0, enterprise: !0 },
              usage_based: !1,
            },
            {
              title: "Unlimited API requests",
              plans: { free: !0, pro: !0, team: !0, enterprise: !0 },
              usage_based: !1,
            },
            {
              title: "Database size",
              tooltips: {
                main: "Billing is based on the provisioned disk size. Paid plan projects get provisioned with 8GB of disk by default and autoscale to 1.5x the size once you get close to the limit. The first 8GB of disk per project comes with no additional fees.\nFree plan customers are limited to 500MB database space usage per organization.",
              },
              plans: {
                free: "500 MB database space included",
                pro: [
                  "8 GB disk size per project included",
                  "then $0.125 per GB",
                ],
                team: [
                  "8 GB disk size per project included",
                  "then $0.125 per GB",
                ],
                enterprise: "Custom",
              },
              usage_based: !0,
            },
            {
              title: "Automatic backups",
              tooltips: {
                main: "Backups are entire copies of your database that can be restored in the future.",
                pro: "7 days of backup (if > 1 TB, contact for Enterprise pricing)",
                team: "14 days of backup (if > 1 TB, contact for Enterprise pricing)",
              },
              plans: {
                free: !1,
                pro: "7 days",
                team: "14 days",
                enterprise: "Custom",
              },
              usage_based: !1,
            },
            {
              title: "Point in time recovery",
              tooltips: {
                main: "PITR cannot be applied retroactively, projects can only be rolled back to the point from which PITR has been applied.",
              },
              plans: {
                free: !1,
                pro: "$100 per month per 7 days retention",
                team: "$100 per month per 7 days retention",
                enterprise:
                  "$100 per month per 7 days retention, >28 days retention available",
              },
              usage_based: !1,
            },
            {
              title: "Pausing",
              tooltips: {
                main: "Projects that have no activity or API requests will be paused. They can be reactivated via the dashboard.",
              },
              plans: {
                free: "After 1 week of inactivity",
                pro: "Never",
                team: "Never",
                enterprise: "Never",
              },
              usage_based: !1,
            },
            {
              title: "Branching",
              plans: {
                free: !1,
                pro: "$0.32 per branch, per day",
                team: "$0.32 per branch, per day",
                enterprise: "Custom",
              },
              usage_based: !0,
            },
            {
              title: "Bandwidth",
              tooltips: {
                main: "Billing is based on the total sum of all outgoing traffic (includes Database, Storage, Realtime, Auth, API, Edge Functions, Supavisor, Log Drains) in GB throughout your billing period.",
              },
              plans: {
                free: "5 GB included",
                pro: ["250 GB included", "then $0.09 per GB"],
                team: ["250 GB included", "then $0.09 per GB"],
                enterprise: "Custom",
              },
              usage_based: !0,
            },
          ],
        },
        auth: {
          title: "Auth",
          icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
          features: [
            {
              title: "Total Users",
              tooltips: {
                main: "The maximum number of users your project can have",
              },
              plans: {
                free: "Unlimited",
                pro: "Unlimited",
                team: "Unlimited",
                enterprise: "Unlimited",
              },
              usage_based: !1,
            },
            {
              title: "MAUs",
              tooltips: {
                main: "Users who log in or refresh their token count towards MAU.\nBilling is based on the sum of distinct users requesting your API throughout the billing period. Resets every billing cycle.",
              },
              plans: {
                free: "50,000 included",
                pro: ["100,000 included", "then $0.00325 per MAU"],
                team: ["100,000 included", "then $0.00325 per MAU"],
                enterprise: "Custom",
              },
              usage_based: !0,
            },
            {
              title: "User data ownership",
              tooltips: {
                main: "Full ownership and access to the underlying user data including encrypted passwords.",
              },
              plans: { free: !0, pro: !0, team: !0, enterprise: !0 },
              usage_based: !1,
            },
            {
              title: "Anonymous Sign-ins",
              tooltips: {
                main: "Anonymous user requests count towards MAU, just like a permanent user.",
              },
              plans: { free: !0, pro: !0, team: !0, enterprise: !0 },
              usage_based: !1,
            },
            {
              title: "Social OAuth providers",
              plans: { free: !0, pro: !0, team: !0, enterprise: !0 },
              usage_based: !1,
            },
            {
              title: "Custom SMTP server",
              plans: { free: !0, pro: !0, team: !0, enterprise: !0 },
              usage_based: !1,
            },
            {
              title: "Remove Supabase branding from emails",
              plans: { free: !1, pro: !0, team: !0, enterprise: !0 },
              usage_based: !1,
            },
            {
              title: "Audit trails",
              plans: {
                free: "1 hour",
                pro: "7 days",
                team: "28 days",
                enterprise: !0,
              },
              usage_based: !1,
            },
            {
              title: "Basic Multi-Factor Auth",
              plans: { free: !0, pro: !0, team: !0, enterprise: !0 },
              tooltips: {
                main: "Multi-factor authentication (MFA), sometimes called two-factor authentication (2FA), using Time-based One Time Passwords (TOTP) via an Authenticator App.",
              },
              usage_based: !1,
            },
            {
              title: "Advanced Multi-Factor Auth - Phone",
              plans: {
                free: !1,
                pro: [
                  "$75 per month for first project",
                  "then $10 per month per additional projects",
                ],
                team: [
                  "$75 per month for first project",
                  "then $10 per month per additional projects",
                ],
                enterprise: "Custom",
              },
              tooltips: {
                main: "Multi-factor authentication (MFA), sometimes called two-factor authentication (2FA), using SMS or WhatsApp messages.\nAdditional fees apply based on your provider.",
              },
              usage_based: !1,
            },
            {
              title: "Third-Party MAUs",
              plans: {
                free: "50 included",
                pro: ["50 included", "then $0.00325 per MAU"],
                team: ["50 included", "then $0.00325 per MAU"],
                enterprise: "Custom",
              },
              tooltips: {
                main: "Users who use the Supabase platform through a third-party authentication provider (Firebase Auth, Auth0 or Cognito).\nBilling is based on the sum of distinct third-party users requesting your API through the billing period. Resets every billing cycle.",
              },
              usage_based: !0,
            },
            {
              title: "Single Sign-On (SAML 2.0)",
              plans: {
                free: !1,
                pro: ["50 included", "then $0.015 per MAU"],
                team: ["50 included", "then $0.015 per MAU"],
                enterprise: "Contact Us",
              },
              usage_based: !1,
            },
            {
              title: "Leaked password protection",
              plans: { free: !1, pro: !0, team: !0, enterprise: !0 },
              usage_based: !1,
            },
            {
              title: "Single session per user",
              plans: { free: !1, pro: !0, team: !0, enterprise: !0 },
              usage_based: !1,
            },
            {
              title: "Session timeouts",
              plans: { free: !1, pro: !0, team: !0, enterprise: !0 },
              usage_based: !1,
            },
            {
              title: "Auth Hooks",
              plans: {
                free: "Custom Access Token (JWT), Send custom email/SMS",
                pro: "Custom Access Token (JWT), Send custom email/SMS",
                team: "All",
                enterprise: "All",
              },
              usage_based: !1,
            },
            {
              title: "Advanced security features",
              plans: { free: !1, pro: !1, team: !1, enterprise: "Contact Us" },
              usage_based: !1,
            },
          ],
        },
        storage: {
          title: "Storage",
          icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
          features: [
            {
              title: "Storage",
              tooltips: {
                main: "The sum of all objects' size in your storage buckets.\nBilling is prorated down to the hour and will be displayed as GB-Hrs on your invoice.",
              },
              plans: {
                free: "1 GB included",
                pro: ["100 GB included", "then $0.021 per GB"],
                team: ["100 GB included", "then $0.021 per GB"],
                enterprise: "Custom",
              },
              usage_based: !0,
            },
            {
              title: "Custom access controls",
              plans: { free: !0, pro: !0, team: !0, enterprise: !0 },
              usage_based: !1,
            },
            {
              title: "Max file upload size",
              tooltips: {
                main: "You can change the upload size in the dashboard",
              },
              plans: {
                free: "50 MB",
                pro: "50 GB",
                team: "50 GB",
                enterprise: "Custom",
              },
              usage_based: !1,
            },
            {
              title: "Content Delivery Network",
              tooltips: {
                main: "Assets in Storage are automatically cached on a CDN. With Smart CDN caching enabled, the CDN cache is automatically re-validated when the underlying asset changes. CDN caching is enabled across all plans and assets in the paid plans are cached via the Smart CDN.",
              },
              plans: {
                free: "Basic CDN",
                pro: "Smart CDN",
                team: "Smart CDN",
                enterprise: "Smart CDN",
              },
              usage_based: !1,
            },
            {
              title: "Image Transformations",
              tooltips: {
                main: "We count all images that were transformed in the billing period, ignoring any transformations.\nUsage example: You transform one image with four different size transformations and another image with just a single transformation. It counts as two, as only two images were transformed.\nBilling is based on the count of (origin) images that used transformations throughout the billing period. Resets every billing cycle.",
              },
              plans: {
                free: !1,
                pro: [
                  "100 origin images included",
                  "then $5 per 1000 origin images",
                ],
                team: [
                  "100 origin images included",
                  "then $5 per 1000 origin images",
                ],
                enterprise: "Custom",
              },
              usage_based: !0,
            },
            {
              title: "Bring your own storage provider",
              plans: { free: !1, pro: !1, team: !1, enterprise: !0 },
              usage_based: !1,
            },
          ],
        },
        edge_functions: {
          title: "Edge Functions",
          icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
          features: [
            {
              title: "Invocations",
              tooltips: {
                main: "Billing is based on the sum of all invocations, independent of response status, throughout your billing period.",
              },
              plans: {
                free: "500,000 included",
                pro: ["2 Million included", "then $2 per 1 Million"],
                team: ["2 Million included", "then $2 per 1 Million"],
                enterprise: "Custom",
              },
              usage_based: !0,
            },
            {
              title: "Script size",
              plans: {
                free: "10 MB",
                pro: "10 MB",
                team: "10 MB",
                enterprise: "Custom",
              },
              usage_based: !1,
            },
            {
              title: "Number of functions",
              plans: {
                free: "25 included",
                pro: "500 included",
                team: "1000 included",
                enterprise: "Unlimited",
              },
              usage_based: !1,
            },
          ],
        },
        realtime: {
          title: "Realtime",
          icon: "M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59",
          features: [
            {
              title: "Postgres Changes",
              plans: { free: !0, pro: !0, team: !0, enterprise: !0 },
              usage_based: !1,
            },
            {
              title: "Concurrent Peak Connections",
              tooltips: {
                main: "Total number of successful connections. Connections attempts are not counted towards usage.\nBilling is based on the maximum amount of concurrent peak connections throughout your billing period.",
              },
              plans: {
                free: "200 included",
                pro: ["500 included", "then $10 per 1000"],
                team: ["500 included", "then $10 per 1000"],
                enterprise: "Custom concurrent connections and volume discount",
              },
              usage_based: !0,
            },
            {
              title: "Messages Per Month",
              tooltips: {
                main: "Count of messages going through Realtime. Includes database changes, broadcast and presence. \nUsage example: If you do a database change and 5 clients listen to that change via Realtime, that's 5 messages. If you broadcast a message and 4 clients listen to that, that's 5 messages (1 message sent, 4 received).\nBilling is based on the total amount of messages throughout your billing period.",
              },
              plans: {
                free: "2 Million included",
                pro: ["5 Million included", "then $2.50 per Million"],
                team: ["5 Million included", "then $2.50 per Million"],
                enterprise: "Volume discounts on messages",
              },
              usage_based: !0,
            },
            {
              title: "Max Message Size",
              plans: {
                free: "250 KB",
                pro: "3 MB",
                team: "3 MB",
                enterprise: "Custom",
              },
              usage_based: !1,
            },
          ],
        },
        dashboard: {
          title: "Dashboard",
          icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
          features: [
            {
              title: "Team members",
              plans: {
                free: "Unlimited",
                pro: "Unlimited",
                team: "Unlimited",
                enterprise: "Unlimited",
              },
              usage_based: !1,
            },
            {
              title: "Access controls",
              plans: {
                free: "Coming soon",
                pro: "Coming soon",
                team: !0,
                enterprise: !0,
              },
              usage_based: !1,
            },
            {
              title: "Audit trails",
              plans: { free: !1, pro: !1, team: !0, enterprise: !0 },
              usage_based: !1,
            },
          ],
        },
        security: {
          title: "Platform Security and Compliance",
          icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
          features: [
            {
              title: "On Premises / BYO cloud",
              plans: { free: !1, pro: !1, team: !1, enterprise: !0 },
              usage_based: !1,
            },
            {
              title: "Log retention (API & Database)",
              plans: {
                free: "1 day",
                pro: "7 days",
                team: "28 days",
                enterprise: "90 days",
              },
              usage_based: !1,
            },
            {
              title: "Log Drain",
              tooltips: {
                main: "Only events processed and sent to destinations are counted. Bandwidth required to export logs count towards usage.\nEgress through Log Drains is rolled up into the unified egress and benefits from the unified egress quota.",
              },
              plans: {
                free: !1,
                pro: !1,
                team: [
                  "$60 per drain per month",
                  "and $0.20 per Million processed",
                  "and $0.09 per GB bandwidth",
                ],
                enterprise: "Custom",
              },
              usage_based: !0,
            },
            {
              title: "Metrics endpoint",
              plans: { free: !1, pro: !0, team: !0, enterprise: !0 },
              usage_based: !1,
            },
            {
              title: "SOC2",
              plans: { free: !1, pro: !1, team: !0, enterprise: !0 },
              usage_based: !1,
            },
            {
              title: "HIPAA",
              plans: {
                free: !1,
                pro: !1,
                team: "Available as paid add-on",
                enterprise: "Available as paid add-on",
              },
              tooltips: {
                main: "Available as a paid add-on on Team Plan and above.",
              },
              usage_based: !1,
            },
            {
              title: "SSO",
              plans: {
                free: !1,
                pro: !1,
                team: "Contact Us",
                enterprise: "Contact Us",
              },
              usage_based: !1,
            },
            {
              title: "Uptime SLAs",
              plans: { free: !1, pro: !1, team: !1, enterprise: !0 },
              usage_based: !1,
            },
            {
              title: "Access Roles",
              plans: {
                free: "Owner, Developer",
                pro: "Owner, Developer",
                team: "Additional owner(s), admin, read-only, billing admin, custom",
                enterprise:
                  "Additional owner(s), admin, read-only, billing admin, custom",
              },
              usage_based: !1,
            },
            {
              title: "Vanity URLs",
              plans: { free: !1, pro: !0, team: !0, enterprise: !0 },
              usage_based: !1,
            },
            {
              title: "Custom Domains",
              tooltips: { enterprise: "Volume discounts available." },
              plans: {
                free: !1,
                pro: "$10 per domain per month per project add on",
                team: "$10 per domain per month per project add on",
                enterprise: "1, additional $10/domain/month",
              },
              usage_based: !1,
            },
          ],
        },
        support: {
          title: "Support",
          icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
          features: [
            {
              title: "Community Support",
              plans: { free: !0, pro: !0, team: !0, enterprise: !0 },
              usage_based: !1,
            },
            {
              title: "Email Support",
              plans: { free: !1, pro: !0, team: !0, enterprise: !0 },
              usage_based: !1,
            },
            {
              title: "Email Support SLA",
              plans: { free: !1, pro: !1, team: !0, enterprise: !0 },
              usage_based: !1,
            },
            {
              title: "Designated support",
              plans: { free: !1, pro: !1, team: !1, enterprise: !0 },
              usage_based: !1,
            },
            {
              title: "On Boarding Support",
              plans: { free: !1, pro: !1, team: !1, enterprise: !0 },
              usage_based: !1,
            },
            {
              title: "Designated Customer Success Team",
              plans: { free: !1, pro: !1, team: !1, enterprise: !0 },
              usage_based: !1,
            },
            {
              title: "Security Questionnaire Help",
              plans: { free: !1, pro: !1, team: !0, enterprise: !0 },
              usage_based: !1,
            },
          ],
        },
      };
    },
    82577: function (e, n, r) {
      var t, o, a, i;
      r.d(n, {
        $7: function () {
          return t;
        },
        RB: function () {
          return s;
        },
        ZF: function () {
          return o;
        },
      }),
        ((a = t || (t = {})).DATABASE = "DatabaseW"),
        (a.AUTHENTICATION = "Authentication"),
        (a.STORAGE = "Storage"),
        (a.FUNCTIONS = "Edge Functions"),
        (a.REALTIME = "Realtime"),
        (a.VECTOR = "Vector"),
        ((i = o || (o = {})).DATABASE = "database"),
        (i.AUTHENTICATION = "authentication"),
        (i.STORAGE = "storage"),
        (i.FUNCTIONS = "functions"),
        (i.REALTIME = "realtime"),
        (i.VECTOR = "vector");
      let s = {
        database: {
          name: "Database",
          icon: {
            16: "M3.502 6h8.996v4H3.502V6ZM3 10.002h10v4H3v-4ZM3 2h10v4H3V2Z",
            18: "M3.00829 6.33225H15.1778V11.6648H3.00829V6.33225Z M2 13.0839C2 12.3016 2.63418 11.6674 3.41647 11.6674H14.7483C15.5306 11.6674 16.1648 12.3016 16.1648 13.0839V15.5835C16.1648 16.3658 15.5306 17 14.7483 17H3.41647C2.63418 17 2 16.3658 2 15.5835V13.0839Z M2 2.41647C2 1.63418 2.63418 1 3.41647 1H14.7483C15.5306 1 16.1648 1.63418 16.1648 2.41647V4.9161C16.1648 5.6984 15.5306 6.33257 14.7483 6.33257H3.41647C2.63418 6.33257 2 5.6984 2 4.9161V2.41647Z",
            24: "M5.18625 8.66531H19.5035V15.331H5.18625V8.66531Z M4 17.0007C4 16.0804 4.7461 15.3343 5.66645 15.3343H18.9984C19.9187 15.3343 20.6648 16.0804 20.6648 17.0007V20.3335C20.6648 21.2539 19.9187 22 18.9984 22H5.66646C4.7461 22 4 21.2539 4 20.3335V17.0007Z M4 3.66646C4 2.7461 4.7461 2 5.66645 2H18.9984C19.9187 2 20.6648 2.7461 20.6648 3.66645V6.99926C20.6648 7.91962 19.9187 8.66572 18.9984 8.66572H5.66646C4.7461 8.66572 4 7.91962 4 6.99926V3.66646Z",
          },
        },
        authentication: {
          name: "Authentication",
          icon: {
            16: "M3.49414 9.97461H8.49414M3.49414 9.97461V11.9746H8.49414V9.97461M3.49414 9.97461V7.97461H8.49414V9.97461M10 5V3C10 1.89543 9.10457 1 8 1C6.89543 1 6 1.89543 6 3V5M3.47266 7L3.47266 12C3.47266 13.1046 4.36809 14 5.47266 14H10.4727C11.5772 14 12.4727 13.1046 12.4727 12V7C12.4727 5.89543 11.5772 5 10.4727 5L5.47266 5C4.36809 5 3.47266 5.89543 3.47266 7Z",
            18: "M3.02644 12.0457H9.18048M3.02644 12.0457V14.5072H9.18048V12.0457M3.02644 12.0457V9.58414H9.18048V12.0457M11.0339 5.92308V3.46154C11.0339 2.10207 9.93179 1 8.57228 1C7.21277 1 6.11067 2.10207 6.11067 3.46154V5.92308M3 8.38465L3 14.5384C3 15.8979 4.10208 17 5.46157 17H11.6157C12.9752 17 14.0773 15.8979 14.0773 14.5384V8.38465C14.0773 7.02516 12.9752 5.92308 11.6157 5.92308L5.46158 5.92308C4.10209 5.92308 3 7.02516 3 8.38465Z",
            24: "M5.03305 15.8071H12.7252M5.03305 15.8071V18.884H12.7252V15.8071M5.03305 15.8071V12.7302H12.7252V15.8071M15.0419 8.15385V5.07692C15.0419 3.37759 13.6643 2 11.965 2C10.2657 2 8.88814 3.37759 8.88814 5.07692V8.15385M5 11.2307L5 18.9231C5 20.6224 6.37757 22 8.07689 22H15.769C17.4683 22 18.8459 20.6224 18.8459 18.9231V11.2307C18.8459 9.53142 17.4683 8.15385 15.769 8.15385L8.07689 8.15385C6.37757 8.15385 5 9.53142 5 11.2307Z",
          },
        },
        storage: {
          name: "Storage",
          icon: {
            16: "M12.9997 7.50869V5.60119L9.38151 2.00024H3.99967C3.44739 2.00024 2.99967 2.44796 2.99967 3.00024V5.99976M12.9645 5.58447L9.38004 2L9.38004 4.58447C9.38004 5.13676 9.82776 5.58447 10.38 5.58447L12.9645 5.58447ZM4.44135 5.99976H2.97363C2.42135 5.99976 1.97363 6.44747 1.97363 6.99976V11.9998C1.97363 13.1043 2.86906 13.9998 3.97363 13.9998H11.9736C13.0782 13.9998 13.9736 13.1043 13.9736 11.9998V8.50869C13.9736 7.95641 13.5259 7.50869 12.9736 7.50869H6.79396C6.53157 7.50869 6.27968 7.40556 6.09263 7.22153L5.14268 6.28692C4.95563 6.10289 4.70375 5.99976 4.44135 5.99976Z",
            18: "M15.7014 8.34507V5.80169L10.8772 1.00033H3.7014C2.96501 1.00033 2.36805 1.59728 2.36805 2.33367V6.33312M15.6545 5.77939L10.8752 1L10.8752 4.44605C10.8752 5.18243 11.4722 5.77939 12.2086 5.77939L15.6545 5.77939ZM4.29028 6.33312H2.33335C1.59696 6.33312 1 6.93008 1 7.66647V14.3333C1 15.8061 2.19392 17 3.66669 17H14.3333C15.8061 17 17 15.8061 17 14.3333V9.67842C17 8.94203 16.403 8.34507 15.6667 8.34507H7.42712C7.07725 8.34507 6.7414 8.20755 6.492 7.96218L5.2254 6.71601C4.976 6.47063 4.64015 6.33312 4.29028 6.33312Z",
            24: "M20.4997 12.1386V9.15811L14.8463 3.53163H6.43717C5.57423 3.53163 4.87467 4.23119 4.87467 5.09413V9.78087M20.4447 9.13199L14.844 3.53125L14.844 7.56949C14.844 8.43243 15.5436 9.13199 16.4065 9.13199L20.4447 9.13199ZM7.12729 9.78087H4.83398C3.97104 9.78087 3.27148 10.4804 3.27148 11.3434V19.1559C3.27148 20.8818 4.67059 22.2809 6.39648 22.2809H18.8965C20.6224 22.2809 22.0215 20.8818 22.0215 19.1559V13.7011C22.0215 12.8381 21.3219 12.1386 20.459 12.1386H10.8032C10.3933 12.1386 9.99969 11.9774 9.70743 11.6899L8.22312 10.2296C7.93086 9.94202 7.53729 9.78087 7.12729 9.78087Z",
          },
        },
        functions: {
          name: "Edge Functions",
          icon: {
            16: "M1.857 11.36a7 7 0 0 1 9.41-9.551M4.774 14.212a7 7 0 0 0 9.41-9.497m-8.812 7.845a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm9.296-9.13a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM12.5 8a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z",
            18: "M5.31216 16.101C6.41582 16.6754 7.67021 17 9.00043 17C13.419 17 17.0009 13.4183 17.0009 9C17.0009 7.66622 16.6744 6.40868 16.0971 5.30289M12.7352 1.92336C11.6203 1.33382 10.3494 1 9.00043 1C4.58192 1 1 4.58172 1 9C1 10.3615 1.34015 11.6436 1.94012 12.766M1.94012 12.766C1.61762 13.16 1.42413 13.6637 1.42413 14.2126C1.42413 15.475 2.44753 16.4983 3.70997 16.4983C4.9724 16.4983 5.99581 15.475 5.99581 14.2126C5.99581 12.9502 4.9724 11.9269 3.70997 11.9269C2.99646 11.9269 2.35931 12.2538 1.94012 12.766ZM16.6199 3.7793C16.6199 5.04166 15.5965 6.06501 14.3341 6.06501C13.0716 6.06501 12.0482 5.04166 12.0482 3.7793C12.0482 2.51693 13.0716 1.49358 14.3341 1.49358C15.5965 1.49358 16.6199 2.51693 16.6199 3.7793ZM14.1436 9C14.1436 11.8403 11.8409 14.1429 9.00043 14.1429C6.15996 14.1429 3.8573 11.8403 3.8573 9C3.8573 6.15968 6.15996 3.85714 9.00043 3.85714C11.8409 3.85714 14.1436 6.15968 14.1436 9Z",
            24: "M6.6594 21.8201C8.10788 22.5739 9.75418 23 11.5 23C17.299 23 22 18.299 22 12.5C22 10.7494 21.5716 9.09889 20.8139 7.64754M16.4016 3.21191C14.9384 2.43814 13.2704 2 11.5 2C5.70101 2 1 6.70101 1 12.5C1 14.287 1.44643 15.9698 2.23384 17.4428M2.23384 17.4428C1.81058 17.96 1.55664 18.6211 1.55664 19.3416C1.55664 20.9984 2.89979 22.3416 4.55664 22.3416C6.21349 22.3416 7.55664 20.9984 7.55664 19.3416C7.55664 17.6847 6.21349 16.3416 4.55664 16.3416C3.62021 16.3416 2.78399 16.7706 2.23384 17.4428ZM21.5 5.64783C21.5 7.30468 20.1569 8.64783 18.5 8.64783C16.8432 8.64783 15.5 7.30468 15.5 5.64783C15.5 3.99097 16.8432 2.64783 18.5 2.64783C20.1569 2.64783 21.5 3.99097 21.5 5.64783ZM18.25 12.5C18.25 16.2279 15.2279 19.25 11.5 19.25C7.77208 19.25 4.75 16.2279 4.75 12.5C4.75 8.77208 7.77208 5.75 11.5 5.75C15.2279 5.75 18.25 8.77208 18.25 12.5Z",
          },
        },
        realtime: {
          name: "Realtime",
          icon: {
            16: "M5.362.984v2.35m-1.866.144L1.365 1.282m2.052 3.92H1.052m8.023 9.653L4.557 4.523 15 9.115l-4.748 1.182-1.177 4.558Z",
            18: "M5.94415 1V3.85995M3.80348 3.85995L1.35903 1.34096M3.80348 5.83876H1M11.5534 11.6817L15.3703 10.7317C15.901 10.5996 15.9633 9.87023 15.4626 9.6501L6.36613 5.65053C5.8879 5.44026 5.40048 5.92671 5.60979 6.40536L9.53793 15.3879C9.75628 15.8872 10.4825 15.8291 10.6187 15.3015L11.5534 11.6817Z",
            24: "M9.15928 1.94531V5.84117M6.24345 5.84117L2.91385 2.40977M6.24345 8.53673H2.4248M16.7998 16.496L21.9988 15.2019C22.7217 15.022 22.8065 14.0285 22.1246 13.7286L9.73411 8.28034C9.08269 7.99391 8.41873 8.65652 8.70383 9.30851L14.0544 21.5445C14.3518 22.2247 15.341 22.1456 15.5266 21.4269L16.7998 16.496Z",
          },
        },
        vector: {
          name: "Vector",
          icon: {
            16: "M7.99886 7.63216V14.4892M7.99886 7.63216L14.0488 4.11804M7.99886 7.63216L1.94922 4.11819M1.94922 4.11819V8.32332M1.94922 4.11819V4.08217L5.57319 1.97717M14.049 8.36007V4.08217L10.4251 1.97717M11.8165 12.4072L7.99913 14.6245L4.18177 12.4072",
            18: "M8.61033 8.15404V16.8287M8.61033 8.15404L16.264 3.70838M8.61033 8.15404L0.957031 3.70858M0.957031 3.70858V9.02842M0.957031 3.70858V3.66301L5.54166 1M16.2643 9.07491V3.66301L11.6797 1M13.44 14.1949L8.61068 17L3.7814 14.1949",
            24: "M11.9983 11.4482V21.7337M11.9983 11.4482L21.0732 6.17699M11.9983 11.4482L2.92383 6.17723M2.92383 6.17723V12.4849M2.92383 6.17723V6.1232L8.35978 2.9657M21.0736 12.54V6.1232L15.6376 2.9657M17.7247 18.6107L11.9987 21.9367L6.27265 18.6107",
          },
        },
      };
    },
    83940: function (e, n, r) {
      r.d(n, {
        C: function () {
          return s;
        },
      });
      var t = r(52322),
        o = r(51795);
      r(2784);
      var a = r(44382);
      let i = (0, o.j)(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs bg-opacity-10",
        {
          variants: {
            variant: {
              default:
                "bg-surface-200 text-foreground-light border border-strong",
              warning: "bg-warning text-warning-600 border border-warning-500",
              success: "bg-brand text-brand-600 border border-brand-500",
              destructive:
                "bg-destructive text-destructive-600 border border-destructive-500",
              brand: "bg-brand text-brand-600 border border-brand-500",
              secondary:
                "bg-secondary hover:bg-secondary/80 border-transparent text-secondary-foreground",
              outline: "bg-transparent text border border-foreground-muted",
            },
            size: {
              small: "px-2.5 py-0.5 text-xs",
              large: "px-3 py-0.5 rounded-full text-sm",
            },
            dot: { true: "-ml-0.5 mr-1.5 h-2 w-2 rounded-full" },
          },
          defaultVariants: { variant: "default", size: "small" },
        }
      );
      function s(e) {
        let {
          className: n,
          variant: r = "default",
          size: o,
          dot: s = !1,
          children: l,
          ...d
        } = e;
        return (0, t.jsxs)("div", {
          className: (0, a.cn)(i({ variant: r, size: o }), n),
          ...d,
          children: [
            s &&
              (0, t.jsx)("svg", {
                className: i({ dot: s }),
                fill: "currentColor",
                viewBox: "0 0 8 8",
                children: (0, t.jsx)("circle", { cx: "4", cy: "4", r: "3" }),
              }),
            l,
          ],
        });
      }
    },
    94611: function (e, n) {
      let r = "border-default",
        t = "placeholder-foreground-muted",
        o = "\n    outline-none\n    focus:ring-current focus:ring-2\n  ",
        a = {
          tiny: "text-xs",
          small: "text-sm leading-4",
          medium: "text-sm",
          large: "text-base",
          xlarge: "text-base",
        },
        i = "px-2.5 py-1",
        s = "px-3 py-2",
        l = "px-4 py-2",
        d = "px-4 py-2",
        c = "px-6 py-3",
        u = {
          tiny: "".concat(a.tiny, " ").concat(i),
          small: "".concat(a.small, " ").concat(s),
          medium: "".concat(a.medium, " ").concat(l),
          large: "".concat(a.large, " ").concat(d),
          xlarge: "".concat(a.xlarge, " ").concat(c),
        };
      n.Z = {
        accordion: {
          variants: {
            default: {
              base: "\n          flex flex-col\n          space-y-3\n        ",
              container:
                "\n          group\n          first:rounded-tl-md first:rounded-tr-md\n          last:rounded-bl-md last:rounded-br-md\n          overflow-hidden\n          will-change-transform\n        ",
              trigger:
                "\n          flex flex-row\n          gap-3\n          items-center\n          w-full\n          text-left\n          cursor-pointer\n\n          outline-none\n          focus-visible:ring-1\n          focus-visible:z-10\n          ring-foreground-light\n        ",
              content:
                "\n          data-open:animate-slide-down\n          data-closed:animate-slide-up\n        ",
              panel: "\n          py-3\n        ",
            },
            bordered: {
              base: "\n          flex flex-col\n          -space-y-px\n        ",
              container:
                "\n          group\n          border\n          border-default\n\n          first:rounded-tl-md first:rounded-tr-md\n          last:rounded-bl-md last:rounded-br-md\n        ",
              trigger:
                "\n          flex flex-row\n          items-center\n          px-6 py-4\n          w-full\n          text-left\n          cursor-pointer\n\n          font-medium\n          text-base\n          bg-transparent\n\n          outline-none\n          focus-visible:ring-1\n          focus-visible:z-10\n          ring-foreground-light\n\n          transition-colors\n          hover:bg-background\n\n          overflow-hidden\n\n          group-first:rounded-tl-md group-first:rounded-tr-md\n          group-last:rounded-bl-md group-last:rounded-br-md\n        ",
              content:
                "\n          data-open:animate-slide-down\n          data-closed:animate-slide-up\n        ",
              panel:
                "\n          px-6 py-3\n          border-t border-strong\n          bg-background\n        ",
            },
          },
          justified: "justify-between",
          chevron: {
            base: "\n        text-foreground-lighter\n        rotate-0\n        group-state-open:rotate-180\n        group-data-[state=open]:rotate-180\n        ease-&lsqb;cubic-bezier(0.87,_0,_0.13,_1)&rsqb;\n        transition-transform duration-300\n        duration-200\n      ",
            align: { left: "order-first", right: "order-last" },
          },
          animate: {
            enter:
              "transition-max-height ease-in-out duration-700 overflow-hidden",
            enterFrom: "max-h-0",
            enterTo: "max-h-screen",
            leave:
              "transition-max-height ease-in-out duration-300 overflow-hidden",
            leaveFrom: "max-h-screen",
            leaveTo: "max-h-0",
          },
        },
        badge: {
          base: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-normal bg-opacity-10",
          size: { large: "px-3 py-0.5 rounded-full text-sm" },
          dot: "-ml-0.5 mr-1.5 h-2 w-2 rounded-full",
          color: {
            brand: "bg-brand-500 text-brand-600 border border-brand-500",
            brandAlt:
              "bg-brand bg-opacity-100 text-background border border-brand",
            scale: "bg-background text-foreground-light border border-strong",
            tomato: "bg-tomato-200 text-tomato-1100 border border-tomato-700",
            red: "bg-red-200 text-red-1100 border border-red-700",
            crimson:
              "bg-crimson-200 text-crimson-1100 border border-crimson-700",
            pink: "bg-pink-200 text-pink-1100 border border-pink-700",
            purple: "bg-purple-200 text-purple-1100 border border-purple-700",
            violet: "bg-violet-200 text-violet-1100 border border-violet-700",
            indigo: "bg-indigo-200 text-indigo-1100 border border-indigo-700",
            blue: "bg-blue-200 text-blue-1100 border border-blue-700",
            green:
              "bg-opacity-10 bg-brand-500 text-brand-600 border border-brand-500",
            grass: "bg-grass-200 text-grass-1100 border border-grass-700",
            orange: "bg-orange-200 text-orange-1100 border border-orange-700",
            yellow: "bg-yellow-200 text-yellow-1100 border border-yellow-700",
            amber: "bg-amber-200 text-amber-1100 border border-amber-700",
            gold: "bg-gold-200 text-gold-1100 border border-gold-700",
            gray: "bg-200 text-gray-1100 border border-gray-700",
            slate: "bg-slate-200 text-slate-1100 border border-slate-700",
          },
        },
        alert: {
          base: "\n      relative rounded-md border py-4 px-6\n      flex space-x-4 items-start\n    ",
          header: "block text-sm font-normal mb-1",
          description: "text-xs",
          variant: {
            danger: {
              base: "bg-red-200 text-red-1200 border-red-700",
              icon: "text-red-900",
              header: "text-red-1200",
              description: "text-red-1100",
            },
            warning: {
              base: "bg-amber-200 border-amber-700",
              icon: "text-amber-900",
              header: "text-amber-1200",
              description: "text-amber-1100",
            },
            info: {
              base: "bg-alternative border",
              icon: "text-foreground-lighter",
              header: "text-foreground",
              description: "text-foreground-light",
            },
            success: {
              base: "bg-brand-300 border-brand-400",
              icon: "text-brand",
              header: "text-brand-600",
              description: "text-brand-600",
            },
            neutral: {
              base: "bg-surface-100 border-default",
              icon: "text-foreground-muted",
              header: "text-foreground",
              description: "text-foreground-light",
            },
          },
          close:
            "\n      absolute\n      right-6 top-4\n      p-0 m-0\n      text-foreground-muted\n      cursor-pointer transition ease-in-out\n      bg-transparent border-transparent focus:outline-none\n      opacity-50 hover:opacity-100",
        },
        card: {
          base: "\n      bg-surface-100\n\n      border\n      ".concat(
            r,
            "\n\n      flex flex-col\n      rounded-md shadow-lg overflow-hidden relative\n    "
          ),
          hoverable: "transition hover:-translate-y-1 hover:shadow-2xl",
          head: "px-8 py-6 flex justify-between\n    border-b\n      ".concat(
            r,
            " "
          ),
          content: "p-8",
        },
        tabs: {
          base: "w-full justify-between space-y-4",
          underlined: {
            list: "\n        flex items-center border-b\n        ".concat(
              "border-secondary",
              "\n        "
            ),
            base: "\n        relative\n        cursor-pointer\n        text-foreground-lighter\n        flex\n        items-center\n        space-x-2\n        text-center\n        transition\n        focus:outline-none\n        focus-visible:ring\n        focus-visible:ring-foreground-muted\n        focus-visible:border-foreground-muted\n      ",
            inactive: "\n        hover:text-foreground\n      ",
            active:
              "\n        !text-foreground\n        border-b-2 border-foreground\n      ",
          },
          pills: {
            list: "flex space-x-1",
            base: "\n        relative\n        cursor-pointer\n        flex\n        items-center\n        space-x-2\n        text-center\n        transition\n        shadow-sm\n        rounded\n        border\n        focus:outline-none\n        focus-visible:ring\n        focus-visible:ring-foreground-muted\n        focus-visible:border-foreground-muted\n        ",
            inactive:
              "\n        bg-background\n        border-strong hover:border-foreground-muted\n        text-foreground-muted hover:text-foreground\n      ",
            active:
              "\n        bg-selection\n        text-foreground\n        border-stronger\n      ",
          },
          "rounded-pills": {
            list: "flex flex-wrap gap-2",
            base: "\n        relative\n        cursor-pointer\n        flex\n        items-center\n        space-x-2\n        text-center\n        transition\n        shadow-sm\n        rounded-full\n        focus:outline-none\n        focus-visible:ring\n        focus-visible:ring-foreground-muted\n        focus-visible:border-foreground-muted\n        ",
            inactive:
              "\n        bg-surface-200 hover:bg-surface-300\n        hover:border-foreground-lighter\n        text-foreground-lighter hover:text-foreground\n      ",
            active:
              "\n        bg-foreground\n        text-background\n        border-foreground\n      ",
          },
          block: "w-full flex items-center justify-center",
          size: { ...u },
          scrollable:
            "overflow-auto whitespace-nowrap no-scrollbar mask-fadeout-right",
          wrappable: "flex-wrap",
          content: "focus:outline-none transition-height",
        },
        input: {
          base: "\n      block\n      box-border\n      w-full\n      rounded-md\n      shadow-sm\n      transition-all\n      text-foreground\n      border\n      focus-visible:shadow-md\n      "
            .concat(
              o,
              "\n      focus-visible:border-foreground-muted\n      focus-visible:ring-background-control\n      "
            )
            .concat(t, "\n      group\n    "),
          variants: {
            standard:
              "\n        bg-foreground/[.026]\n        border border-control\n        ",
            error:
              "\n        bg-destructive-200\n        border border-destructive-500\n        focus:ring-destructive-400\n        placeholder:text-destructive-400\n       ",
          },
          container: "relative",
          with_icon: "pl-10",
          size: { ...u },
          disabled: "opacity-50",
          actions_container:
            "absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center",
          textarea_actions_container:
            "absolute inset-y-1.5 right-0 pl-3 pr-1 flex space-x-1 items-start",
          textarea_actions_container_items: "flex items-center",
        },
        select: {
          base: "\n      block\n      box-border\n      w-full\n      rounded-md\n      shadow-sm\n      transition-all\n      text-foreground\n      border\n      focus-visible:shadow-md\n      "
            .concat(
              o,
              "\n      focus-visible:border-foreground-muted\n      focus-visible:ring-background-control\n      "
            )
            .concat(t, "\n\n      appearance-none\n      bg-none\n    "),
          variants: {
            standard:
              "\n        bg-background\n        border border-strong\n        ",
            error:
              "\n        bg-destructive-200\n        border border-destructive-500\n        focus:ring-destructive-400\n        placeholder:text-destructive-400\n       ",
          },
          container: "relative",
          with_icon: "pl-10",
          size: { ...u },
          disabled: "opacity-50",
          actions_container:
            "absolute inset-y-0 right-0 pl-3 pr-1 mr-5 flex items-center",
          chevron_container:
            "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",
          chevron: "h-5 w-5 text-foreground-lighter",
        },
        inputNumber: {
          base: "\n      block\n      box-border\n      w-full\n      rounded-md\n      shadow-sm\n      transition-all\n      text-foreground\n      border\n      focus-visible:shadow-md\n      "
            .concat(
              o,
              "\n      focus-visible:border-foreground-muted\n      focus-visible:ring-background-control\n      "
            )
            .concat(t, "\n\n      appearance-none\n      bg-none\n    "),
          variants: {
            standard:
              "\n        bg-control\n        border border-strong\n      ",
            error:
              "\n        bg-destructive-200\n        border border-destructive-500\n        focus:ring-destructive-400\n        placeholder:text-destructive-400\n       ",
          },
          disabled: "opacity-50",
          container: "relative",
          with_icon: "pl-10",
          size: { ...u },
          actions_container:
            "absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center",
        },
        checkbox: {
          base: "\n      bg-transparent\n      ".concat(
            o,
            "\n      focus:ring-border-muted\n      text-brand\n      border-strong\n      shadow-sm\n      rounded\n      cursor-pointer\n    "
          ),
          container: "flex cursor-pointer leading-none",
          size: {
            tiny: "h-3 w-3 mt-1 mr-3",
            small: "h-3.5 w-3.5 mt-0.5 mr-3.5",
            medium: "h-4 w-4 mt-0.5 mr-3.5",
            large: "h-5 w-5 mt-0.5 mr-4",
            xlarge: "h-5 w-5 mt-0.5 mr-4",
          },
          disabled: "opacity-50",
          label: { base: "text-foreground-light cursor-pointer", ...a },
          label_before: { base: "text-border", ...a },
          label_after: { base: "text-border", ...a },
          description: { base: "text-foreground-lighter", ...a },
          group: "space-y-3",
        },
        radio: {
          base: "\n      absolute\n      ".concat(
            o,
            "\n      focus:ring-brand-400\n      border-strong\n\n      text-brand\n      shadow-sm\n      cursor-pointer\n      peer\n\n      bg-surface-100\n    "
          ),
          hidden: "absolute opacity-0",
          size: {
            tiny: "h-3 w-3",
            small: "h-3.5 w-3.5",
            medium: "h-4 w-4",
            large: "h-5 w-5",
            xlarge: "h-5 w-5",
          },
          variants: {
            cards: {
              container: {
                base: "relative cursor-pointer flex",
                align: {
                  vertical: "flex flex-col space-y-1",
                  horizontal: "flex flex-row space-x-2",
                },
              },
              group: "-space-y-px shadow-sm",
              base: "\n          transition\n          border\n          first:rounded-tl-md first:rounded-tr-md\n          last:rounded-bl-md last:rounded-br-md\n        ",
              size: {
                tiny: "px-5 py-3",
                small: "px-6 py-4",
                medium: "px-6 py-4",
                large: "px-8 p-4",
                xlarge: "px-8 p-4",
              },
              inactive:
                "\n          bg-surface-200\n          border-alternative\n          hover:border-strong\n          hover:bg-surface-300\n        ",
              active:
                "\n          bg-selection z-10\n          border-stronger\n          border-1\n        ",
              radio_offset: "left-4",
            },
            "stacked-cards": {
              container: {
                base: "relative cursor-pointer flex items-center justify-between",
                align: {
                  vertical: "flex flex-col space-y-1",
                  horizontal: "flex flex-row space-x-2",
                },
              },
              group: "space-y-3",
              base: "\n          transition\n          rounded-md\n          border\n          shadow-sm\n        ",
              size: {
                tiny: "px-5 py-3",
                small: "px-6 py-4",
                medium: "px-6 py-4",
                large: "px-8 p-4",
                xlarge: "px-8 p-4",
              },
              inactive:
                "\n          bg-surface-200\n          border-alternative\n          hover:border-strong\n          hover:bg-surface-300\n        ",
              active:
                "\n          bg-selection z-10\n          border-stronger\n          border-1\n        ",
              radio_offset: "left-4",
            },
            "small-cards": {
              container: {
                base: "relative cursor-pointer flex",
                align: {
                  vertical:
                    "flex flex-col space-y-1 items-center justify-center",
                  horizontal: "flex flex-row space-x-2",
                },
              },
              group: "flex flex-row gap-3",
              base: "\n          transition\n          border\n          rounded-lg\n          grow\n          items-center\n          flex-wrap\n          justify-center\n          shadow-sm\n        ",
              size: {
                tiny: "px-5 py-3",
                small: "px-6 py-4",
                medium: "px-6 py-4",
                large: "px-8 p-4",
                xlarge: "px-8 p-4",
              },
              inactive:
                "\n          bg-surface-200\n          border-alternative\n          hover:border-strong\n          hover:bg-surface-300\n        ",
              active:
                "\n          bg-selection z-10\n          border-stronger border-1\n        ",
              radio_offset: "left-4",
            },
            "large-cards": {
              container: {
                base: "relative cursor-pointer flex",
                align: {
                  vertical: "flex flex-col space-y-1",
                  horizontal: "flex flex-row space-x-2",
                },
              },
              group: "grid grid-cols-12 gap-3",
              base: "\n          transition\n          border border-stronger\n          shadow-sm\n          rounded-lg\n          grow\n        ",
              size: {
                tiny: "px-5 py-3",
                small: "px-6 py-4",
                medium: "px-6 py-4",
                large: "px-8 p-4",
                xlarge: "px-8 p-4",
              },
              inactive:
                "\n          bg-surface-200\n          border-alternative\n          hover:border-strong\n          hover:bg-surface-300\n        ",
              active:
                "\n          bg-selection z-10\n          border-strong\n          border-1\n        ",
              radio_offset: "left-4",
            },
            list: {
              container: {
                base: "relative cursor-pointer flex",
                size: {
                  tiny: "pl-6",
                  small: "pl-6",
                  medium: "pl-7",
                  large: "pl-10",
                  xlarge: "pl-10",
                },
                align: {
                  vertical: "flex flex-col space-y-1",
                  horizontal: "flex flex-row space-x-2",
                },
              },
              group: "space-y-4",
              base: "",
              size: {
                tiny: "0",
                small: "0",
                medium: "0",
                large: "0",
                xlarge: "0",
              },
              active: "",
              radio_offset: "left-0",
            },
          },
          label: { base: "text-foreground-light cursor-pointer", ...a },
          label_before: { base: "text-border", ...a },
          label_after: { base: "text-border", ...a },
          description: { base: "text-foreground-lighter", ...a },
          optionalLabel: { base: "text-foreground-lighter", ...a },
          disabled: "opacity-50 cursor-auto border-dashed",
        },
        sidepanel: {
          base: "\n      z-50\n      bg-dash-sidebar\n      flex flex-col\n      fixed\n      inset-y-0\n      h-full lg:h-screen\n      border-l\n      shadow-xl\n    ",
          header:
            "\n      space-y-1 py-4 px-4 bg-dash-sidebar sm:px-6\n      border-b\n    ",
          contents:
            "\n      relative\n      flex-1\n      overflow-y-auto\n    ",
          content: "\n      px-4 sm:px-6\n    ",
          footer:
            "\n      flex justify-end gap-2\n      p-4 bg-overlay\n      border-t\n    ",
          size: {
            medium: "w-screen max-w-md h-full",
            large: "w-screen max-w-2xl h-full",
            xlarge: "w-screen max-w-3xl h-full",
            xxlarge: "w-screen max-w-4xl h-full",
            xxxlarge: "w-screen max-w-5xl h-full",
            xxxxlarge: "w-screen max-w-6xl h-full",
          },
          align: {
            left: "\n        left-0\n        data-open:animate-panel-slide-left-out\n        data-closed:animate-panel-slide-left-in\n      ",
            right:
              "\n        right-0\n        data-open:animate-panel-slide-right-out\n        data-closed:animate-panel-slide-right-in\n      ",
          },
          separator:
            "\n      w-full\n      h-px\n      my-2\n      bg-border\n    ",
          overlay:
            "\n      z-50\n      fixed\n      bg-alternative\n      h-full w-full\n      left-0\n      top-0\n      opacity-75\n      data-closed:animate-fade-out-overlay-bg\n      data-open:animate-fade-in-overlay-bg\n    ",
          trigger: "\n      border-none bg-transparent p-0 focus:ring-0\n    ",
        },
        toggle: {
          base: "\n      p-0 relative\n      inline-flex flex-shrink-0\n      border-2 border-transparent\n      rounded-full\n      cursor-pointer\n      transition-colors ease-in-out duration-200\n      ".concat(
            o,
            "\n      focus:!ring-border\n      bg-foreground-muted/40\n\n      hover:bg-foreground-muted/60\n    "
          ),
          active: "\n      !bg-brand\n      !hover:bg-brand\n    ",
          handle_container: {
            tiny: "h-4 w-7",
            small: "h-6 w-11",
            medium: "h-6 w-11",
            large: "h-7 w-12",
            xlarge: "h-7 w-12",
          },
          handle: {
            base: "\n        inline-block h-5 w-5\n        rounded-full\n        bg-white\n        shadow ring-0\n        transition\n        ease-in-out duration-200\n      ",
            tiny: "!h-3 !w-3",
            small: "!h-5 !w-5",
            medium: "!h-5 !w-5",
            large: "!h-6 !w-6",
            xlarge: "!h-6 !w-6",
          },
          handle_active: {
            tiny: " translate-x-3 dark:bg-white",
            small: "translate-x-5 dark:bg-white",
            medium: "translate-x-5 dark:bg-white",
            large: "translate-x-5 dark:bg-white",
            xlarge: "translate-x-5 dark:bg-white",
          },
          disabled: "opacity-75 cursor-not-allowed",
        },
        form_layout: {
          container: "grid gap-2",
          flex: {
            left: {
              base: "flex flex-row gap-6",
              content: "",
              labels: "order-2",
              data_input: "order-1",
            },
            right: {
              base: "flex flex-row gap-6 justify-between",
              content: "order-last",
              labels: "",
              data_input: "text-right",
            },
          },
          responsive: "md:grid md:grid-cols-12",
          non_responsive: "grid grid-cols-12 gap-2",
          labels_horizontal_layout:
            "flex flex-row space-x-2 justify-between col-span-12",
          labels_vertical_layout: "flex flex-col space-y-2 col-span-4",
          data_input_horizontal_layout: "col-span-12",
          non_box_data_input_spacing_vertical: "my-3",
          non_box_data_input_spacing_horizontal: "my-3 md:mt-0 mb-3",
          data_input_vertical_layout: "col-span-8",
          data_input_vertical_layout__align_right: "text-right",
          label: { base: "block text-foreground-light", size: { ...a } },
          label_optional: { base: "text-foreground-lighter", size: { ...a } },
          description: {
            base: "mt-2 text-foreground-lighter leading-normal",
            size: { ...a },
          },
          label_before: { base: "text-foreground-lighter ", size: { ...a } },
          label_after: { base: "text-foreground-lighter", size: { ...a } },
          error: {
            base: "\n        text-red-900\n        transition-all\n        data-show:mt-2\n        data-show:animate-slide-down-normal\n        data-hide:animate-slide-up-normal\n      ",
            size: { ...a },
          },
          size: {
            tiny: "text-xs",
            small: "text-sm leading-4",
            medium: "text-sm",
            large: "text-base",
            xlarge: "text-base",
          },
        },
        popover: {
          trigger:
            "\n      flex\n      border-none\n      rounded\n      bg-transparent\n      p-0\n      outline-none\n      outline-offset-1\n      transition-all\n      focus:outline-4\n      focus:outline-border-control\n    ",
          content:
            "\n      z-40\n      bg-overlay\n      border border-overlay\n      rounded\n      shadow-lg\n      data-open:animate-dropdown-content-show\n      data-closed:animate-dropdown-content-hide\n      min-w-fit\n\n      origin-popover\n      data-open:animate-dropdown-content-show\n      data-closed:animate-dropdown-content-hide\n    ",
          size: {
            tiny: "w-40",
            small: "w-48",
            medium: "w-64",
            large: "w-80",
            xlarge: "w-96",
            content: "w-auto",
          },
          header:
            "\n      bg-surface-200\n      space-y-1 py-1.5 px-3\n      border-b border-overlay\n    ",
          footer:
            "\n      bg-surface-200\n      py-1.5 px-3\n      border-t border-overlay\n    ",
          close: "\n      transition\n      text-foreground-lighter\n    ",
          separator:
            "\n      w-full\n      h-px\n      my-2\n      bg-border-overlay\n    ",
        },
        menu: {
          item: {
            base: "\n        cursor-pointer\n        flex space-x-3 items-center\n        outline-none\n        focus-visible:ring-1 ring-foreground-muted focus-visible:z-10\n        group\n      ",
            content: {
              base: "transition truncate text-sm w-full",
              normal: "text-foreground-light group-hover:text-foreground",
              active: "text-foreground font-semibold",
            },
            icon: {
              base: "transition truncate text-sm",
              normal:
                "text-foreground-lighter group-hover:text-foreground-light",
              active: "text-foreground",
            },
            variants: {
              text: {
                base: "\n            py-1\n          ",
                normal:
                  "\n            font-normal\n            border-default\n            group-hover:border-foreground-muted",
                active:
                  "\n            font-semibold\n            text-foreground-muted\n            z-10\n          ",
              },
              border: {
                base: "\n            px-4 py-1\n          ",
                normal:
                  "\n            border-l\n            font-normal\n            border-default\n            group-hover:border-foreground-muted",
                active:
                  "\n            font-semibold\n\n            text-foreground-muted\n            z-10\n\n            border-l\n            border-brand\n            group-hover:border-brand\n          ",
                rounded: "rounded-md",
              },
              pills: {
                base: "\n            px-3 py-1\n          ",
                normal:
                  "\n            font-normal\n            border-default\n            group-hover:border-foreground-muted",
                active:
                  "\n            font-semibold\n            bg-surface-200\n            text-foreground-lighter\n            z-10\n\n            rounded-md\n          ",
              },
            },
          },
          group: {
            base: "\n        flex space-x-3\n        mb-2\n        font-normal\n      ",
            icon: "text-foreground-lighter",
            content: "text-sm text-foreground-lighter w-full",
            variants: { text: "", pills: "px-3", border: "" },
          },
        },
        modal: {
          base: "\n      relative\n      bg-dash-sidebar\n      my-4\n      border border-overlay\n      rounded-md\n      shadow-xl\n      data-open:animate-overlay-show\n      data-closed:animate-overlay-hide\n\n    ",
          header:
            "\n      bg-surface-200\n      space-y-1 py-3 px-4 sm:px-5\n      border-b border-overlay\n      flex items-center justify-between\n    ",
          footer:
            "\n      flex justify-end gap-2\n      py-3 px-5\n      border-t border-overlay\n    ",
          size: {
            tiny: "sm:align-middle sm:w-full sm:max-w-xs",
            small: "sm:align-middle sm:w-full sm:max-w-sm",
            medium: "sm:align-middle sm:w-full sm:max-w-lg",
            large: "sm:align-middle sm:w-full max-w-xl",
            xlarge: "sm:align-middle sm:w-full max-w-3xl",
            xxlarge: "sm:align-middle sm:w-full max-w-6xl",
            xxxlarge: "sm:align-middle sm:w-full max-w-7xl",
          },
          overlay:
            "\n      z-40\n      fixed\n      bg-alternative\n      h-full w-full\n      left-0\n      top-0\n      opacity-75\n      data-closed:animate-fade-out-overlay-bg\n      data-open:animate-fade-in-overlay-bg\n    ",
          scroll_overlay:
            "\n      z-40\n      fixed\n      inset-0\n      grid\n      place-items-center\n      overflow-y-auto\n      data-open:animate-overlay-show data-closed:animate-overlay-hide\n    ",
          separator:
            "\n      w-full\n      h-px\n      my-2\n      bg-border-overlay\n    ",
          content: "px-5",
        },
        listbox: {
          base: "\n      block\n      box-border\n      w-full\n      rounded-md\n      shadow-sm\n      text-foreground\n      border\n      focus-visible:shadow-md\n      "
            .concat(
              o,
              "\n      focus-visible:border-foreground-muted\n      focus-visible:ring-background-control\n      "
            )
            .concat(
              t,
              "\n      indent-px\n      transition-all\n      bg-none\n    "
            ),
          container: "relative",
          label: "truncate",
          variants: {
            standard:
              "\n        bg-control\n        border border-control\n\n        aria-expanded:border-foreground-muted\n        aria-expanded:ring-border-muted\n        aria-expanded:ring-2\n        ",
            error:
              "\n        bg-destructive-200\n        border border-destructive-500\n        focus:ring-destructive-400\n        placeholder:text-destructive-400\n       ",
          },
          options_container_animate:
            "\n      transition\n      data-open:animate-slide-down\n      data-open:opacity-1\n      data-closed:animate-slide-up\n      data-closed:opacity-0\n    ",
          options_container:
            "\n      bg-overlay\n      shadow-lg\n      border border-solid\n      border-overlay max-h-60\n      rounded-md py-1 text-base\n      sm:text-sm z-10 overflow-hidden overflow-y-scroll\n\n      origin-dropdown\n      data-open:animate-dropdown-content-show\n      data-closed:animate-dropdown-content-hide\n    ",
          with_icon: "pl-2",
          addOnBefore:
            "\n      w-full flex flex-row items-center space-x-3\n    ",
          size: { ...u },
          disabled: "opacity-50",
          actions_container:
            "absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center",
          chevron_container:
            "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",
          chevron: "h-5 w-5 text-foreground-muted",
          option:
            "\n      w-listbox\n      transition cursor-pointer select-none relative py-2 pl-3 pr-9\n      text-foreground-light\n      text-sm\n      hover:bg-border-overlay\n      focus:bg-border-overlay\n      focus:text-foreground\n      border-none\n      focus:outline-none\n    ",
          option_active: "text-foreground bg-selection",
          option_disabled: "cursor-not-allowed opacity-60",
          option_inner: "flex items-center space-x-3",
          option_check:
            "absolute inset-y-0 right-0 flex items-center pr-3 text-brand",
          option_check_active: "text-brand",
          option_check_icon: "h-5 w-5",
        },
        collapsible: {
          content:
            "\n      data-open:animate-slide-down-normal\n      data-closed:animate-slide-up-normal\n    ",
        },
        inputErrorIcon: {
          base: "\n      flex items-center\n      right-3 pr-2 pl-2\n      inset-y-0\n      pointer-events-none\n      text-red-900\n    ",
        },
        inputIconContainer: {
          base: "\n    absolute inset-y-0\n    left-0 pl-3 flex\n    items-center pointer-events-none\n    text-foreground-light\n    [&_svg]:stroke-[1.5]\n    ",
          size: {
            tiny: "[&_svg]:h-[14px] [&_svg]:w-[14px]",
            small: "[&_svg]:h-[18px] [&_svg]:w-[18px]",
            medium: "[&_svg]:h-[20px] [&_svg]:w-[20px]",
            large: "[&_svg]:h-[20px] [&_svg]:w-[20px]",
            xlarge: "[&_svg]:h-[24px] [&_svg]:w-[24px]",
            xxlarge: "[&_svg]:h-[30px] [&_svg]:w-[30px]",
            xxxlarge: "[&_svg]:h-[42px] [&_svg]:w-[42px]",
          },
        },
        icon: {
          container:
            "flex-shrink-0 flex items-center justify-center rounded-full p-3",
        },
        loading: {
          base: "relative",
          content: {
            base: "transition-opacity duration-300",
            active: "opacity-40",
          },
          spinner:
            "\n      absolute\n      text-brand animate-spin\n      inset-0\n      m-auto\n    ",
        },
      };
    },
    1903: function (e, n, r) {
      r.d(n, {
        Z: function () {
          return i;
        },
      });
      var t = r(2784),
        o = r(94611);
      let a = (0, t.createContext)({ theme: o.Z });
      function i(e) {
        let {
          theme: { [e]: n },
        } = (0, t.useContext)(a);
        return (
          n || (n = o.Z.accordion),
          (n = JSON.parse(
            (n = JSON.stringify(n).replace(/\\n/g, "").replace(/\s\s+/g, " "))
          ))
        );
      }
    },
  },
]);
