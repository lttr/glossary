export default defineNuxtConfig({
  modules: [
    "@nuxt/ui-pro",
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/plausible",
    "@nuxtjs/seo",
    "@vueuse/nuxt",
  ],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  site: {
    url: "https://glossary.lttr.cz",
    name: "Glossary with technical jargon",
    description: "Website description",
    defaultLocale: "en",
    indexable: false,
  },
  content: {
    preview: {
      api: "https://api.nuxt.studio",
      gitInfo: {
        name: "glossary",
        owner: "lttr",
        url: "https://github.com/lttr/glossary",
      },
    },
  },
  experimental: {
    typedPages: true,
  },
  compatibilityDate: "2025-07-01",
  eslint: {
    config: {
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },
  plausible: {
    ignoredHostnames: ["localhost"],
    apiHost: "https://plausible.lttr.cz",
  },
})
