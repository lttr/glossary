import { field, group } from "@nuxt/content/preview"

export default defineNuxtSchema({
  appConfig: {
    ui: group({
      title: "UI",
      description: "UI Customization.",
      icon: "i-mdi-palette-outline",
      fields: {
        colors: group({
          title: "Colors",
          description: "Manage main colors of your application",
          icon: "i-mdi-palette-outline",
          fields: {
            primary: field({
              type: "string",
              title: "Primary",
              description: "Primary color of your UI.",
              icon: "i-mdi-palette-outline",
              default: "mandarin",
              required: [
                "mandarin",
                "red",
                "orange",
                "amber",
                "yellow",
                "lime",
                "green",
                "emerald",
                "teal",
                "cyan",
                "sky",
                "blue",
                "indigo",
                "violet",
                "purple",
                "fuchsia",
                "pink",
                "rose",
              ],
            }),
            neutral: field({
              type: "string",
              title: "Neutral",
              description: "Neutral color of your UI.",
              icon: "i-mdi-palette-outline",
              default: "slate",
              required: ["slate", "gray", "zinc", "neutral", "stone"],
            }),
          },
        }),
      },
    }),
  },
})
