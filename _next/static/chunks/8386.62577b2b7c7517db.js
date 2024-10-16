(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8386],
  {
    28482: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return b;
          },
        });
      var a = s(52322),
        r = s(29982),
        o = s(38880),
        p = s(44382),
        i = s(39097),
        n = s.n(i),
        u = s(37637),
        l = s(81553),
        c = s(72436);
      s(31395), s(2784);
      var h = s(5632),
        m = s(41401),
        d = s(59257),
        g = (e) => {
          let { examples: t, className: s } = e,
            { basePath: r } = (0, h.useRouter)();
          return (0, a.jsx)("div", {
            className: s,
            children: (0, a.jsx)(m.tq, {
              style: { zIndex: 0, marginRight: "1px" },
              initialSlide: 0,
              spaceBetween: 12,
              slidesPerView: 1.1,
              speed: 300,
              watchOverflow: !0,
              threshold: 2,
              updateOnWindowResize: !0,
              className: "!px-6 w-full overflow-visible",
              breakpoints: {
                320: { slidesPerView: 1.1 },
                540: { slidesPerView: 1.6 },
                720: { slidesPerView: 2.5 },
              },
              children: t.map((e, t) =>
                (0, a.jsx)(
                  m.o5,
                  { children: (0, a.jsx)(l.Z, { ...e, showProducts: !0 }) },
                  "".concat(d.Z, "-").concat(t)
                )
              ),
            }),
          });
        },
        b = () =>
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(u.default, {
                id: "examples",
                className: "xl:pt-32 !pb-0",
                children: (0, a.jsxs)("div", {
                  className: "text-center flex flex-col items-center",
                  children: [
                    (0, a.jsx)("h3", {
                      className: "h2",
                      children: "Start building in seconds",
                    }),
                    (0, a.jsx)("p", {
                      className: "p max-w-[300px] md:max-w-none",
                      children:
                        "Kickstart your next project with templates built by us and our community.",
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex justify-center gap-2 py-4",
                      children: [
                        (0, a.jsx)(r.z, {
                          asChild: !0,
                          type: "default",
                          size: "small",
                          className: "h-full",
                          children: (0, a.jsx)(n(), {
                            href: "/docs/guides/examples",
                            children: "View all examples",
                          }),
                        }),
                        (0, a.jsx)(r.z, {
                          asChild: !0,
                          type: "default",
                          icon: (0, a.jsx)(o.Z, {
                            size: "tiny",
                            className: "!w-full !h-full",
                          }),
                          size: "small",
                          children: (0, a.jsx)(n(), {
                            href: "https://github.com/supabase/supabase/tree/master/examples",
                            children: "Official GitHub library",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, a.jsxs)(u.default, {
                className:
                  "relative w-full !px-0 lg:!px-16 xl:!px-20 !pb-0 mb-16 md:mb-12 lg:mb-12 !pt-6 max-w-[1400px]",
                children: [
                  (0, a.jsx)(g, {
                    examples: c.Z.slice(0, 6),
                    className: "lg:hidden",
                  }),
                  (0, a.jsx)("div", {
                    className: "hidden lg:grid grid-cols-12 gap-5 mt-4",
                    children: c.Z.slice(0, 6).map((e, t) =>
                      (0, a.jsx)(
                        "div",
                        {
                          className: (0, p.cn)(
                            "col-span-12 h-full lg:col-span-6 xl:col-span-4",
                            "flex items-stretch"
                          ),
                          children: (0, a.jsx)(l.Z, { ...e, showProducts: !0 }),
                        },
                        t
                      )
                    ),
                  }),
                ],
              }),
            ],
          });
    },
    72436: function (e, t, s) {
      "use strict";
      var a = s(82577);
      let r = [
        {
          type: "example",
          tags: ["Next.js", "Stripe", "Vercel"],
          products: [a.$7.DATABASE, a.$7.AUTHENTICATION],
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
          products: [a.$7.DATABASE, a.$7.AUTHENTICATION],
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
          products: [a.$7.DATABASE, a.$7.AUTHENTICATION, a.$7.VECTOR],
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
          products: [a.$7.DATABASE, a.$7.VECTOR],
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
          products: [a.$7.DATABASE, a.$7.AUTHENTICATION, a.$7.STORAGE],
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
          products: [a.$7.DATABASE, a.$7.AUTHENTICATION],
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
          products: [a.$7.DATABASE],
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
          products: [a.$7.DATABASE],
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
          products: [a.$7.DATABASE, a.$7.AUTHENTICATION],
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
          products: [a.$7.DATABASE],
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
          products: [a.$7.DATABASE, a.$7.AUTHENTICATION],
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
          products: [a.$7.DATABASE],
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
          products: [a.$7.DATABASE],
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
          products: [a.$7.DATABASE],
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
          products: [a.$7.DATABASE],
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
          products: [a.$7.FUNCTIONS],
          title: "Sending Emails",
          description: "Send emails in Edge Functions with Resend.",
          repo_url:
            "https://supabase.com/docs/guides/functions/examples/send-emails",
        },
        {
          type: "example",
          tags: ["OpenAI"],
          products: [a.$7.FUNCTIONS],
          title: "Generating OpenAI GPT3 completions",
          description: "Using OpenAI in Edge Functions.",
          repo_url: "https://supabase.com/docs/guides/ai/examples/openai",
        },
        {
          type: "example",
          tags: ["Stripe"],
          products: [a.$7.FUNCTIONS],
          title: "Stripe Webhooks",
          description: "Handling signed Stripe Webhooks with Edge Functions.",
          repo_url:
            "https://supabase.com/docs/guides/functions/examples/stripe-webhooks",
        },
        {
          type: "example",
          tags: ["Postgres"],
          products: [a.$7.FUNCTIONS],
          title: "Connecting directly to Postgres",
          description: "Connecting to Postgres from Edge Functions.",
          repo_url:
            "https://supabase.com/docs/guides/functions/connect-to-postgres",
        },
        {
          type: "example",
          tags: ["Huggingface"],
          products: [a.$7.FUNCTIONS],
          title: "Huggingface Image Captioning",
          description:
            "Use the Hugging Face Inference API to make calls to 100,000+ Machine Learning models from Supabase Edge Functions.",
          repo_url: "https://supabase.com/docs/guides/functions/auth",
        },
        {
          type: "example",
          tags: ["Supabase"],
          products: [a.$7.FUNCTIONS],
          title: "Upload files to Storage",
          description: "Process multipart/form-data.",
          repo_url:
            "https://github.com/supabase/supabase/tree/master/examples/edge-functions/supabase/functions/file-upload-storage",
        },
      ];
      t.Z = r;
    },
    99: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return a;
        },
      });
      let a = (0, s(55132).Z)("ArrowUpRight", [
        ["path", { d: "M7 7h10v10", key: "1tivn9" }],
        ["path", { d: "M7 17 17 7", key: "1vkiza" }],
      ]);
    },
    31395: function () {},
  },
]);
