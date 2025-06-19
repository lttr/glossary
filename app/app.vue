<template>
  <UApp :locale="en">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
import { en } from "@nuxt/ui-pro/locale"

const { data: navigation } = await useAsyncData("navigation", () =>
  queryCollectionNavigation("glossary"),
)
provide("navigation", navigation)
</script>
