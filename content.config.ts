import { defineCollection, defineContentConfig, z } from "@nuxt/content"

const Term = z.object({
  slug: z.string(),
  title: z.string(),
  date: z.date(),
  tags: z.array(z.string()).optional(),
})

export default defineContentConfig({
  collections: {
    glossary: defineCollection({
      source: "**/*.md",
      type: "page",
      schema: Term,
    }),
  },
})
