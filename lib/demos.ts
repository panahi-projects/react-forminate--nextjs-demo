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
    name: "Examples",
    items: [
      {
        name: "Compare React-Forminate vs Formik vs RHF",
        slug: "examples/compare-libs",
        description: "Create UI that is shared across routes",
      },
    ],
  },
];
