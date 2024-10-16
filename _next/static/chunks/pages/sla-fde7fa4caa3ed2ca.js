(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2163],
  {
    49308: function (e, i, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/sla",
        function () {
          return s(23942);
        },
      ]);
    },
    30728: function (e, i, s) {
      "use strict";
      s.d(i, {
        Z: function () {
          return l;
        },
      });
      var t = s(52322),
        n = s(29154),
        r = s(55351),
        a = s(27478),
        o = s(33880);
      function l(e) {
        let { context: i, meta: s } = e;
        return (0, t.jsxs)(a.default, {
          children: [
            (0, t.jsx)(r.PB, { ...s }),
            (0, t.jsx)(n.Zo, {
              components: (0, o.Z)(),
              children: (0, t.jsx)("div", {
                className: "prose max-w-none",
                children: i.children,
              }),
            }),
          ],
        });
      }
    },
    23942: function (e, i, s) {
      "use strict";
      s.r(i),
        s.d(i, {
          meta: function () {
            return o;
          },
        });
      var t = s(52322),
        n = s(29154),
        r = s(30728),
        a = s(37637);
      let o = {
          title: "Service Level Agreement | Supabase",
          description: "Supabase Service Level Agreement",
        },
        l = (e) =>
          (0, t.jsx)(r.Z, { meta: o, children: e.children, context: e });
      function d(e) {
        let i = Object.assign(
          {
            h1: "h1",
            h2: "h2",
            p: "p",
            h3: "h3",
            strong: "strong",
            table: "table",
            thead: "thead",
            tr: "tr",
            th: "th",
            tbody: "tbody",
            td: "td",
            a: "a",
            h4: "h4",
            ul: "ul",
            li: "li",
            code: "code",
          },
          (0, n.ah)(),
          e.components
        );
        return (0, t.jsxs)(a.default, {
          children: [
            (0, t.jsx)(i.h1, {
              id: "service-level-agreements",
              children: "Service Level Agreements",
            }),
            (0, t.jsx)(i.h2, {
              id: "enterprise-platform-uptime-sla",
              children: "Enterprise Platform Uptime SLA",
            }),
            (0, t.jsx)(i.p, {
              children:
                'The following Service Level Agreement, which is incorporated into and forms part of the Subscription Agreement between Supabase, Inc. ("Supabase") and Customer (the "Agreement"), will apply to the Services for Enterprise Customers specified in an Order Form during the applicable Subscription Term:',
            }),
            (0, t.jsx)(i.h3, {
              id: "1-uptime-commitment",
              children: "1. Uptime Commitment",
            }),
            (0, t.jsxs)(i.p, {
              children: [
                "Supabase will provide Actual Availability for at least ninety-nine and nine tenths percent (99.9%) of the total time in each calendar month during the Subscription Term, as measured by Supabase (the ",
                (0, t.jsx)(i.strong, { children: '"Uptime Commitment"' }),
                ").",
              ],
            }),
            (0, t.jsx)(i.h3, {
              id: "2-service-credits",
              children: "2. Service Credits",
            }),
            (0, t.jsx)(i.p, {
              children:
                'If the Uptime Commitment is not met during any particular calendar month during the Subscription Term, then Customer will be eligible for a service credit ("Service Credit"), provided that Customer reports to Supabase such failure to meet the Uptime Commitment and requests such Service Credit in accordance with this Exhibit. The amount of any Service Credit due hereunder shall be calculated as follows:\nX * Y, where X = the total fees due from Customer to Supabase for the affected Services for the relevant calendar month (regardless of when billed or payable), and Y = the Credit Percentage corresponding with the Actual Availability provided (as a percentage of total time) for the relevant calendar month, as set forth in the table below.',
            }),
            (0, t.jsxs)(i.table, {
              children: [
                (0, t.jsx)(i.thead, {
                  children: (0, t.jsxs)(i.tr, {
                    children: [
                      (0, t.jsx)(i.th, { children: "Actual Availability" }),
                      (0, t.jsx)(i.th, { children: "Credit Percentage" }),
                    ],
                  }),
                }),
                (0, t.jsxs)(i.tbody, {
                  children: [
                    (0, t.jsxs)(i.tr, {
                      children: [
                        (0, t.jsx)(i.td, {
                          children:
                            "Less than 99.9% but greater than or equal to 99.0%",
                        }),
                        (0, t.jsx)(i.td, { children: "10%" }),
                      ],
                    }),
                    (0, t.jsxs)(i.tr, {
                      children: [
                        (0, t.jsx)(i.td, {
                          children:
                            "Less than 99.0% but greater than or equal to 98.0%",
                        }),
                        (0, t.jsx)(i.td, { children: "15%" }),
                      ],
                    }),
                    (0, t.jsxs)(i.tr, {
                      children: [
                        (0, t.jsx)(i.td, {
                          children:
                            "Less than 98.0% but greater than or equal to 96.0%",
                        }),
                        (0, t.jsx)(i.td, { children: "20%" }),
                      ],
                    }),
                    (0, t.jsxs)(i.tr, {
                      children: [
                        (0, t.jsx)(i.td, { children: "Less than 96.0%" }),
                        (0, t.jsx)(i.td, { children: "30%" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, t.jsx)(i.h3, {
              id: "3-credit-requests-and-payment",
              children: "3. Credit Requests and Payment",
            }),
            (0, t.jsxs)(i.p, {
              children: [
                "To request a Service Credit, Customer must send an email to Supabase at ",
                (0, t.jsx)(i.a, {
                  href: "mailto:support@supabase.io",
                  children: "support@supabase.io",
                }),
                " within thirty (30) days of the end of the month in which the Uptime Commitment was not met. Customer must include either its account ID or registered email address, and the previously reported dates and times that there was no Service Availability. If Supabase confirms that Customer is eligible for a Service Credit, Supabase will issue a credit to Customer's account within thirty (30) days. Service Credits are not refunds, cannot be exchanged into a cash amount, and may only be used against future billing charges. Except as set forth in Section 4 below, the Service Credits shall be Customer's sole and exclusive remedy, and Supabase's sole and exclusive liability, for any failure by Supabase to meet the Uptime Commitment.",
              ],
            }),
            (0, t.jsx)(i.h3, {
              id: "4-definitions",
              children: "4. Definitions",
            }),
            (0, t.jsx)(i.p, {
              children:
                "All capitalized words used but not defined in this Service Level Agreement have the meaning set forth in the Agreement.",
            }),
            (0, t.jsx)(i.h4, {
              id: "41-scheduled-availability",
              children: "4.1 Scheduled Availability",
            }),
            (0, t.jsx)(i.p, {
              children:
                '"Scheduled Availability" means the time, in minutes, that the applicable Services are generally accessible and available to Customer\'s Permitted Users.',
            }),
            (0, t.jsx)(i.h4, {
              id: "42-unscheduled-downtime",
              children: "4.2 Unscheduled Downtime",
            }),
            (0, t.jsx)(i.p, {
              children:
                "\"Unscheduled Downtime\" means the time, in minutes, that the applicable Services are not generally accessible and available to Customer's Permitted Users, excluding inaccessibility or unavailability due to Customer's or Permitted Users' acts or omissions, force majeure events, scheduled maintenance disclosed with at least 24 hours' notice by email, hacking or virus attacks, reasonable emergency maintenance or other product specific exclusions listed under SLA Exclusions.",
            }),
            (0, t.jsx)(i.h4, {
              id: "43-actual-availability",
              children: "4.3 Actual Availability",
            }),
            (0, t.jsx)(i.p, {
              children:
                '"Actual Availability" means Scheduled Availability less Unscheduled Downtime.',
            }),
            (0, t.jsx)(i.h4, {
              id: "44-production",
              children: "4.4 Production",
            }),
            (0, t.jsx)(i.p, {
              children:
                '"Production" is defined as a system serving live customer-facing or business systems with existing deployed and functional features.',
            }),
            (0, t.jsx)(i.p, {
              children:
                '"Development", "Staging", "uat", "pre-production" or new feature implementation even if in a production environment, are not considered Production.',
            }),
            (0, t.jsx)(i.h3, {
              id: "sla-exclusions",
              children: "SLA Exclusions",
            }),
            (0, t.jsx)(i.h4, {
              id: "general-service-exclusions",
              children: "General Service Exclusions",
            }),
            (0, t.jsxs)(i.ul, {
              children: [
                "\n",
                (0, t.jsx)(i.li, {
                  children:
                    "(i) Caused by factors outside of our reasonable control, including but not limited to any force majeure event or Internet access, ISP provider issues, and/or related problems beyond the demarcation point of Supabase. For the avoidance of doubt, this list is not exhaustive, and we will endeavor to inform you if the issue is beyond a factor that we can reasonably control.",
                }),
                "\n",
                (0, t.jsx)(i.li, {
                  children:
                    "(ii) That result from any voluntary actions or inactions from you.",
                }),
                "\n",
                (0, t.jsx)(i.li, {
                  children:
                    "(iii) That result from instance class CPU and memory resource limitations.",
                }),
                "\n",
                (0, t.jsxs)(i.li, {
                  children: [
                    "(iv) That result from you not following the basic operational guidelines described in our ",
                    (0, t.jsx)(i.a, {
                      href: "https://supabase.com/docs",
                      children: "Docs",
                    }),
                    " (e.g., overloading a database instance to the point it is inoperable, creating an excessively large number of tables that significantly increase the recovery time, etc.).",
                  ],
                }),
                "\n",
                (0, t.jsx)(i.li, {
                  children:
                    "(vi) That result in a long recovery time due to insufficient IO capacity for your database workload.",
                }),
                "\n",
                (0, t.jsx)(i.li, {
                  children:
                    "(vii) That result from your equipment, software, or other technology.",
                }),
                "\n",
                (0, t.jsx)(i.li, {
                  children:
                    "(viii) Arising from our suspension and termination of your right to use Supabase in accordance with our Terms.",
                }),
                "\n",
              ],
            }),
            (0, t.jsx)(i.h4, {
              id: "database-sla-exclusions",
              children: "Database SLA Exclusions",
            }),
            (0, t.jsxs)(i.ul, {
              children: [
                "\n",
                (0, t.jsx)(i.li, {
                  children:
                    "(i) Unofficially supported Postgres extensions are excluded from our SLA.",
                }),
                "\n",
                (0, t.jsx)(i.li, {
                  children:
                    "(ii) Our SLA only applies to the 2 most recent major releases of Postgres that Supabase has officially supported. Older versions are excluded.",
                }),
                "\n",
              ],
            }),
            (0, t.jsx)(i.h4, {
              id: "auth-sla-exclusions",
              children: "Auth SLA Exclusions",
            }),
            (0, t.jsxs)(i.ul, {
              children: [
                "\n",
                (0, t.jsx)(i.li, {
                  children:
                    "(i) Inappropriately provisioned compute resources related to your project for the expected load on your database and Auth servers, especially in the case of verifying or storing password-based credentials in the sign-in, sign-up, password change, password reset, and other such flows and APIs.",
                }),
                "\n",
                (0, t.jsxs)(i.li, {
                  children: [
                    "(ii) Any accidental or intentional modifications, additions, or deletions of database objects (tables, views, triggers, roles, functions, indexes, constraints, permissions, grants, and similar) in the ",
                    (0, t.jsx)(i.code, { children: "auth" }),
                    " schema or foreign key relationships in any schema to non-primary key columns within the ",
                    (0, t.jsx)(i.code, { children: "auth" }),
                    " schema that may cause total or partial outage, including outages caused in the future but related to such modifications, additions, or deletions in the past when arising from schema migrations initiated by Supabase.",
                  ],
                }),
                "\n",
                (0, t.jsx)(i.li, {
                  children:
                    "(iii) Total or partial outages caused by third-party services as configured by default or by choice, including and not limited to: OAuth, OpenID Connect, Security Assertion Markup Language servers and related APIs and protocols; Email (via SMTP or otherwise) and SMS sending servers and related APIs; CAPTCHA services and APIs; Password Strength Checking services such as HaveIBeenPwned.org; IP geo-location; and other such services.",
                }),
                "\n",
                (0, t.jsx)(i.li, {
                  children:
                    "(iv) Outages caused by overly permissive rate-limiting configurations.",
                }),
                "\n",
                (0, t.jsx)(i.li, {
                  children:
                    "(v) Outages caused by email sending issues when using the provisional (default) email sending configuration included with any Supabase project with the intention of getting started but not for production use.",
                }),
                "\n",
                (0, t.jsx)(i.li, {
                  children:
                    "(vi) Outages or issues caused by retracted versions of official Supabase libraries, frameworks, software packages (CLI, Docker image, executable, Infrastructure-as-Code plugins, etc.) or APIs, including urgent retractions due to identified security vulnerabilities.",
                }),
                "\n",
                (0, t.jsx)(i.li, {
                  children:
                    "(vii) Outages or issues caused by unofficial Supabase client libraries, frameworks, or API proxies, including security vulnerabilities, even when those libraries internally use official Supabase libraries.",
                }),
                "\n",
                (0, t.jsx)(i.li, {
                  children:
                    "(viii) Outages or issues that could have been resolved by upgrading to a higher minor or patch version of an official Supabase client library, framework, or software package (CLI, Docker image, executable, Infrastructure-as-Code plugin, etc.).",
                }),
                "\n",
              ],
            }),
            (0, t.jsx)(i.h4, {
              id: "storage-sla-exclusions",
              children: "Storage SLA Exclusions",
            }),
            (0, t.jsxs)(i.ul, {
              children: [
                "\n",
                (0, t.jsx)(i.li, {
                  children:
                    "(i) Inappropriately provisioned compute resources related to your project for the expected load on your database.",
                }),
                "\n",
                (0, t.jsx)(i.li, {
                  children:
                    "(ii) Low amounts of pgBouncer or Supervisor connection pool configuration, such as max_clients and pool_size, for high amounts of traffic.",
                }),
                "\n",
                (0, t.jsxs)(i.li, {
                  children: [
                    "(iii) Any accidental or intentional modifications, additions, or deletions of database objects (tables, views, triggers, roles, functions, indexes, constraints, permissions, grants, and similar) in the ",
                    (0, t.jsx)(i.code, { children: "storage" }),
                    " schema, or foreign key relationships in any schema to non-primary key columns within the ",
                    (0, t.jsx)(i.code, { children: "storage" }),
                    " schema, that may cause total or partial outage, including outages caused in the future but related to such modifications, additions, or deletions in the past when arising from schema migrations initiated by Supabase.",
                  ],
                }),
                "\n",
                (0, t.jsx)(i.li, {
                  children:
                    "(iv) Outages or issues that could have been resolved by upgrading to a higher minor or patch version of an official Supabase client library, framework, or software package (CLI, Docker image, executable, Infrastructure-as-Code plugin, etc.).",
                }),
                "\n",
                (0, t.jsx)(i.li, {
                  children:
                    "(v) Outages caused by accidental deletions of objects or buckets via the Storage API by the user.",
                }),
                "\n",
              ],
            }),
            (0, t.jsx)(i.h4, {
              id: "management-api-sla-exclusions",
              children: "Management API SLA Exclusions",
            }),
            (0, t.jsxs)(i.ul, {
              children: [
                "\n",
                (0, t.jsx)(i.li, {
                  children:
                    "(i) Until the management API reaches General Availability (GA), we cannot provide an uptime commitment.",
                }),
                "\n",
                (0, t.jsx)(i.li, {
                  children:
                    "(ii) Personal access tokens getting lost or leaked due to improper maintenance or improper use of confidential information.",
                }),
                "\n",
                (0, t.jsx)(i.li, {
                  children: "(iii) Violation of Supabase fair-use policy.",
                }),
                "\n",
              ],
            }),
            (0, t.jsx)(i.h4, {
              id: "realtime-sla-exclusions",
              children: "Realtime SLA Exclusions",
            }),
            (0, t.jsxs)(i.ul, {
              children: [
                "\n",
                (0, t.jsx)(i.li, {
                  children:
                    "(i) Inappropriately provisioned compute resources related to your project for the expected load on your database.",
                }),
                "\n",
                (0, t.jsx)(i.li, {
                  children:
                    "(ii) The Realtime service does not guarantee messaging deliverability. If you need at-least-once, exactly-once, or at-most-once guarantees, you will need to build this functionality on top of the realtime service.",
                }),
                "\n",
              ],
            }),
            (0, t.jsx)(i.h4, {
              id: "edge-functions",
              children: "Edge Functions",
            }),
            (0, t.jsxs)(i.ul, {
              children: [
                "\n",
                (0, t.jsxs)(i.li, {
                  children: [
                    "(i) ",
                    (0, t.jsx)(i.strong, {
                      children: "Uptime Commitment Exclusion:",
                    }),
                    " Until Edge Functions reach General Availability (GA), we cannot provide an uptime commitment. Customers acknowledge that the service may experience downtime, interruptions, or performance issues, and no specific availability percentage is promised at this time.",
                  ],
                }),
                "\n",
              ],
            }),
            (0, t.jsx)(i.h2, { id: "support", children: "Support" }),
            (0, t.jsx)(i.p, {
              children:
                "Supabase provides Support Service Level Agreements for our Team and Enterprise customers.",
            }),
            (0, t.jsx)(i.h3, { id: "1-urgent", children: "1. Urgent" }),
            (0, t.jsx)(i.p, {
              children: (0, t.jsx)(i.strong, { children: "Critical Issue" }),
            }),
            (0, t.jsx)(i.p, {
              children:
                "Defect resulting in full or partial system outage or a condition that makes Supabase unusable\nor unavailable in production for all of Customer's Users.",
            }),
            (0, t.jsx)(i.h3, { id: "2-high", children: "2. High" }),
            (0, t.jsx)(i.p, {
              children: (0, t.jsx)(i.strong, {
                children: "Significant Business Disruption",
              }),
            }),
            (0, t.jsx)(i.p, {
              children:
                "Issue resulting in a situation meaning major functionality is impacted and\nsignificant performance degradation is experienced. Issue impacts significant proportion of user base and / or major\nSupabase functionality.",
            }),
            (0, t.jsx)(i.h3, { id: "3-normal", children: "3. Normal" }),
            (0, t.jsx)(i.p, {
              children: (0, t.jsx)(i.strong, {
                children:
                  "Minor Feature or Functional Issue / General Question",
              }),
            }),
            (0, t.jsx)(i.p, {
              children:
                "Issue results in a component of Supabase not\nperforming as expected or documented. An inquiry by a Customer representative regarding a general technical issue\nor general question.",
            }),
            (0, t.jsx)(i.h3, { id: "4-low", children: "4. Low" }),
            (0, t.jsx)(i.p, {
              children: (0, t.jsx)(i.strong, {
                children: "Minor Issue / Feature Request",
              }),
            }),
            (0, t.jsx)(i.p, {
              children:
                "An Information request about Supabase or feature request.",
            }),
            (0, t.jsx)(i.h2, {
              id: "target-initial-response-times",
              children: "Target initial response times",
            }),
            (0, t.jsxs)(i.table, {
              children: [
                (0, t.jsx)(i.thead, {
                  children: (0, t.jsxs)(i.tr, {
                    children: [
                      (0, t.jsx)(i.th, { children: "Severity Level" }),
                      (0, t.jsx)(i.th, { children: "Team" }),
                      (0, t.jsx)(i.th, { children: "Enterprise Standard" }),
                      (0, t.jsx)(i.th, { children: "Priority Plus" }),
                    ],
                  }),
                }),
                (0, t.jsxs)(i.tbody, {
                  children: [
                    (0, t.jsxs)(i.tr, {
                      children: [
                        (0, t.jsx)(i.td, { children: "1. Urgent" }),
                        (0, t.jsxs)(i.td, {
                          children: [
                            "24 hours",
                            (0, t.jsx)("br", {}),
                            "24/7 \xd7 365",
                          ],
                        }),
                        (0, t.jsxs)(i.td, {
                          children: [
                            "1 hour",
                            (0, t.jsx)("br", {}),
                            "24/7 \xd7 365",
                          ],
                        }),
                        (0, t.jsxs)(i.td, {
                          children: [
                            "1 hour",
                            (0, t.jsx)("br", {}),
                            "24/7 \xd7 365",
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)(i.tr, {
                      children: [
                        (0, t.jsx)(i.td, { children: "2. High" }),
                        (0, t.jsxs)(i.td, {
                          children: [
                            "1 business day",
                            (0, t.jsx)("br", {}),
                            "Monday - Friday",
                          ],
                        }),
                        (0, t.jsxs)(i.td, {
                          children: [
                            "2 business hours",
                            (0, t.jsx)("br", {}),
                            "Monday - Friday",
                          ],
                        }),
                        (0, t.jsxs)(i.td, {
                          children: [
                            "2 hours",
                            (0, t.jsx)("br", {}),
                            "24/7 \xd7 365",
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)(i.tr, {
                      children: [
                        (0, t.jsx)(i.td, { children: "3. Normal" }),
                        (0, t.jsxs)(i.td, {
                          children: [
                            "1 business day",
                            (0, t.jsx)("br", {}),
                            "Monday - Friday",
                          ],
                        }),
                        (0, t.jsxs)(i.td, {
                          children: [
                            "1 business day",
                            (0, t.jsx)("br", {}),
                            "Monday - Friday",
                          ],
                        }),
                        (0, t.jsxs)(i.td, {
                          children: [
                            "12 hours",
                            (0, t.jsx)("br", {}),
                            "24/7 x 365",
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)(i.tr, {
                      children: [
                        (0, t.jsx)(i.td, { children: "4. Low" }),
                        (0, t.jsxs)(i.td, {
                          children: [
                            "2 business days",
                            (0, t.jsx)("br", {}),
                            "Monday - Friday",
                          ],
                        }),
                        (0, t.jsxs)(i.td, {
                          children: [
                            "2 business days",
                            (0, t.jsx)("br", {}),
                            "Monday - Friday",
                          ],
                        }),
                        (0, t.jsxs)(i.td, {
                          children: [
                            "24 hours",
                            (0, t.jsx)("br", {}),
                            "24/7 x 365",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, t.jsx)(i.p, {
              children:
                "Business hours are from 6am to 6pm (local time), except where otherwise stated.",
            }),
          ],
        });
      }
      i.default = function () {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, t.jsx)(
          l,
          Object.assign({}, e, { children: (0, t.jsx)(d, e) })
        );
      };
    },
  },
  function (e) {
    e.O(
      0,
      [
        4996, 5126, 2787, 2251, 4697, 977, 9573, 4525, 8147, 5669, 7198, 4526,
        4123, 7478, 6999, 3880, 2888, 9774, 179,
      ],
      function () {
        return e((e.s = 49308));
      }
    ),
      (_N_E = e.O());
  },
]);
