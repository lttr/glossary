<template>
  <UPage>
    <UPageHeader :title />

    <UPageBody>
      <template v-if="page">
        <ContentRenderer v-if="page.body" :value="page" />
      </template>
      <template v-else>
        <div>Loading...</div>
      </template>
    </UPageBody>
  </UPage>
</template>

<script setup lang="ts">
import type { ContentNavigationItem } from "@nuxt/content"

definePageMeta({
  layout: "glossary",
})

const route = useRoute()

const navigation = inject<Ref<ContentNavigationItem[]>>("navigation")

const title = ref("")
if (!route.params.slug) {
  title.value =
    navigation?.value.find((item) => item.stem === route.params.category)
      ?.title ?? ""
}

const { data: page } = await useAsyncData(route.path, () =>
  queryCollection("glossary").where({}),
)

console.log(page.value)

if (!title.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  })
}

console.log("navigation", navigation?.value)

// const title = page.value.seo?.title || page.value.title
// const description = page.value.seo?.description || page.value.description
//
// useSeoMeta({
//   title,
//   ogTitle: title,
//   description,
//   ogDescription: description,
// })
//
// defineOgImageComponent("Saas")
</script>
