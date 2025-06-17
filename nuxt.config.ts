export default defineNuxtConfig({
  modules: [
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
  site: {
    url: "https://example.com",
    name: "Website name",
    description: "Website description",
    defaultLocale: "en",
    indexable: false,
  },
  future: {
    compatibilityVersion: 4,
  },
  experimental: {
    typedPages: true,
  },
  compatibilityDate: "2025-04-01",
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
  // Custom styles
  css: ["~/assets/css/main.css"],
})
