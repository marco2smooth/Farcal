(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5637],
  {
    14172: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/edge-functions",
        function () {
          return a(92217);
        },
      ]);
    },
    21221: function (e, t, a) {
      "use strict";
      a.r(t);
      var s = a(52322);
      t.default = function (e) {
        let { icon: t, color: a } = e;
        return (0, s.jsx)("div", {
          className: [
            "inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md",
            a && "black" !== a
              ? ""
              : "bg-foreground text-background-alternative",
            a && "gray" === a ? "bg-border-strong text-foreground-light" : "",
            a && "green" === a ? "bg-brand text-brand-100" : "",
            a && "alt" === a ? "bg-alternative text-brand" : "",
          ].join(" "),
          children: (0, s.jsx)("svg", {
            className: [
              "h-5 w-5",
              a && "black" !== a ? "" : "stroke-background",
              a && "gray" === a ? "stroke-foreground-light" : "",
              a && "green" === a ? "stroke-brand-200" : "",
              a && "alt" === a ? "stroke-brand" : "",
            ].join(" "),
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            children: (0, s.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "1.5",
              d: t,
            }),
          }),
        });
      };
    },
    14528: function (e, t, a) {
      "use strict";
      var s = a(52322);
      a(2784);
      var r = a(44382),
        o = a(39097),
        i = a.n(o),
        l = a(82577),
        n = a(37637);
      t.Z = function (e) {
        let { activePage: t } = e;
        return (0, s.jsx)("nav", {
          className:
            "relative z-30 hidden md:flex items-center bg-background w-full border-b",
          children: (0, s.jsx)(n.default, {
            className: "!py-0 flex gap-3 items-center",
            children: Object.entries(l.RB).map((e) => {
              let a = e[1],
                o = a.name === l.$7.AUTHENTICATION;
              return (0, s.jsxs)(
                i(),
                {
                  className: (0, r.cn)(
                    "flex items-center gap-1.5 px-2 first:-ml-2 py-4 border-b border-transparent text-sm text-foreground-lighter hover:text-foreground",
                    "focus-visible:ring-2 focus-visible:ring-foreground-lighter focus-visible:text-foreground focus-visible:outline-brand-600",
                    a.name === t && "border-foreground-light text-foreground"
                  ),
                  href: "/".concat(
                    o ? "auth" : a.name.toLowerCase().replace(" ", "-")
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
                        d: a.icon["18"],
                        stroke: "currentColor",
                      }),
                    }),
                    (0, s.jsx)("p", { children: o ? "Auth" : a.name }),
                  ],
                },
                a.name
              );
            }),
          }),
        });
      };
    },
    63452: function (e, t, a) {
      "use strict";
      var s = a(52322);
      a(2784);
      var r = a(44382),
        o = a(29982),
        i = a(39097),
        l = a.n(i),
        n = a(21221),
        c = a(37637);
      t.Z = (e) => {
        var t;
        return (0, s.jsx)("div", {
          className: (0, r.cn)(
            "w-full max-w-full relative mx-auto py-16 lg:py-24 border-b bg-alternative overflow-hidden",
            e.className
          ),
          children: (0, s.jsxs)(c.default, {
            className: (0, r.cn)(
              "!py-0 grid grid-cols-12",
              e.sectionContainerClassName
            ),
            children: [
              (0, s.jsxs)("div", {
                className: "relative z-10 col-span-12 gap-8 lg:col-span-5",
                children: [
                  (0, s.jsxs)("div", {
                    children: [
                      (e.icon || e.title) &&
                        (0, s.jsxs)("div", {
                          className: "mb-4 flex items-center gap-3",
                          children: [
                            e.icon && (0, s.jsx)(n.default, { icon: e.icon }),
                            e.title &&
                              (0, s.jsx)(
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
                      (0, s.jsx)("h1", {
                        className:
                          "h1 text-3xl md:!text-4xl lg:!text-4xl 2xl:!text-6xl tracking-[-.15px]",
                        children: e.h1,
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    children:
                      e.subheader &&
                      e.subheader.map((e, t) =>
                        (0, s.jsx)(
                          "p",
                          {
                            className: "p lg:text-lg max-w-lg lg:max-w-none",
                            children: e,
                          },
                          t
                        )
                      ),
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "flex flex-row md:flex-row md:items-center gap-2",
                    children:
                      null === (t = e.ctas) || void 0 === t
                        ? void 0
                        : t.map((e) => {
                            var t, a;
                            return (0, s.jsx)(
                              o.z,
                              {
                                size: "medium",
                                type:
                                  null !== (t = e.type) && void 0 !== t
                                    ? t
                                    : "default",
                                asChild: !0,
                                children: (0, s.jsx)(l(), {
                                  href: e.href,
                                  children:
                                    null !== (a = e.label) && void 0 !== a
                                      ? a
                                      : "Start for free",
                                }),
                              },
                              e.href
                            );
                          }),
                  }),
                  e.footer &&
                    "left" === e.footerPosition &&
                    (0, s.jsx)("div", {
                      className:
                        "ph-footer relative z-10 mt-4 md:mt-8 lg:mt-20 xl:mt-32 col-span-12",
                      children: e.footer,
                    }),
                ],
              }),
              e.image &&
                (0, s.jsx)("div", {
                  className:
                    "relative min-h-[300px] col-span-12 mt-8 lg:col-span-7 lg:mt-0 xl:col-span-6 xl:col-start-7",
                  children: e.image,
                }),
              e.footer &&
                "left" !== e.footerPosition &&
                (0, s.jsx)("div", {
                  className:
                    "relative z-10 mt-4 md:mt-8 lg:mt-20 xl:mt-32 col-span-12",
                  children: e.footer,
                }),
            ],
          }),
        });
      };
    },
    72436: function (e, t, a) {
      "use strict";
      var s = a(82577);
      let r = [
        {
          type: "example",
          tags: ["Next.js", "Stripe", "Vercel"],
          products: [s.$7.DATABASE, s.$7.AUTHENTICATION],
          title: "Stripe Subscriptions Starter",
          description:
            "The all-in-one subscription starter kit for high-performance SaaS applications, powered by Stripe, Supabase, and Vercel.",
          author: "Vercel",
          author_url: "https://github.com/vercel",
          author_img: "https://avatars.githubusercontent.com/u/14985020",
          repo_name: "vercel/nextjs-subscription-payments",
          repo_url: "https://github.com/vercel/nextjs-subscription-payments",
          vercel_deploy_url:
            "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnextjs-subscription-payments&env=NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,STRIPE_SECRET_KEY&envDescription=Enter%20your%20Stripe%20API%20keys.&envLink=https%3A%2F%2Fdashboard.stripe.com%2Fapikeys&project-name=nextjs-subscription-payments&repository-name=nextjs-subscription-payments&integration-ids=oac_VqOgBHqhEoFTPzGkPd7L0iH6&external-id=https%3A%2F%2Fgithub.com%2Fvercel%2Fnextjs-subscription-payments%2Ftree%2Fmain",
          demo_url: "https://subscription-payments.vercel.app/",
        },
        {
          type: "example",
          tags: ["Next.js", "Vercel"],
          products: [s.$7.DATABASE, s.$7.AUTHENTICATION],
          title: "Next.js Starter",
          description:
            "A Next.js App Router template configured with cookie-based auth using Supabase, TypeScript and Tailwind CSS.",
          author: "Supabase",
          author_url: "https://github.com/supabase",
          author_img: "https://avatars.githubusercontent.com/u/54469796",
          repo_name: "vercel/next.js/examples/with-supabase",
          repo_url:
            "https://github.com/vercel/next.js/tree/canary/examples/with-supabase",
          vercel_deploy_url:
            "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fwith-supabase&project-name=nextjs-with-supabase&repository-name=nextjs-with-supabase&demo-title=nextjs-with-supabase&demo-description=This%20starter%20configures%20Supabase%20Auth%20to%20use%20cookies%2C%20making%20the%20user%27s%20session%20available%20throughout%20the%20entire%20Next.js%20app%20-%20Client%20Components%2C%20Server%20Components%2C%20Route%20Handlers%2C%20Server%20Actions%20and%20Middleware.&demo-url=https%3A%2F%2Fdemo-nextjs-with-supabase.vercel.app%2F&external-id=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fwith-supabase&demo-image=https%3A%2F%2Fdemo-nextjs-with-supabase.vercel.app%2Fopengraph-image.png&integration-ids=oac_VqOgBHqhEoFTPzGkPd7L0iH6",
          demo_url: "https://demo-nextjs-with-supabase.vercel.app/",
        },
        {
          type: "example",
          tags: ["Next.js", "OpenAI", "Vercel"],
          products: [s.$7.DATABASE, s.$7.AUTHENTICATION, s.$7.VECTOR],
          title: "AI Chatbot",
          description:
            "An open-source AI chatbot app template built with Next.js, the Vercel AI SDK, OpenAI, and Supabase.",
          author: "Supabase",
          author_url: "https://github.com/supabase",
          author_img: "https://avatars.githubusercontent.com/u/54469796",
          repo_name: "supabase-community/vercel-ai-chatbot",
          repo_url: "https://github.com/supabase-community/vercel-ai-chatbot",
          vercel_deploy_url:
            "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsupabase-community%2Fvercel-ai-chatbot&env=OPENAI_API_KEY&envDescription=You%20must%20first%20activate%20a%20Billing%20Account%20here%3A%20https%3A%2F%2Fplatform.openai.com%2Faccount%2Fbilling%2Foverview&envLink=https%3A%2F%2Fplatform.openai.com%2Faccount%2Fapi-keys&project-name=vercel-ai-chatbot-with-supabase&repository-name=vercel-ai-chatbot-with-supabase&integration-ids=oac_VqOgBHqhEoFTPzGkPd7L0iH6&external-id=https%3A%2F%2Fgithub.com%2Fsupabase-community%2Fvercel-ai-chatbot%2Ftree%2Fmain",
          demo_url: "",
        },
        {
          type: "example",
          tags: ["LangChain", "Next.js"],
          products: [s.$7.DATABASE, s.$7.VECTOR],
          title: "LangChain + Next.js Starter",
          description:
            "Starter template and example use-cases for LangChain projects in Next.js, including chat, agents, and retrieval.",
          author: "Supabase",
          author_url: "https://github.com/supabase",
          author_img: "https://avatars.githubusercontent.com/u/54469796",
          repo_name: "langchain-ai/langchain-nextjs-template",
          repo_url: "https://github.com/langchain-ai/langchain-nextjs-template",
          vercel_deploy_url:
            "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Flangchain-ai%2Flangchain-nextjs-template",
          demo_url: "https://langchain-nextjs-template.vercel.app/",
        },
        {
          type: "example",
          tags: ["Flutter"],
          products: [s.$7.DATABASE, s.$7.AUTHENTICATION, s.$7.STORAGE],
          title: "Flutter User Management",
          description:
            "Get started with Supabase and Flutter by building a user management app with auth, file storage, and database.",
          author: "Supabase Community",
          author_url: "https://github.com/supabase-community",
          author_img: "https://avatars.githubusercontent.com/u/87650496",
          repo_name:
            "supabase/examples/user-management/flutter-user-management",
          repo_url:
            "https://github.com/supabase/supabase/tree/master/examples/user-management/flutter-user-management",
          vercel_deploy_url: "",
          demo_url: "",
        },
        {
          type: "example",
          tags: ["Expo"],
          products: [s.$7.DATABASE, s.$7.AUTHENTICATION],
          title: "Expo React Native Starter",
          description:
            "An extended version of create-t3-turbo implementing authentication on both the web and mobile applications.",
          author: "Supabase Community",
          author_url: "https://github.com/supabase-community",
          author_img: "https://avatars.githubusercontent.com/u/87650496",
          repo_name: "supabase-community/create-t3-turbo",
          repo_url: "https://github.com/supabase-community/create-t3-turbo",
          vercel_deploy_url: "",
          demo_url: "https://create-t3-turbo.vercel.app/",
        },
        {
          type: "example",
          tags: ["Svelte"],
          products: [s.$7.DATABASE],
          title: "Svelte kanban board",
          description: "A Trello clone using Supabase as the storage system.",
          author: "joshnuss",
          author_url: "https://github.com/joshnuss",
          author_img: "https://avatars.githubusercontent.com/u/4437",
          repo_name: "supabase-kanban",
          repo_url: "https://github.com/joshnuss/supabase-kanban",
          vercel_deploy_url: "",
          demo_url: "https://supabase-kanban.vercel.app/",
        },
        {
          type: "example",
          tags: ["Next.js"],
          products: [s.$7.DATABASE],
          title: "Next.js Realtime chat app",
          description:
            "Next.js Slack clone app using Supabase realtime subscriptions",
          author: "supabase",
          author_url: "https://github.com/supabase",
          author_img: "https://avatars.githubusercontent.com/u/54469796",
          repo_name: "nextjs-slack-clone",
          repo_url:
            "https://github.com/supabase/supabase/tree/master/examples/slack-clone/nextjs-slack-clone",
          vercel_deploy_url: "",
          demo_url: "",
        },
        {
          type: "example",
          tags: ["Next.js"],
          products: [s.$7.DATABASE, s.$7.AUTHENTICATION],
          title: "Next.js Subscription and Auth",
          description:
            "The all-in-one starter kit for high-performance SaaS applications.",
          author: "Vercel",
          author_url: "https://github.com/vercel",
          author_img: "https://avatars.githubusercontent.com/u/14985020",
          repo_name: "nextjs-subscription-payments",
          repo_url: "https://github.com/vercel/nextjs-subscription-payments",
          vercel_deploy_url:
            "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnextjs-subscription-payments&env=NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,STRIPE_SECRET_KEY&envDescription=Enter%20your%20Stripe%20API%20keys.&envLink=https%3A%2F%2Fdashboard.stripe.com%2Fapikeys&project-name=nextjs-subscription-payments&repository-name=nextjs-subscription-payments&integration-ids=oac_VqOgBHqhEoFTPzGkPd7L0iH6&external-id=https%3A%2F%2Fgithub.com%2Fvercel%2Fnextjs-subscription-payments%2Ftree%2Fmain",
          demo_url: "https://subscription-payments.vercel.app/",
        },
        {
          type: "example",
          tags: ["Expo", "React"],
          products: [s.$7.DATABASE],
          title: "Expo React Native Starter",
          description: "Template bottom tabs with auth flow (Typescript)",
          author: "codingki",
          author_url: "https://github.com/codingki",
          author_img: "https://avatars.githubusercontent.com/u/39829726",
          repo_name: "react-native-expo-template",
          repo_url:
            "https://github.com/codingki/react-native-expo-template/tree/master/template-typescript-bottom-tabs-supabase-auth-flow",
          vercel_deploy_url: "",
          demo_url: "",
        },
        {
          type: "example",
          tags: ["NestJs"],
          products: [s.$7.DATABASE, s.$7.AUTHENTICATION],
          title: "NestJS example",
          description: "NestJS example using Supabase Auth",
          author: "hiro1107",
          author_url: "https://github.com/hiro1107",
          author_img: "https://avatars.githubusercontent.com/u/1423067",
          repo_name: "nestjs-supabase-auth",
          repo_url: "https://github.com/hiro1107/nestjs-supabase-auth",
          vercel_deploy_url: "",
          demo_url: "",
        },
        {
          type: "example",
          tags: ["React"],
          products: [s.$7.DATABASE],
          title: "ReactJS realtime chat app",
          description:
            "Example app of real-time chat using supabase realtime api",
          author: "shwosner",
          author_url: "https://github.com/shwosner",
          author_img: "https://avatars.githubusercontent.com/u/1423067",
          repo_name: "realtime-chat-supabase-react",
          repo_url: "https://github.com/shwosner/realtime-chat-supabase-react",
          vercel_deploy_url: "",
          demo_url: "https://random-chat.netlify.app/",
        },
        {
          type: "example",
          tags: ["Svelte"],
          products: [s.$7.DATABASE],
          title: "Svelte todo list app",
          description: "Sveltejs todo with TailwindCSS and Snowpack",
          author: "supabase",
          author_url: "https://github.com/supabase",
          author_img: "https://avatars.githubusercontent.com/u/54469796",
          repo_name: "sveltejs-todo-list",
          repo_url:
            "https://github.com/supabase/supabase/tree/master/examples/todo-list/sveltejs-todo-list",
          vercel_deploy_url: "",
          demo_url: "",
        },
        {
          type: "example",
          tags: ["Vue"],
          products: [s.$7.DATABASE],
          title: "Vue.js todo list app",
          description: "Vue.js todo app using TypeScript",
          author: "supabase",
          author_url: "https://github.com/supabase",
          author_img: "https://avatars.githubusercontent.com/u/54469796",
          repo_name: "vue3-ts-todo-list",
          repo_url:
            "https://github.com/supabase/examples/tree/main/supabase-js-v1/todo-list/vue3-ts-todo-list",
          vercel_deploy_url: "",
          demo_url: "",
        },
        {
          type: "example",
          tags: ["Angular"],
          products: [s.$7.DATABASE],
          title: "Angular todo list app",
          description: "Angular todo List example",
          author: "geromegrignon",
          author_url: "https://github.com/geromegrignon",
          author_img: "https://avatars.githubusercontent.com/u/32737308",
          repo_name: "angular-todo-list",
          repo_url:
            "https://github.com/supabase/examples/tree/main/supabase-js-v1/todo-list/angular-todo-list",
          vercel_deploy_url: "",
          demo_url: "",
        },
        {
          type: "example",
          tags: ["Resend"],
          products: [s.$7.FUNCTIONS],
          title: "Sending Emails",
          description: "Send emails in Edge Functions with Resend.",
          repo_url:
            "https://supabase.com/docs/guides/functions/examples/send-emails",
        },
        {
          type: "example",
          tags: ["OpenAI"],
          products: [s.$7.FUNCTIONS],
          title: "Generating OpenAI GPT3 completions",
          description: "Using OpenAI in Edge Functions.",
          repo_url: "https://supabase.com/docs/guides/ai/examples/openai",
        },
        {
          type: "example",
          tags: ["Stripe"],
          products: [s.$7.FUNCTIONS],
          title: "Stripe Webhooks",
          description: "Handling signed Stripe Webhooks with Edge Functions.",
          repo_url:
            "https://supabase.com/docs/guides/functions/examples/stripe-webhooks",
        },
        {
          type: "example",
          tags: ["Postgres"],
          products: [s.$7.FUNCTIONS],
          title: "Connecting directly to Postgres",
          description: "Connecting to Postgres from Edge Functions.",
          repo_url:
            "https://supabase.com/docs/guides/functions/connect-to-postgres",
        },
        {
          type: "example",
          tags: ["Huggingface"],
          products: [s.$7.FUNCTIONS],
          title: "Huggingface Image Captioning",
          description:
            "Use the Hugging Face Inference API to make calls to 100,000+ Machine Learning models from Supabase Edge Functions.",
          repo_url: "https://supabase.com/docs/guides/functions/auth",
        },
        {
          type: "example",
          tags: ["Supabase"],
          products: [s.$7.FUNCTIONS],
          title: "Upload files to Storage",
          description: "Process multipart/form-data.",
          repo_url:
            "https://github.com/supabase/supabase/tree/master/examples/edge-functions/supabase/functions/file-upload-storage",
        },
      ];
      t.Z = r;
    },
    38508: function (e, t, a) {
      "use strict";
      var s = a(52322),
        r = a(74714),
        o = a(25237),
        i = a.n(o),
        l = a(39097),
        n = a.n(l),
        c = a(82577),
        p = a(72436),
        u = a(89460);
      let d = i()(
          () => Promise.all([a.e(8826), a.e(3732)]).then(a.bind(a, 33732)),
          { loadableGenerated: { webpack: () => [33732] } }
        ),
        h = i()(() => a.e(4912).then(a.bind(a, 14912)), {
          loadableGenerated: { webpack: () => [14912] },
        }),
        m = i()(
          () =>
            Promise.all([a.e(7198), a.e(4526), a.e(6996)]).then(
              a.bind(a, 29701)
            ),
          { loadableGenerated: { webpack: () => [29701] } }
        ),
        g = i()(() => a.e(7158).then(a.bind(a, 97158)), {
          loadableGenerated: { webpack: () => [97158] },
        }),
        b = i()(() => a.e(6808).then(a.bind(a, 66808)), {
          loadableGenerated: { webpack: () => [66808] },
        }),
        x = i()(() => a.e(5291).then(a.bind(a, 45291)), {
          loadableGenerated: { webpack: () => [45291] },
        }),
        v = i()(() => a.e(990).then(a.bind(a, 50990)), {
          loadableGenerated: { webpack: () => [50990] },
        }),
        f = i()(
          () => Promise.all([a.e(9573), a.e(6842)]).then(a.bind(a, 66842)),
          { loadableGenerated: { webpack: () => [66842] } }
        ),
        C = i()(
          () => Promise.all([a.e(9573), a.e(4478)]).then(a.bind(a, 14478)),
          { loadableGenerated: { webpack: () => [14478] } }
        ),
        j = i()(
          () => Promise.all([a.e(9573), a.e(3043)]).then(a.bind(a, 3043)),
          { loadableGenerated: { webpack: () => [3043] } }
        ),
        y = i()(
          () => Promise.all([a.e(9573), a.e(9499)]).then(a.bind(a, 19499)),
          { loadableGenerated: { webpack: () => [19499] } }
        ),
        w = i()(
          () => Promise.all([a.e(9573), a.e(3318)]).then(a.bind(a, 33318)),
          { loadableGenerated: { webpack: () => [33318] } }
        ),
        _ = i()(
          () => Promise.all([a.e(9573), a.e(8585)]).then(a.bind(a, 58585)),
          { loadableGenerated: { webpack: () => [58585] } }
        );
      t.Z = (e) => ({
        metaTitle:
          "Supabase Edge Functions - Deploy JavaScript globally in seconds",
        metaDescription:
          "Execute your code closest to your users with fast deploy times and low latency.",
        heroSection: {
          title: u.Z.functions.name,
          h1: (0, s.jsxs)(s.Fragment, {
            children: [
              "Deploy JavaScript",
              (0, s.jsx)("br", {}),
              " globally in seconds",
            ],
          }),
          subheader: [
            "Easily author, deploy and monitor serverless functions distributed globally at the edge, close to your users.",
          ],
          image: (0, s.jsx)(d, {}),
          ctas: [
            {
              label: "Launch a free database",
              href: "/dashboard",
              type: "primary",
            },
            {
              label: "Read documentation",
              href: "/docs/guides/functions",
              type: "default",
            },
          ],
        },
        highlightsSection: {
          highlights: [
            {
              title: "Fully managed",
              paragraph:
                "Edge Functions scale automatically, reducing your devops burden",
              svg: (0, s.jsx)("div", {
                className:
                  "w-12 h-12 p-2 bg-alternative rounded-lg border flex justify-center items-center",
                children: (0, s.jsxs)("svg", {
                  className: "w-7 h-7",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    (0, s.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M11.8217 2.21899C9.75065 2.21899 8.07174 3.89791 8.07174 5.96896V11.783C8.07174 11.8536 8.08148 11.9218 8.0997 11.9866C8.17354 12.3232 8.47349 12.5752 8.83229 12.5752H10.5494C10.8626 12.5752 11.1749 12.8513 11.1749 13.2656V15.0638C11.1749 15.3165 11.2998 15.54 11.4913 15.6759C11.6177 15.7729 11.7759 15.8306 11.9476 15.8306H17.9997C20.0707 15.8306 21.7496 14.1517 21.7496 12.0806V5.96896C21.7496 3.89791 20.0707 2.21899 17.9997 2.21899H11.8217ZM12.6749 14.3307H17.9997C19.2423 14.3307 20.2497 13.3233 20.2497 12.0806L20.2497 5.96896C20.2497 4.7263 19.2423 3.71893 17.9997 3.71893H11.8217C10.579 3.71893 9.57167 4.7263 9.57167 5.96896V11.0752H10.5494C10.9115 11.0752 11.2478 11.1666 11.5412 11.3263C11.5507 11.3157 11.5605 11.3052 11.5708 11.295L15.5026 7.36084L12.6816 7.36066C12.2674 7.36063 11.9316 7.02482 11.9317 6.61061C11.9317 6.1964 12.2675 5.86063 12.6817 5.86066L16.543 5.86091C17.3714 5.86096 18.0429 6.53248 18.0429 7.36085L18.0431 11.2597C18.0431 11.6739 17.7073 12.0097 17.2931 12.0097C16.8789 12.0097 16.5431 11.674 16.5431 11.2598L16.543 8.44186L12.6317 12.3553C12.597 12.3901 12.5597 12.4207 12.5205 12.4472C12.6204 12.7022 12.6749 12.9791 12.6749 13.2656V14.3307Z",
                      fill: "currentColor",
                    }),
                    (0, s.jsx)("path", {
                      d: "M4.53957 11.0752H6.25666C6.67087 11.0752 7.00666 11.411 7.00666 11.8252C7.00666 12.2394 6.67087 12.5752 6.25666 12.5752H4.53957C4.22636 12.5752 3.91406 12.8513 3.91406 13.2656L3.91406 15.0638C3.91406 15.4781 3.57828 15.8138 3.16406 15.8138C2.74985 15.8138 2.41406 15.4781 2.41406 15.0638V13.2656C2.41406 12.0889 3.33344 11.0752 4.53957 11.0752Z",
                      fill: "currentColor",
                    }),
                    (0, s.jsx)("path", {
                      d: "M3.16406 17.0111C3.57828 17.0111 3.91406 17.3469 3.91406 17.7611L3.91406 19.5593C3.91406 19.9737 4.22636 20.2498 4.53957 20.2498L6.25666 20.2498C6.67087 20.2498 7.00666 20.5856 7.00666 20.9998C7.00666 21.414 6.67087 21.7498 6.25666 21.7498L4.53957 21.7498C3.33344 21.7498 2.41406 20.7361 2.41406 19.5593V17.7611C2.41406 17.3469 2.74985 17.0111 3.16406 17.0111Z",
                      fill: "currentColor",
                    }),
                    (0, s.jsx)("path", {
                      d: "M11.9249 17.0111C12.3391 17.0111 12.6749 17.3469 12.6749 17.7611V19.5593C12.6749 20.7361 11.7555 21.7498 10.5494 21.7498H8.83229C8.41807 21.7498 8.08229 21.414 8.08229 20.9998C8.08229 20.5856 8.41807 20.2498 8.83229 20.2498H10.5494C10.8626 20.2498 11.1749 19.9737 11.1749 19.5593V17.7611C11.1749 17.3469 11.5107 17.0111 11.9249 17.0111Z",
                      fill: "currentColor",
                    }),
                  ],
                }),
              }),
            },
            {
              title: "Global deployments",
              paragraph:
                "Deploy worldwide for maximum resiliency and low latency",
              svg: (0, s.jsx)("div", {
                className:
                  "w-12 h-12 p-2 bg-alternative rounded-lg border flex justify-center items-center",
                children: (0, s.jsx)(r.Z, {
                  className: "w-7 h-7 stroke-[1.4px]",
                }),
              }),
            },
            {
              title: "Secure and Scalable",
              paragraph: "Simply write your code in TypeScript and deploy",
              svg: (0, s.jsx)("div", {
                className:
                  "w-12 h-12 p-2 bg-alternative rounded-lg border flex justify-center items-center",
                children: (0, s.jsxs)("svg", {
                  className: "w-7 h-7",
                  width: "100%",
                  height: "100%",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    (0, s.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M13.7377 6.5363C14.145 6.61196 14.4138 7.00343 14.3381 7.41068L12.5869 16.8366C12.5112 17.2438 12.1197 17.5126 11.7125 17.437C11.3052 17.3613 11.0364 16.9698 11.1121 16.5626L12.8633 7.13669C12.939 6.72944 13.3305 6.46064 13.7377 6.5363Z",
                      fill: "currentColor",
                    }),
                    (0, s.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M15.7279 9.10834C16.0208 8.81543 16.4957 8.81539 16.7886 9.10826L19.1499 11.4692C19.2906 11.6099 19.3696 11.8007 19.3696 11.9996C19.3696 12.1985 19.2906 12.3893 19.15 12.5299L16.7886 14.8913C16.4957 15.1842 16.0209 15.1842 15.728 14.8913C15.4351 14.5984 15.4351 14.1235 15.728 13.8306L17.5589 11.9997L15.728 10.169C15.4351 9.87613 15.4351 9.40126 15.7279 9.10834Z",
                      fill: "currentColor",
                    }),
                    (0, s.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M9.72153 14.8913C9.42866 15.1842 8.95379 15.1842 8.66087 14.8913L6.29954 12.5303C6.15887 12.3897 6.07983 12.1989 6.07983 12C6.07982 11.8011 6.15884 11.6103 6.2995 11.4696L8.66083 9.10831C8.95373 8.81542 9.4286 8.81542 9.72149 9.10831C10.0144 9.4012 10.0144 9.87608 9.72149 10.169L7.89053 11.9999L9.72145 13.8306C10.0144 14.1235 10.0144 14.5983 9.72153 14.8913Z",
                      fill: "currentColor",
                    }),
                    (0, s.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M2.95312 6C2.95312 3.92893 4.63206 2.25 6.70313 2.25H18.7031C20.7742 2.25 22.4531 3.92893 22.4531 6V18C22.4531 20.0711 20.7742 21.75 18.7031 21.75H6.70313C4.63206 21.75 2.95312 20.0711 2.95312 18V6ZM6.70313 3.75C5.46048 3.75 4.45313 4.75736 4.45313 6V18C4.45313 19.2426 5.46048 20.25 6.70313 20.25H18.7031C19.9458 20.25 20.9531 19.2426 20.9531 18V6C20.9531 4.75736 19.9458 3.75 18.7031 3.75H6.70313Z",
                      fill: "currentColor",
                    }),
                  ],
                }),
              }),
            },
            {
              title: "Node.js Support",
              paragraph:
                "Easily migrate existing workloads, with support for Node and more than 1 million NPM modules",
              svg: (0, s.jsx)("div", {
                className:
                  "w-12 h-12 p-2 bg-alternative rounded-lg border flex justify-center items-center",
                children: (0, s.jsxs)("svg", {
                  className: "w-7 h-7",
                  width: "100%",
                  height: "100%",
                  viewBox: "0 0 26 28",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    (0, s.jsx)("path", {
                      d: "M11.9233 0.444469C12.6102 0.0512999 13.5049 0.049524 14.1912 0.444469C17.6439 2.39542 21.0976 4.3433 24.5497 6.29543C25.199 6.66117 25.6333 7.38378 25.6267 8.13193V19.8696C25.6315 20.6487 25.1543 21.3886 24.4693 21.746C21.028 23.6862 17.5884 25.6288 14.1477 27.569C13.4466 27.9698 12.5339 27.939 11.8547 27.5052C10.823 26.9072 9.78955 26.312 8.75774 25.7145C8.5469 25.5888 8.30922 25.4888 8.16034 25.2844C8.29195 25.107 8.52726 25.0849 8.71847 25.0074C9.14913 24.8705 9.54467 24.6507 9.9403 24.4373C10.0403 24.3689 10.1625 24.3951 10.2584 24.4564C11.1406 24.9622 12.0151 25.4828 12.9003 25.9838C13.0891 26.0928 13.2803 25.9481 13.4417 25.8581C16.8187 23.9495 20.1999 22.048 23.5763 20.1388C23.7014 20.0786 23.7706 19.9458 23.7604 19.8088C23.7628 15.9368 23.761 12.0641 23.7616 8.19212C23.7759 8.03662 23.6859 7.89366 23.5453 7.83003C20.1159 5.89871 16.6883 3.96444 13.2595 2.03263C13.2001 1.99179 13.1297 1.96988 13.0576 1.96977C12.9855 1.96967 12.9151 1.99138 12.8556 2.03204C9.42677 3.96444 5.99974 5.90049 2.57093 7.8317C2.43083 7.89544 2.3368 8.03603 2.35348 8.19212C2.35407 12.0641 2.35348 15.9368 2.35348 19.8094C2.34753 19.8763 2.36222 19.9433 2.39556 20.0016C2.4289 20.0599 2.47929 20.1065 2.53995 20.1353C3.45494 20.6541 4.37112 21.1694 5.2867 21.6864C5.80251 21.9641 6.43582 22.129 7.00412 21.9163C7.50562 21.7365 7.85715 21.2247 7.84758 20.6922C7.85232 16.8428 7.84521 12.9928 7.85113 9.14401C7.8386 8.97313 8.0007 8.83194 8.16685 8.84802C8.60649 8.84506 9.04672 8.8421 9.48636 8.84921C9.66987 8.84506 9.79616 9.02907 9.77347 9.20123C9.77169 13.075 9.7782 16.9489 9.77051 20.8227C9.77169 21.8551 9.34754 22.9784 8.39259 23.4836C7.21614 24.093 5.76206 23.9638 4.59982 23.3794C3.59366 22.8772 2.63348 22.2845 1.64518 21.7465C0.958393 21.391 0.483532 20.6482 0.488366 19.8697V8.13193C0.481164 7.36829 0.932741 6.63256 1.60226 6.27215C5.04301 4.33038 8.48316 2.38713 11.9233 0.444469Z",
                      fill: "currentColor",
                    }),
                    (0, s.jsx)("path", {
                      d: "M14.9242 8.57537C16.4248 8.47878 18.0313 8.51814 19.3817 9.25742C20.4272 9.82394 21.0069 11.0129 21.0253 12.1745C20.9961 12.3311 20.8323 12.4176 20.6828 12.4068C20.2474 12.4062 19.8119 12.4127 19.3765 12.4039C19.1918 12.411 19.0844 12.2407 19.0613 12.0774C18.9362 11.5216 18.6331 10.9712 18.11 10.7031C17.3069 10.3011 16.3759 10.3213 15.5002 10.3297C14.861 10.3636 14.1736 10.419 13.6321 10.7949C13.2163 11.0796 13.09 11.6544 13.2384 12.1173C13.3783 12.4497 13.762 12.557 14.076 12.6558C15.8844 13.1288 17.8008 13.0818 19.5748 13.7042C20.3092 13.958 21.0277 14.4513 21.2791 15.2203C21.6079 16.2509 21.4638 17.4828 20.7305 18.3102C20.1359 18.991 19.2698 19.3616 18.406 19.5629C17.2569 19.8191 16.0644 19.8256 14.8974 19.7119C13.8001 19.5868 12.6582 19.2985 11.8111 18.5508C11.0867 17.9218 10.7329 16.9418 10.768 15.996C10.7764 15.8362 10.9354 15.7248 11.0885 15.7379C11.5269 15.7344 11.9654 15.7332 12.4038 15.7385C12.579 15.726 12.7088 15.8774 12.7178 16.0424C12.7987 16.5719 12.9977 17.1277 13.4594 17.4416C14.3505 18.0166 15.4687 17.9772 16.489 17.9933C17.3344 17.9558 18.2833 17.9444 18.9732 17.3857C19.3371 17.067 19.445 16.5339 19.3466 16.0752C19.24 15.6879 18.8349 15.5075 18.487 15.3895C16.7017 14.8247 14.7639 15.0297 12.9959 14.391C12.2781 14.1374 11.584 13.6578 11.3083 12.9204C10.9235 11.8767 11.0998 10.5858 11.9099 9.78635C12.6998 8.99113 13.8401 8.68498 14.9242 8.57537Z",
                      fill: "currentColor",
                    }),
                  ],
                }),
              }),
            },
          ],
        },
        examplesSection: {
          title: "What you can build with Edge Functions",
          cta: {
            label: "View all examples",
            href: "/docs/guides/functions#examples",
            type: "default",
          },
          examples: p.Z.filter((e) => e.products.includes(c.$7.FUNCTIONS)),
        },
        localDXsection: {
          title: (0, s.jsx)(s.Fragment, {
            children: "Delightful DX from local to production",
          }),
          paragraph: (0, s.jsxs)(s.Fragment, {
            children: [
              "Edge Functions are developed using",
              " ",
              (0, s.jsx)(n(), {
                href: "https://deno.com/",
                className:
                  "underline hover:text-foreground-light transition-colors",
                target: "_blank",
                children: "Deno",
              }),
              ", an open source JavaScript runtime that ensures maximum power and flexibility. Migrate in and out at any time with no vendor lock-in.",
            ],
          }),
          cards: [
            {
              id: "localDX",
              label: "First-class local dev experience",
              paragraph:
                "Write code with hot code reloading, a fast Language server for autocompletion, type checking and linting",
              className: "",
              image: (0, s.jsx)(b, {}),
            },
            {
              id: "parity",
              label: "Dev and Prod parity",
              paragraph: (0, s.jsxs)(s.Fragment, {
                children: [
                  "The open source",
                  " ",
                  (0, s.jsx)(n(), {
                    href: "https://github.com/supabase/edge-runtime/",
                    className:
                      "underline hover:text-foreground-light transition-colors",
                    children: "Edge runtime",
                  }),
                  " ",
                  "runs your functions locally during development and the same runtime powers functions in production",
                ],
              }),
              className: "",
              image: (0, s.jsx)(x, {}),
            },
            {
              id: "ecosystem",
              label: "Use any NPM module",
              paragraph:
                "Tap into the 2+ million modules in the Deno and NPM ecosystem",
              className: "",
              image: (0, s.jsx)(v, {}),
            },
            {
              id: "ci",
              label: "Continuous Integration",
              paragraph: (0, s.jsxs)(s.Fragment, {
                children: [
                  "Use the",
                  " ",
                  (0, s.jsx)(n(), {
                    href: "https://supabase.com/docs/guides/functions/cicd-workflow",
                    className:
                      "underline hover:text-foreground-light transition-colors",
                    children: "Supabase CLI with Github actions",
                  }),
                  " ",
                  "to preview and deploy your functions along with the rest of your application",
                ],
              }),
              className: "",
              image: (0, s.jsx)(f, {}),
            },
          ],
        },
        globalPresenceSection: {
          title: (0, s.jsxs)(s.Fragment, {
            children: [
              "Edge Functions run",
              " ",
              (0, s.jsx)("span", {
                className: "text-foreground",
                children: "server-side logic geographically close to users",
              }),
              ", offering low latency and great performance.",
            ],
          }),
          features: [
            {
              label: "Global presence",
              paragraph: (0, s.jsxs)(s.Fragment, {
                children: [
                  "Edge functions run globally or can be",
                  " ",
                  (0, s.jsx)(n(), {
                    href: "https://supabase.com/docs/guides/functions/regional-invocation",
                    className:
                      "underline hover:text-foreground-light transition-colors",
                    children: "pinned to your database's proximity",
                  }),
                ],
              }),
            },
            {
              label: "Automatic scaling",
              paragraph:
                "Seamlessly scale with usage without any manual tuning",
            },
            {
              label: "Secure",
              paragraph:
                "Scale with confidence with SSL, Firewall and DDOS protection built in",
            },
          ],
        },
        o11y: {
          title: "Built-in observability",
          panels: [
            {
              id: "realtime-logs",
              label: "Realtime logs",
              icon: "",
              paragraph:
                "Stream logs to the dashboard in realtime. Logs are populated with rich metadata to help debugging",
              image: h,
            },
            {
              id: "log-explorer",
              label: "Query Logs via Log explorer",
              icon: "",
              paragraph:
                "Get deeper insights into how your functions are behaving by writing SQL queries on function logs",
              image: g,
            },
            {
              id: "metrics",
              label: "Metrics",
              icon: "",
              paragraph:
                "Dashboards show the health of your functions at all times",
              image: m,
            },
          ],
        },
        integratesWithSupabase: {
          title: "Integrates seamlessly with the Supabase ecosystem",
          useCases: [
            {
              label: "Zero configuration",
              paragraph:
                "Pre-populated environment variables required to access your supabase project",
              panel: (0, s.jsx)(C, {}),
            },
            {
              label: "Connect to your database",
              paragraph:
                "Connect to your Postgres database from an Edge Function by using the supabase-js client",
              panel: (0, s.jsx)(j, {}),
            },
            {
              label: "Trigger via webhook",
              paragraph:
                "Database Webhooks allow you to send real-time data from your database to another system whenever a table event occurs",
              panel: (0, s.jsx)(y, {}),
            },
            {
              label: "Works with Supabase Auth",
              paragraph: (0, s.jsxs)(s.Fragment, {
                children: [
                  "Edge Functions are designed to work seamlessly with",
                  " ",
                  (0, s.jsx)(n(), {
                    href: "https://supabase.com/docs/guides/functions/auth",
                    className:
                      "underline hover:text-foreground-light transition-colors",
                    children: "Supabase Auth",
                  }),
                ],
              }),
              panel: (0, s.jsx)(w, {}),
            },
            {
              label: "Works with Supabase Storage",
              paragraph: (0, s.jsxs)(s.Fragment, {
                children: [
                  "Edge Functions are designed to work seamlessly with",
                  " ",
                  (0, s.jsx)(n(), {
                    href: "https://supabase.com/docs/guides/functions/storage-caching",
                    className:
                      "underline hover:text-foreground-light transition-colors",
                    children: "Supabase Storage",
                  }),
                ],
              }),
              panel: (0, s.jsx)(_, {}),
            },
          ],
        },
      });
    },
    92217: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return w;
          },
        });
      var s = a(52322);
      a(2784);
      var r = a(25237),
        o = a.n(r),
        i = a(5632),
        l = a(55351),
        n = a(30175),
        c = a(82577),
        p = a(38508),
        u = a(27478),
        d = a(37637),
        h = a(63452);
      let m = (e) => {
        let { highlight: t } = e,
          a = t.image;
        return (0, s.jsxs)("div", {
          className: "flex flex-col",
          children: [
            (0, s.jsxs)("div", {
              className: "relative w-full mb-4",
              children: [t.image && (0, s.jsx)(a, {}), t.svg && t.svg],
            }),
            (0, s.jsxs)("div", {
              className: "flex flex-col gap-2",
              children: [
                (0, s.jsx)("h3", {
                  className: "text-lg text-foreground",
                  children: t.title,
                }),
                (0, s.jsx)("p", {
                  className: "text-foreground-lighter",
                  children: t.paragraph,
                }),
              ],
            }),
          ],
        });
      };
      var g = (e) => {
          let { highlights: t } = e;
          return (0, s.jsx)("div", {
            className:
              "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 xl:gap-32",
            children: t.map((e, t) => (0, s.jsx)(m, { highlight: e }, e.title)),
          });
        },
        b = a(14528);
      let x = o()(
          () =>
            Promise.all([
              a.e(1070),
              a.e(1401),
              a.e(4852),
              a.e(1553),
              a.e(9346),
            ]).then(a.bind(a, 31381)),
          { loadableGenerated: { webpack: () => [31381] } }
        ),
        v = o()(() => a.e(7813).then(a.bind(a, 27813)), {
          loadableGenerated: { webpack: () => [27813] },
        }),
        f = o()(
          () => Promise.all([a.e(5970), a.e(7369)]).then(a.bind(a, 17369)),
          { loadableGenerated: { webpack: () => [17369] } }
        ),
        C = o()(() => a.e(3921).then(a.bind(a, 73921)), {
          loadableGenerated: { webpack: () => [73921] },
        }),
        j = o()(
          () =>
            Promise.all([a.e(1070), a.e(1401), a.e(5783)]).then(
              a.bind(a, 55783)
            ),
          { loadableGenerated: { webpack: () => [55783] } }
        ),
        y = o()(
          () =>
            Promise.all([a.e(1070), a.e(1401), a.e(6431)]).then(
              a.bind(a, 46431)
            ),
          { loadableGenerated: { webpack: () => [46431] } }
        );
      var w = function () {
        let { basePath: e } = (0, i.useRouter)(),
          t = (0, n.Gc)(640),
          a = (0, p.Z)(t);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(l.PB, {
              title: a.metaTitle,
              description: a.metaDescription,
              openGraph: {
                title: a.metaTitle,
                description: a.metaDescription,
                url: "https://supabase.com/edge-functions",
                images: [
                  {
                    url: "https://supabase.com".concat(
                      e,
                      "/images/product/functions/functions-og.jpg"
                    ),
                  },
                ],
              },
            }),
            (0, s.jsxs)(u.default, {
              children: [
                (0, s.jsx)(b.Z, { activePage: c.$7.FUNCTIONS }),
                (0, s.jsx)(h.Z, {
                  ...a.heroSection,
                  footer: (0, s.jsx)(g, {
                    highlights: a.highlightsSection.highlights,
                  }),
                }),
                (0, s.jsx)("div", {
                  className: "overflow-hidden",
                  children: (0, s.jsx)(d.default, {
                    className: "flex flex-col gap-4 lg:gap-8 !pb-0",
                    id: "examples",
                    children: (0, s.jsx)(x, { ...a.examplesSection }),
                  }),
                }),
                (0, s.jsxs)(d.default, {
                  className: "flex flex-col gap-4",
                  id: "developer-experience",
                  children: [
                    (0, s.jsxs)("div", {
                      children: [
                        (0, s.jsx)("h2", {
                          className: "h2",
                          children: a.localDXsection.title,
                        }),
                        (0, s.jsx)("p", {
                          className: "text-foreground-lighter lg:w-1/2",
                          children: a.localDXsection.paragraph,
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className: "mt-4 md:mt-8",
                      children: (0, s.jsx)(f, {}),
                    }),
                  ],
                }),
                (0, s.jsx)(d.default, {
                  className: "flex flex-col gap-4 lg:gap-8",
                  id: "global-presence",
                  children: (0, s.jsx)(v, { ...a.globalPresenceSection }),
                }),
                (0, s.jsx)("div", {
                  className: "overflow-hidden",
                  children: (0, s.jsxs)(d.default, {
                    className: "flex flex-col gap-4 lg:gap-8",
                    id: "observability",
                    children: [
                      (0, s.jsx)("h2", {
                        className: "h2",
                        children: a.o11y.title,
                      }),
                      (0, s.jsx)(j, { ...a.o11y }),
                    ],
                  }),
                }),
                (0, s.jsx)("div", {
                  className: "overflow-hidden",
                  children: (0, s.jsxs)(d.default, {
                    className: "flex flex-col gap-4 lg:gap-8",
                    id: "integrates-with-supabase",
                    children: [
                      (0, s.jsx)("h2", {
                        className: "h2",
                        children: a.integratesWithSupabase.title,
                      }),
                      (0, s.jsx)(y, {
                        tabs: a.integratesWithSupabase.useCases,
                      }),
                    ],
                  }),
                }),
                (0, s.jsx)(C, {
                  currentProduct: c.ZF.FUNCTIONS,
                  className: "!pt-0 lg:!pt-16",
                }),
              ],
            }),
          ],
        });
      };
    },
    74714: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return s;
        },
      });
      let s = (0, a(55132).Z)("Globe", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        [
          "path",
          {
            d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
            key: "13o1zl",
          },
        ],
        ["path", { d: "M2 12h20", key: "9i4pu4" }],
      ]);
    },
  },
  function (e) {
    e.O(
      0,
      [5126, 2787, 2251, 4697, 977, 7478, 6999, 2888, 9774, 179],
      function () {
        return e((e.s = 14172));
      }
    ),
      (_N_E = e.O());
  },
]);
