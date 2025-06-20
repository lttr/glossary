<template>
  <UPage v-if="term">
    <UPageHeader
      :title="term.title"
      :ui="{
        title: 'font-display translate-y-[5px] text-[var(--ui-text)]',
      }"
    />

    <UPageBody>
      <UPageBody>
        <ContentRenderer :value="term.body" class="text-lg" />
      </UPageBody>
    </UPageBody>
  </UPage>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "glossary",
})

const route = useRoute("category-slug")

const { data: term } = await useAsyncData(route.path, () =>
  queryCollection("glossary").path(route.path).first(),
)

if (!term) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  })
}

// const title = page.value.seo?.title || page.value.title
// const description = page.value.seo?.description || page.value.description
//
// useSeoMeta({
//   title,
//   ogTitle: title,
//   description,
//   ogDescription: description,
// })
</script>
