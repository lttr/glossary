import { defineCollection, defineContentConfig, z } from "@nuxt/content"

export default defineContentConfig({
  collections: {
    glossary: defineCollection({
      source: "**/*.md",
      type: "page",
      schema: z.object({
        slug: z.string(),
        title: z.string(),
        date: z.date(),
        tags: z.array(z.string()).optional(),
      }),
    }),
  },
})
