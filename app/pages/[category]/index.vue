<template>
  <UPage>
    <UPageHeader
      :title
      :ui="{
        title: 'font-display translate-y-[5px] text-[var(--ui-text)]',
      }"
    />

    <UPageBody>
      <UPageList>
        <UPageCard
          v-for="item of items"
          :key="item.id"
          :ui="{
            header: 'w-full',
          }"
        >
          <template #header>
            <div class="flex w-full items-center justify-between">
              <h2 class="text-2xl font-bold text-[var(--ui-text)]">
                {{ item.title }}
              </h2>
              <NuxtLink :to="item.path">
                <Icon name="uil:external-link-alt" class="w-5 h-5" />
              </NuxtLink>
            </div>
          </template>
          <template #body>
            <ContentRenderer
              v-if="item.body"
              :value="item.body"
              class="text-lg"
            />
          </template>
        </UPageCard>
      </UPageList>
    </UPageBody>
  </UPage>
</template>

<script setup lang="ts">
import type {
  ContentNavigationItem,
  GlossaryCollectionItem,
} from "@nuxt/content"

definePageMeta({
  layout: "glossary",
})

const route = useRoute("category")

const navigation = inject<Ref<ContentNavigationItem[]>>("navigation")

const title = computed(() => {
  const titleFromNavigation = navigation?.value.find(
    (item) => item.stem === route.params.category,
  )?.title
  if (titleFromNavigation) {
    return titleFromNavigation.length < 3
      ? titleFromNavigation.toUpperCase()
      : titleFromNavigation
  }
  return ""
})

const items = ref<GlossaryCollectionItem[] | undefined>()

if (route.params.category) {
  const { data } = await useAsyncData(route.path, () =>
    queryCollection("glossary")
      .where("path", "LIKE", `/${route.params.category}%`)
      .all(),
  )
  items.value = data.value
}

if (!title.value || !route.params.category) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  })
}

useSeoMeta({
  title,
  ogTitle: title,
})
</script>
