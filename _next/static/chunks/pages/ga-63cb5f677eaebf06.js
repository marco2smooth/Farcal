(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4676],
  {
    27071: function (e, t, a) {
      "use strict";
      var s = a(2784);
      let r = s.forwardRef(function (e, t) {
        return s.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          s.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z",
          })
        );
      });
      t.Z = r;
    },
    67830: function (e, t, a) {
      "use strict";
      var s = a(2784);
      let r = s.forwardRef(function (e, t) {
        return s.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          s.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z",
          })
        );
      });
      t.Z = r;
    },
    7538: function (e, t, a) {
      "use strict";
      var s = a(2784);
      let r = s.forwardRef(function (e, t) {
        return s.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          s.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
          })
        );
      });
      t.Z = r;
    },
    94977: function (e, t, a) {
      "use strict";
      var s = a(2784);
      let r = s.forwardRef(function (e, t) {
        return s.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          s.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
          })
        );
      });
      t.Z = r;
    },
    8246: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/ga",
        function () {
          return a(99440);
        },
      ]);
    },
    99678: function (e, t, a) {
      "use strict";
      var s = a(52322),
        r = a(96577),
        n = a.n(r),
        o = a(39097),
        i = a.n(o),
        l = a(5126),
        c = a(44382);
      t.Z = (e) => {
        let {
            images: t,
            smCols: a = 3,
            mdCols: r = 6,
            lgCols: o = 8,
            padding: d = 8,
            className: u,
            animated: p = !1,
            removeFilter: g = !1,
            bg: h = !0,
          } = e,
          m = { 6: "h-6 ", 8: "h-8 ", 12: "h-12 " };
        return (0, s.jsx)("div", {
          className:
            "grid \n      gap-0.5 rounded-lg overflow-hidden\n      items-center\n    	"
              .concat(
                {
                  2: "grid-cols-2",
                  3: "grid-cols-3",
                  4: "grid-cols-4",
                  5: "grid-cols-5",
                  6: "grid-cols-6",
                  8: "grid-cols-8",
                }[a],
                "\n      "
              )
              .concat(
                {
                  2: "md:grid-cols-2",
                  3: "md:grid-cols-3",
                  4: "md:grid-cols-4",
                  5: "md:grid-cols-5",
                  6: "md:grid-cols-6",
                  8: "md:grid-cols-8",
                }[r],
                "\n      "
              )
              .concat(
                {
                  2: "lg:grid-cols-2",
                  3: "lg:grid-cols-3",
                  4: "lg:grid-cols-4",
                  5: "lg:grid-cols-5",
                  6: "lg:grid-cols-6",
                  8: "lg:grid-cols-8",
                }[o],
                "\n    "
              ),
          children: t.map((e, t) =>
            (0, s.jsx)(
              (t) => {
                let { children: a, link: r } = t;
                return e.link
                  ? (0, s.jsx)(i(), {
                      href: r,
                      children: (0, s.jsx)("div", {
                        className:
                          "scale-100 transform cursor-pointer duration-100 ease-in-out hover:shadow-sm",
                        children: a,
                      }),
                    })
                  : a;
              },
              {
                link: e.link,
                children: (0, s.jsx)(
                  (e) => {
                    let { children: a, ...r } = e;
                    return p
                      ? (0, s.jsx)(l.E.div, {
                          initial: { opacity: 0, y: 20 },
                          animate: {
                            opacity: 1,
                            y: 0,
                            transition: { delay: t / 10 },
                          },
                          ...r,
                          children: a,
                        })
                      : (0, s.jsx)("div", { ...r, children: a });
                  },
                  {
                    className: (0, c.cn)(
                      h && "bg-surface-200",
                      "w-full",
                      "col-span-1 flex items-center justify-center \n                  "
                        .concat(
                          e.link && "hover:bg-overlay-hover",
                          "\n                  p-8 "
                        )
                        .concat(u)
                    ),
                    children: (0, s.jsx)("div", {
                      className: "relative h-8 w-full overflow-auto ".concat(
                        m[d]
                      ),
                      children: (0, s.jsx)(n(), {
                        src: e.image,
                        alt: "".concat(e.name, " logo"),
                        fill: !0,
                        sizes: "100%",
                        className: (0, c.cn)(
                          "object-scale-down object-center bg-no-repeat",
                          !g && "contrast-0 filter opacity-50"
                        ),
                      }),
                    }),
                  },
                  "".concat(e.name, "-").concat(t)
                ),
              },
              t
            )
          ),
        });
      };
    },
    99440: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return A;
          },
        });
      var s = a(52322),
        r = a(55351),
        n = a(22965),
        o = a(25237),
        i = a.n(o),
        l = a(96577),
        c = a.n(l),
        d = a(39097),
        u = a.n(d),
        p = a(5632);
      a(2784);
      var g = a(88147),
        h = a(21203),
        m = a(27478),
        b = a(99678),
        f = a(37637),
        w = a(7538),
        x = a(27071),
        v = a(94977),
        y = a(67830),
        k = a(30537),
        j = a(38880),
        S = a(51229),
        N = a(4988),
        T = a(86555);
      let W = (e) => ({
          hero: {
            title: (0, s.jsx)(s.Fragment, {
              children: "We are moving to General Availability",
            }),
            publishedAt: "15 April 2024",
            sections: [
              { title: "General Availability", link: "#ga" },
              { title: "Open Source & Community", link: "#open-source" },
              { title: "Scale to millions", link: "#scale" },
              { title: "Enterprise", link: "#enterprise" },
              { title: "Our partners", link: "#partners" },
              { title: "What's new", link: "#whats-new" },
              { title: "What's next", link: "#whats-next" },
            ],
          },
          highlightsSection: {
            highlights: [
              { number: "1,000,000+", text: "databases managed" },
              { number: "2,500+", text: "databases launched daily" },
              {
                number: "Top 125 GitHub Ranking",
                text: "GitHub repo star rating",
              },
            ],
          },
          companySection: {
            id: "ga",
            title: "General Availability",
            paragraph: "01",
            content:
              "\nDuring the first year of Supabase we set ourselves a goal: build a managed platform capable of securely running 1 million databases. Today we've proven that metric and we're announcing the General Availability of the platform that will serve the next 99 million.\n\n![top user growth over time by days after launch](/images/ga/database-growth--dark.svg?v=2)\n\nWe've been production-ready for years now. We kept the “beta” label because we wanted to make sure that our *organization* can support all types of customers, no matter their demands.\n\nToday we're confident in our ability to take any profile of customer and help them become successful. We have a crew of amazing Postgres engineers and support staff who work tirelessly to educate customers with Postgres technicalities, improving our product simultaneously.\n\nWhether you're an indie hacker or a Fortune 500, Supabase can scale comfortably for your production workload. Rocketships like [Udio](https://www.udio.com/), [Krea](https://www.krea.ai), [Humata](https://www.humata.ai/), and [Pika](https://pika.art) use Supabase to build fast and scale faster. Enterprise customers such as Mozilla, PwC, Johnson & Johnson, and 1Password use Supabase to manage their applications securely. 36% of the last Y Combinator batch used Supabase to launch their start up.\n\n> *Supabase has been great to develop applications. As a firm focused on security, we've been happy to work with Row Level Security Policies to secure database operations.*\n-  Matthieu, Tech Lead. PwC France\n\n",
          },
          openSourceSection: {
            id: "open-source",
            title: "Open Source & Community",
            paragraph: "02",
            content:
              "\nOur community is the driving force behind the development and adoption of Supabase.\n\n![top user growth over time by days after launch](/images/ga/github-start-growth--dark.svg?v=1)\n\nThe GitHub community is the foundation of our company: submitting feature requests, discovering bugs, creating PRs, and pushing our team to develop a useful product.\n\nWe're committed to our licenses - all of our public repos have OSI-compliant licenses. We have no plans to change this.\n\nSelf-hosting is easier than ever. You can get started in [less than 5 minutes](https://www.youtube.com/watch?v=FqiQKRKsfZE) on a hosted VPS.\n\nWe're committed to our Free Plan - we know the importance of this for testing hobby projects and prototyping. Almost all of the largest databases on Supabase today started on the Free Plan, a clear indication that our Free Plan is important for building an enduring platform.\n",
          },
          communityStats: {
            highlights: [
              {
                number: "65,000",
                text: "GitHub stars",
                url: "https://github.com/supabase",
                icon: (0, s.jsx)(j.Z, {}),
              },
              {
                number: "106,000",
                text: "Twitter followers",
                url: "https://twitter.com/supabase",
                icon: (0, s.jsx)(S.Z, {}),
              },
              {
                number: "25,000",
                text: "Discord members",
                url: "https://discord.com/invite/R7bSpeBSJE",
                icon: (0, s.jsx)(N.Z, {}),
              },
              {
                number: "23,000",
                text: "YouTube subscribers",
                url: "https://www.youtube.com/c/supabase",
                icon: (0, s.jsx)(T.Z, {}),
              },
              {
                number: "10,000",
                text: "Reddit subs",
                url: "https://www.reddit.com/r/Supabase/",
                icon: (0, s.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  xmlnsXlink: "http://www.w3.org/1999/xlink",
                  version: "1.1",
                  width: 18,
                  height: 18,
                  viewBox: "0 0 256 256",
                  xmlSpace: "preserve",
                  children: [
                    (0, s.jsx)("defs", {}),
                    (0, s.jsxs)("g", {
                      style: {
                        stroke: "none",
                        strokeWidth: 0,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "none",
                        fillRule: "nonzero",
                        opacity: 1,
                      },
                      transform:
                        "translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)",
                      children: [
                        (0, s.jsx)("circle", {
                          cx: 45,
                          cy: 45,
                          r: 45,
                          style: {
                            stroke: "none",
                            strokeWidth: 1,
                            strokeDasharray: "none",
                            strokeLinecap: "butt",
                            strokeLinejoin: "miter",
                            strokeMiterlimit: 10,
                            fill: "currentColor",
                            fillRule: "nonzero",
                            opacity: 1,
                          },
                          transform: "  matrix(1 0 0 1 0 0) ",
                        }),
                        (0, s.jsx)("path", {
                          d: "M 75.011 45 c -0.134 -3.624 -3.177 -6.454 -6.812 -6.331 c -1.611 0.056 -3.143 0.716 -4.306 1.823 c -5.123 -3.49 -11.141 -5.403 -17.327 -5.537 l 2.919 -14.038 l 9.631 2.025 c 0.268 2.472 2.483 4.262 4.955 3.993 c 2.472 -0.268 4.262 -2.483 3.993 -4.955 s -2.483 -4.262 -4.955 -3.993 c -1.421 0.145 -2.696 0.973 -3.4 2.204 L 48.68 17.987 c -0.749 -0.168 -1.499 0.302 -1.667 1.063 c 0 0.011 0 0.011 0 0.022 l -3.322 15.615 c -6.264 0.101 -12.36 2.025 -17.55 5.537 c -2.64 -2.483 -6.801 -2.36 -9.284 0.291 c -2.483 2.64 -2.36 6.801 0.291 9.284 c 0.515 0.481 1.107 0.895 1.767 1.186 c -0.045 0.66 -0.045 1.32 0 1.98 c 0 10.078 11.745 18.277 26.23 18.277 c 14.485 0 26.23 -8.188 26.23 -18.277 c 0.045 -0.66 0.045 -1.32 0 -1.98 C 73.635 49.855 75.056 47.528 75.011 45 z M 30.011 49.508 c 0 -2.483 2.025 -4.508 4.508 -4.508 c 2.483 0 4.508 2.025 4.508 4.508 s -2.025 4.508 -4.508 4.508 C 32.025 53.993 30.011 51.991 30.011 49.508 z M 56.152 62.058 v -0.179 c -3.199 2.405 -7.114 3.635 -11.119 3.468 c -4.005 0.168 -7.919 -1.063 -11.119 -3.468 c -0.425 -0.515 -0.347 -1.286 0.168 -1.711 c 0.447 -0.369 1.085 -0.369 1.544 0 c 2.707 1.98 6.007 2.987 9.362 2.83 c 3.356 0.179 6.667 -0.783 9.407 -2.74 c 0.492 -0.481 1.297 -0.47 1.779 0.022 C 56.655 60.772 56.644 61.577 56.152 62.058 z M 55.537 54.34 c -0.078 0 -0.145 0 -0.224 0 l 0.034 -0.168 c -2.483 0 -4.508 -2.025 -4.508 -4.508 s 2.025 -4.508 4.508 -4.508 s 4.508 2.025 4.508 4.508 C 59.955 52.148 58.02 54.239 55.537 54.34 z",
                          style: {
                            stroke: "none",
                            strokeWidth: 1,
                            strokeDasharray: "none",
                            strokeLinecap: "butt",
                            strokeLinejoin: "miter",
                            strokeMiterlimit: 10,
                            fill: "hsl(var(--background-default) / 1)",
                            fillRule: "nonzero",
                            opacity: 1,
                          },
                          transform: " matrix(1 0 0 1 0 0) ",
                          strokeLinecap: "round",
                        }),
                      ],
                    }),
                  ],
                }),
              },
            ],
          },
          scaleSection: {
            id: "scale",
            title: "Build in a weekend, scale to millions",
            paragraph: "03",
            content:
              "\nOur tagline is “Build in a weekend, scale to millions”. This isn't hyperbole. In the past, reaching 1 million users was an incredible challenge. It took Instagram 2.5 months, Facebook 10 months, and Twitter 24 months.\n\nIn the past year, we've had 12 companies start on Supabase and grow from zero to over 1 million users.\n\n![top user growth over time by days after launch](/images/ga/project-user-growth--dark.svg?v=3)\n\nMost of these were AI companies, like Udio, Krea, Humata, Chatbase, Pika, Quivr, Mendable, Markprompt and [MDN search](https://developer.mozilla.org/en-US/blog/introducing-ai-help/) by Mozilla.\n\nPostgres has been instrumental in our scalability and adoption. It's versatility is best demonstrated by pgvector: we were the first cloud provider to offer it, and today 15% of all new Supabase projects use pgvector for AI and ML workloads. Look out for a few related announcements this week.\n",
          },
          enterpriseSection: {
            id: "enterprise",
            title: "Enterprise",
            paragraph: "04",
            content:
              "\nSupabase can now scale comfortably to any workload. Companies such as 1Password, PwC, and Johnson & Johnson use Supabase to build Postgres-backed applications.\n\nWe've spent years working with larger organizations to meet their requirements for running Supabase in production. This includes enhanced security tooling, industry best-practices (SOC2 and HIPAA), round the clock support, and SLAs.\n\nThis week we've added support for Supabase in the AWS Marketplace. Enterprise customers can now purchase Supabase as part of their committed AWS spend.\n\nWe'll continue to expand the Supabase Enterprise offering to include more deployment options, including \"Bring your own cloud\". If you're interested in using Supabase in your organization, get in touch via the [Supabase for Enterprise form](https://forms.supabase.com/enterprise).\n",
            companies: [
              {
                name: "1Password",
                image: e
                  ? "/images/ga/enterprise/1-password--dark.svg"
                  : "/images/ga/enterprise/1-password--light.svg",
              },
              {
                name: "johnson-and-johnson",
                image: e
                  ? "/images/ga/enterprise/johnson-and-johnson--dark.svg"
                  : "/images/ga/enterprise/johnson-and-johnson--light.svg",
              },
              {
                name: "pwc",
                image: e
                  ? "/images/ga/enterprise/pwc--dark.svg"
                  : "/images/ga/enterprise/pwc--light.svg",
              },
              {
                name: "mozilla",
                image: e
                  ? "/images/ga/enterprise/mozilla--dark.png"
                  : "/images/ga/enterprise/mozilla--light.png",
              },
            ],
            highlights: [
              {
                text: "SOC 2",
                icon: (0, s.jsx)(w.Z, {
                  className: "text-foreground-lighter w-6",
                  strokeWidth: 1,
                }),
              },
              {
                text: "HIPAA",
                icon: (0, s.jsx)(k.Z, {
                  strokeWidth: 1,
                  className: "text-foreground-lighter w-6",
                }),
              },
              {
                text: "Data Encryption",
                icon: (0, s.jsx)(x.Z, {
                  strokeWidth: 1,
                  className: "text-foreground-lighter w-6",
                }),
              },
              {
                text: "Role-based access control",
                icon: (0, s.jsx)(v.Z, {
                  strokeWidth: 1,
                  className: "text-foreground-lighter w-6",
                }),
              },
              {
                text: "Backups",
                icon: (0, s.jsx)(y.Z, {
                  strokeWidth: 1,
                  className: "text-foreground-lighter w-6",
                }),
              },
              {
                text: "DDoS Protection",
                icon: (0, s.jsx)(w.Z, {
                  strokeWidth: 1,
                  className: "text-foreground-lighter w-6",
                }),
              },
            ],
          },
          integrationsSection: {
            id: "partners",
            title: "Our partners",
            paragraph: "05",
            content:
              "\nThe Supabase community doesn't exist in isolation. It's part of a group of developer focused companies and communities who are constantly pushing the boundaries of developer experience and developer productivity.\n\nWe've [teamed up with Fly](/blog/postgres-on-fly-by-supabase) to bring Postgres to developers across the world. (More on this later this week).\n\nVercel users can use the [Supabase integration](https://vercel.com/integrations/supabase) to connect Supabase to their Next.js projects, and we have deep integrations with [Flutterflow](https://docs.flutterflow.io/data-and-backend/supabase), [Resend](https://resend.com/blog/how-to-configure-supabase-to-send-emails-from-your-domain), and [Twilio](https://www.twilio.com/en-us/blog/send-sms-notifications-supabase-users-node-js-twilio-messaging).\n\nCloudflare recently announced the Supabase integration for [Workers](https://developers.cloudflare.com/workers/databases/native-integrations/supabase/) and [Hyperdrive](https://developers.cloudflare.com/hyperdrive/examples/supabase/).\n\nDevelopers have different preferences on how to connect to their database, and Supabase is [\"just Postgres\"](https://itsjustpostgres.com/) you can connect natively with [Prisma](https://www.prisma.io/docs/orm/overview/databases/supabase), [Drizzle](https://orm.drizzle.team/docs/get-started-postgresql#supabase), or [Kysely](https://github.com/kysely-org/kysely-supabase).\n\nYou can find the [full list of partners and integrations](https://supabase.com/partners/integrations) on our Partners page. If you're interested in partnering with Supabase head over to the [Partner Portal](https://supabase.com/partners).\n",
            partners: [
              {
                name: "fly",
                image: e
                  ? "/images/ga/partners/fly--dark.svg"
                  : "/images/ga/partners/fly--light.svg",
              },
              {
                name: "cloudflare",
                image: e
                  ? "/images/ga/partners/cloudflare--dark.svg"
                  : "/images/ga/partners/cloudflare--light.svg",
              },
              {
                name: "flutterflow",
                image: e
                  ? "/images/ga/partners/flutterflow--dark.svg"
                  : "/images/ga/partners/flutterflow--light.svg",
              },
              {
                name: "resend",
                image: e
                  ? "/images/ga/partners/resend--dark.svg"
                  : "/images/ga/partners/resend--light.svg",
              },
              {
                name: "twilio",
                image: e
                  ? "/images/ga/partners/twilio--dark.svg"
                  : "/images/ga/partners/twilio--light.svg",
              },
              {
                name: "vercel",
                image: e
                  ? "/images/ga/partners/vercel--dark.svg"
                  : "/images/ga/partners/vercel--light.svg",
              },
            ],
          },
          "whats-new": {
            id: "whats-new",
            title: "What's new?",
            paragraph: "06",
            content:
              "\nIn addition to General Availability, we also have several other major announcements to make today.\n\n- The Supabase [Index Advisor](https://github.com/supabase/index_advisor) is now available inside Supabase Studio. As its name suggests, this will analyze your database and make recommendations to add or remove table indexes. This is just the beginning of our plan to make automated data analysis tooling available to all developers.\n\n- [Supabase Branching](https://supabase.com/blog/branching-publicly-available) works like Git branches. You can create and test database changes or try out features in a separate, temporary instance without affecting your production setup. Today Branching enters public availability.\n\n- Supabase has [acquired Oriole](https://supabase.com/blog/supabase-acquires-oriole). Oriole is a company founded by Postgres Hacker Alexander Korotkov to solve the hairy problems of Postgres.\n\n- We're constantly on the lookout for ways to remove the friction in getting started with your new projects. [Supabase Bootstrap](https://supabase.com/blog/supabase-bootstrap) is now the easiest way to get started with Supabase and your favorite development framework.\n\n- Today Supabase Swift SDK will join supabase-js as an [officially supported client library](https://supabase.com/blog/supabase-swift), and supabase-swift maintainer Guilherme Souza will join the Supabase team full time. The goal of Supabase is to become the default backend for all kinds of developers.\n\n",
          },
          "whats-next": {
            id: "whats-next",
            title: "What's next?",
            paragraph: "07",
            content:
              "\nOne of our key metrics at Supabase is \"Time to Value\". How fast can a user go from idea to production? We'll never stop pushing on what's possible here.\n\nIt is only the first day of Supabase GA Week. Today's releases are just the start: we have 4 more days of exciting announcements to come. [Follow the new announcements here](https://supabase.com/ga-week).\n\nIf you want to try Supabase today, we just started an asynchronous hackathon. It's a great way to try out all the new features. Go here to [read the rules and start hacking](https://supabase.com/blog/supabase-oss-hackathon).\n\nTogether with the developer community we're looking forward to deploying our next 100 million databases.\n",
          },
        }),
        P = i()(() => a.e(3869).then(a.bind(a, 83869)), {
          loadableGenerated: { webpack: () => [83869] },
        }),
        z = i()(() => a.e(7042).then(a.bind(a, 57042)), {
          loadableGenerated: { webpack: () => [57042] },
        });
      function A() {
        var e;
        let t = (0, p.useRouter)(),
          { resolvedTheme: a } = (0, n.F)(),
          o = W(null == a ? void 0 : a.includes("dark")),
          i = "General Availability | Supabase",
          l = "Supabase is officially launching into General Availability.";
        return (0, s.jsxs)(m.default, {
          children: [
            (0, s.jsx)(r.PB, {
              title: i,
              description: l,
              openGraph: {
                title: i,
                description: l,
                url: "https://supabase.com/".concat(t.pathname),
                images: [{ url: "/images/ga/ga-og-alt.png" }],
              },
            }),
            (0, s.jsxs)("div", {
              className: "bg-alternative border-b border-muted",
              children: [
                (0, s.jsx)(f.default, {
                  className:
                    "flex flex-col gap-4 lg:gap-8 py-8 md:py-12 lg:py-16",
                  children: (0, s.jsxs)("div", {
                    className: "w-full grid grid-cols-1 gap-4 lg:grid-cols-3",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "flex flex-col gap-4 lg:col-span-2",
                        children: [
                          (0, s.jsx)(c(), {
                            src: "/images/launchweek/ga/ga-black.svg",
                            alt: "GA logo",
                            className:
                              "dark:hidden w-12 md:w-16 aspect-[104/57] h-auto",
                            priority: !0,
                            quality: 100,
                            width: 300,
                            height: 300,
                          }),
                          (0, s.jsx)(c(), {
                            src: "/images/launchweek/ga/ga-white.svg",
                            alt: "GA logo",
                            className:
                              "hidden dark:block w-12 md:w-16 aspect-[104/57] h-auto",
                            priority: !0,
                            quality: 100,
                            width: 300,
                            height: 300,
                          }),
                          (0, s.jsxs)("h1", {
                            className:
                              "lg:pt-4 text-3xl md:text-5xl xl:text-7xl lg:max-w-xl xl:max-w-7xl tracking-[-1.1px] text-foreground-light font-normal",
                            children: [
                              "We are moving to",
                              (0, s.jsx)("br", {}),
                              (0, s.jsx)("span", {
                                className: "text-foreground",
                                children: "General Availability",
                              }),
                            ],
                          }),
                          (null === (e = o.hero) || void 0 === e
                            ? void 0
                            : e.publishedAt) &&
                            (0, s.jsx)("span", {
                              className:
                                "text-sm text-foreground-lighter font-mono md:text-base",
                              children: o.hero.publishedAt,
                            }),
                        ],
                      }),
                      (0, s.jsx)("div", {
                        className: "",
                        children: (0, s.jsx)(h.R, {
                          videoId: "bRtdk8D4X8w",
                          imgUrl: "/images/launchweek/11/video-cover.jpg",
                          imgOverlayText: "Watch announcement",
                          priority: !0,
                        }),
                      }),
                    ],
                  }),
                }),
                (0, s.jsxs)(f.default, {
                  className: "!pt-2 lg:!pt-8",
                  children: [
                    o.highlightsSection.highlights &&
                      (0, s.jsx)("div", {
                        className:
                          "flex-wrap md:flex-nowrap w-fit md:w-full md:flex md:items-start grid lg:grid-cols-4 gap-4 md:gap-10 lg:gap-20 ",
                        children: o.highlightsSection.highlights.map((e, t) =>
                          (0, s.jsxs)(
                            "div",
                            {
                              className: "",
                              children: [
                                (0, s.jsx)("div", {
                                  className:
                                    "border-t-[1px] border-brand-500 w-[32px]",
                                }),
                                (0, s.jsx)("h2", {
                                  className:
                                    "text-xl md:text-2xl lg:text-4xl pt-1.5 lg:pt-3 tracking-[-1.5px] font-mono",
                                  children: e.number,
                                }),
                                (0, s.jsx)(g.D, {
                                  className:
                                    "text-foreground-light text-sm lg:text-base lg:mt-3",
                                  children: e.text,
                                }),
                              ],
                            },
                            t
                          )
                        ),
                      }),
                    (0, s.jsx)("div", {
                      className:
                        "w-full border-t mt-12 lg:mt-24 flex justify-start",
                      children: (0, s.jsx)("ol", {
                        className:
                          "w-full max-w-4xl pt-8 gap-4 columns-2 lg:columns-3 text-foreground-light",
                        children: o.hero.sections.map((e, t) =>
                          (0, s.jsx)(
                            "li",
                            {
                              children: (0, s.jsxs)(u(), {
                                href: e.link,
                                className:
                                  "p-1 inline-flex hover:text-foreground font-mono text-sm gap-4",
                                children: [
                                  (0, s.jsxs)("span", {
                                    className: "w-3 text-right",
                                    children: [t < 9 && "0", t + 1],
                                  }),
                                  (0, s.jsx)("span", { children: e.title }),
                                ],
                              }),
                            },
                            e.title
                          )
                        ),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsx)(P, { ...o.companySection, hasStickyTitle: !0 }),
            (0, s.jsx)(f.default, {
              className: "!py-0 border-b",
              children: null,
            }),
            (0, s.jsx)(P, { ...o.openSourceSection, hasStickyTitle: !0 }),
            (0, s.jsx)(f.default, {
              className: "!pt-0",
              children:
                o.communityStats.highlights &&
                (0, s.jsx)("div", {
                  className:
                    "grid grid-cols-2 md:grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-8 md:gap-10 lg:gap-20 ",
                  children: o.communityStats.highlights.map((e, t) =>
                    (0, s.jsxs)(
                      "div",
                      {
                        className: "",
                        children: [
                          (0, s.jsx)(u(), {
                            href: e.url,
                            target: "_blank",
                            className:
                              "text-foreground-muted hover:text-foreground transition-colors",
                            children: e.icon,
                          }),
                          (0, s.jsx)("div", {
                            className:
                              "border-t-[1px] border-brand-500 w-[32px] mb-1 mt-4",
                          }),
                          (0, s.jsx)("h2", {
                            className:
                              "text-xl md:text-2xl lg:text-4xl pt-1.5 lg:pt-3 tracking-[-1.5px] font-mono",
                            children: e.number,
                          }),
                          (0, s.jsx)(g.D, {
                            className:
                              "text-foreground-light text-sm lg:text-base lg:mt-3",
                            children: e.text,
                          }),
                        ],
                      },
                      t
                    )
                  ),
                }),
            }),
            (0, s.jsx)(f.default, {
              className: "!py-0 border-b",
              children: null,
            }),
            (0, s.jsx)(P, { ...o.scaleSection, hasStickyTitle: !0 }),
            (0, s.jsx)(f.default, {
              className: "!py-0 border-b",
              children: null,
            }),
            (0, s.jsx)(P, {
              ...o.enterpriseSection,
              hasStickyTitle: !0,
              className: "!pb-8 lg:!pb-16",
            }),
            (0, s.jsx)(f.default, {
              className:
                "!pt-0 !grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8 xl:gap-10",
              children: (0, s.jsx)("div", {
                className: "col-span-full lg:col-start-6 lg:col-span-7",
                children: (0, s.jsx)(b.Z, {
                  smCols: 2,
                  mdCols: 4,
                  lgCols: 2,
                  images: o.enterpriseSection.companies,
                  removeFilter: !0,
                  bg: !1,
                }),
              }),
            }),
            (0, s.jsx)(f.default, {
              className: "!pt-0",
              children:
                o.enterpriseSection.highlights &&
                (0, s.jsx)("div", {
                  className:
                    "grid grid-cols-2 md:grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-8 md:gap-10 lg:gap-20 ",
                  children: o.enterpriseSection.highlights.map((e, t) =>
                    (0, s.jsxs)(
                      "div",
                      {
                        className: "",
                        children: [
                          e.icon,
                          (0, s.jsx)("div", {
                            className:
                              "border-t-[1px] border-brand-500 w-[32px] mb-1 mt-4",
                          }),
                          e.number &&
                            (0, s.jsx)("h2", {
                              className:
                                "text-xl md:text-2xl lg:text-4xl pt-1.5 lg:pt-3 tracking-[-1.5px] font-mono",
                              children: e.number,
                            }),
                          (0, s.jsx)(g.D, {
                            className:
                              "text-foreground-light text-sm lg:text-base lg:mt-3",
                            children: e.text,
                          }),
                        ],
                      },
                      t
                    )
                  ),
                }),
            }),
            (0, s.jsx)(f.default, {
              className: "!py-0 border-b",
              children: null,
            }),
            (0, s.jsx)(P, {
              ...o.integrationsSection,
              hasStickyTitle: !0,
              className: "!pb-8 lg:!pb-16",
            }),
            (0, s.jsx)(f.default, {
              className:
                "!pt-0 !grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8 xl:gap-10",
              children: (0, s.jsx)("div", {
                className: "col-span-full lg:col-start-6 lg:col-span-7",
                children: (0, s.jsx)(b.Z, {
                  smCols: 3,
                  mdCols: 3,
                  lgCols: 3,
                  images: o.integrationsSection.partners,
                  removeFilter: !0,
                  bg: !1,
                }),
              }),
            }),
            (0, s.jsx)(f.default, {
              className: "!py-0 border-b",
              children: null,
            }),
            (0, s.jsx)(P, { ...o["whats-new"], hasStickyTitle: !0 }),
            (0, s.jsx)(f.default, {
              className: "!py-0 border-b",
              children: null,
            }),
            (0, s.jsx)(P, { ...o["whats-next"], hasStickyTitle: !0 }),
            (0, s.jsx)(z, {}),
          ],
        });
      }
    },
    30537: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return s;
        },
      });
      let s = (0, a(55132).Z)("Activity", [
        [
          "path",
          {
            d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
            key: "169zse",
          },
        ],
      ]);
    },
    84498: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return s;
        },
      });
      let s = (0, a(55132).Z)("Play", [
        ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }],
      ]);
    },
    21203: function (e, t, a) {
      "use strict";
      a.d(t, {
        R: function () {
          return u;
        },
      });
      var s = a(52322),
        r = a(30175),
        n = a(96577),
        o = a.n(n),
        i = a(2784),
        l = a(72334),
        c = a(44382),
        d = a(84498);
      function u(e) {
        let {
            imgUrl: t,
            videoId: a,
            imgOverlayText: n,
            triggerContainerClassName: u = "",
            imgAltText: p,
            trigger: g,
            onOpenCallback: h,
            priority: m = !1,
          } = e,
          [b, f] = i.useState(!1),
          w = (0, r.Gc)(768);
        return (
          i.useEffect(() => {
            function e(e) {
              if ("Escape" === e.key) return f(!1);
            }
            return (
              window.addEventListener("keydown", e),
              () => {
                window.removeEventListener("keydown", e);
              }
            );
          }, []),
          i.useEffect(() => {
            w && f(!1);
          }, [w]),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(l.Z, {
                visible: b,
                hideFooter: !0,
                className: (0, c.cn)(
                  "!bg-[#f8f9fa]/95 dark:!bg-[#1c1c1c]/80",
                  "!border-[#e6e8eb]/90 dark:!border-[#282828]/90",
                  "transition ease-out",
                  "mx-auto backdrop-blur-md w-[calc(100%-2rem)]"
                ),
                onInteractOutside: (e) => {
                  "dismissableLayer.pointerDownOutside" === e.type && f(!b);
                },
                size: "xxlarge",
                children: (0, s.jsx)("div", {
                  className: "!w-full flex items-center justify-center",
                  children: (0, s.jsxs)("div", {
                    className: "relative w-full",
                    children: [
                      (0, s.jsx)("button", {
                        onClick: () => f(!1),
                        className:
                          "text-foreground-light hover:text-foreground absolute -top-8 right-0",
                        children: (0, s.jsx)("p", {
                          className: "text-xs",
                          children: "Close",
                        }),
                      }),
                      (0, s.jsx)("div", {
                        className: "video-container !rounded overflow-hidden",
                        children: (0, s.jsx)("iframe", {
                          src: "https://www.youtube-nocookie.com/embed/".concat(
                            a
                          ),
                          allow:
                            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                          allowFullScreen: !0,
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              (0, s.jsx)("button", {
                onClick: () => {
                  h && h(), f(!0);
                },
                className: ["w-full", u].join(" ").trim(),
                children:
                  null != g
                    ? g
                    : (0, s.jsx)(
                        () =>
                          (0, s.jsxs)("div", {
                            className:
                              "video-container overflow-hidden rounded hover:cursor-pointer",
                            children: [
                              (0, s.jsxs)("div", {
                                className:
                                  " absolute inset-0 z-10 text-white flex flex-col gap-3 items-center justify-center before:content[''] before:absolute before:inset-0 before:bg-black before:opacity-30 before:-z-10 hover:before:opacity-50 before:transition-opacity ",
                                children: [
                                  (0, s.jsx)(d.Z, {
                                    strokeWidth: 2,
                                    className: "w-5 h-5",
                                  }),
                                  (0, s.jsx)("p", {
                                    className: "text-sm",
                                    children:
                                      null != n ? n : "Watch video guide",
                                  }),
                                ],
                              }),
                              (0, s.jsx)(o(), {
                                src: null != t ? t : "/images/blur.png",
                                alt: null != p ? p : "Video guide preview",
                                fill: !0,
                                sizes: "100%",
                                priority: m,
                                className:
                                  "absolute inset-0 object-cover blur-sm scale-105",
                              }),
                            ],
                          }),
                        {}
                      ),
              }),
            ],
          })
        );
      }
    },
    68262: function (e, t, a) {
      "use strict";
      var s = a(23586);
      function r() {}
      function n() {}
      (n.resetWarningCache = r),
        (e.exports = function () {
          function e(e, t, a, r, n, o) {
            if (o !== s) {
              var i = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((i.name = "Invariant Violation"), i);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var a = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: n,
            resetWarningCache: r,
          };
          return (a.PropTypes = a), a;
        });
    },
    13980: function (e, t, a) {
      e.exports = a(68262)();
    },
    23586: function (e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
  },
  function (e) {
    e.O(
      0,
      [5126, 2787, 2251, 4697, 977, 4525, 8147, 7478, 6999, 2888, 9774, 179],
      function () {
        return e((e.s = 8246));
      }
    ),
      (_N_E = e.O());
  },
]);
