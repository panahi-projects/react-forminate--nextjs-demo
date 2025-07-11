export type Item = {
  name: string;
  slug: string;
  description?: string;
  requirements?: {
    prefetch?: boolean;
  };
};

export const demos: { name: string; items: Item[] }[] = [
  {
    name: "Introduction",
    items: [
      {
        name: "What is React Forminate?",
        slug: "layouts",
        description: "Create UI that is shared across routes",
      },
      {
        name: "Why Use React Forminate?",
        slug: "route-groups",
        description: "Organize routes without affecting URL paths",
      },
      {
        name: "Features Overview",
        slug: "parallel-routes",
        description: "Render multiple pages in the same layout",
      },
    ],
  },
  {
    name: "Getting Started",
    items: [
      {
        name: "Installation",
        slug: "loading",
        description:
          "Create meaningful Loading UI for specific parts of an app",
      },
      {
        name: "Basic Usage",
        slug: "error-handling",
        description: "Create Error UI for specific parts of an app",
      },
      {
        name: "Playground / Live Demo",
        slug: "not-found",
        description: "Create Not Found UI for specific parts of an app",
      },
    ],
  },
  {
    name: "Core Concepts",
    items: [
      {
        name: "JSON Schema Format",
        slug: "JSON-schema-format",
        description: "Create inline visual feedback for link interactions",
      },
      {
        name: "FormProvider & useForm",
        slug: "use-link-status1",
        description: "Create inline visual feedback for link interactions",
      },
      {
        name: "Field Components",
        slug: "use-link-status2",
        description: "Create inline visual feedback for link interactions",
      },
      {
        name: "Validation System",
        slug: "use-link-status3",
        description: "Create inline visual feedback for link interactions",
      },
    ],
  },
  {
    name: "Built-in Fields",
    items: [
      {
        name: "Streaming with Suspense",
        slug: "streaming",
        description:
          "Streaming data fetching from the server with React Suspense",
      },
      {
        name: "Static Data",
        slug: "ssg",
        description: "Generate static pages",
      },
      {
        name: "Dynamic Data",
        slug: "ssr",
        description: "Server-render pages",
      },
      {
        name: "Incremental Static Regeneration",
        slug: "isr",
        description: "Get the best of both worlds between static & dynamic",
      },
    ],
  },
  {
    name: "Advanced Features",
    items: [
      {
        name: "Client Context",
        slug: "context",
        description:
          "Pass context between Client Components that cross Server/Client Component boundary",
      },
    ],
  },
  {
    name: "Customization",
    items: [
      {
        name: "Patterns",
        slug: "patterns",
        description: "A collection of useful App Router patterns",
      },
      {
        name: "Client Component Hooks",
        slug: "hooks",
        description: "Preview the routing hooks available in Client Components",
      },
      {
        name: "CSS and CSS-in-JS",
        slug: "styling",
        description: "Preview the supported styling solutions",
      },
    ],
  },
  {
    name: "TypeScript Support",
    items: [
      {
        name: "Patterns",
        slug: "patterns",
        description: "A collection of useful App Router patterns",
      },
      {
        name: "Client Component Hooks",
        slug: "hooks",
        description: "Preview the routing hooks available in Client Components",
      },
      {
        name: "CSS and CSS-in-JS",
        slug: "styling",
        description: "Preview the supported styling solutions",
      },
    ],
  },
  {
    name: "Deployment",
    items: [
      {
        name: "Patterns",
        slug: "patterns",
        description: "A collection of useful App Router patterns",
      },
      {
        name: "Client Component Hooks",
        slug: "hooks",
        description: "Preview the routing hooks available in Client Components",
      },
      {
        name: "CSS and CSS-in-JS",
        slug: "styling",
        description: "Preview the supported styling solutions",
      },
    ],
  },
];
