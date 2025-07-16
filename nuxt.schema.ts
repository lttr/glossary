import { field, group } from "@nuxt/content/preview"

export default defineNuxtSchema({
  appConfig: {
    ui: group({
      title: "UI",
      description: "UI configuration",
      icon: "i-ph-palette-fill",
      fields: {
        colors: group({
          title: "Colors",
          description: "Colors of your UI.",
          icon: "i-ph-palette",
          fields: {
            primary: field({
              type: "string",
              title: "Primary",
              description: "Primary color of your UI.",
              icon: "i-ph-palette",
              default: "mandarin",
              required: ["mandarin", "mint", "rose", "amber"],
            }),
            neutral: field({
              type: "string",
              title: "Neutral",
              description: "Neutral color of your UI.",
              icon: "i-ph-palette",
              default: "stone",
              required: ["stone", "slate", "gray"],
            }),
          },
        }),
      },
    }),
  },
})
