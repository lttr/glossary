<template>
  <div>
    <AppHeader />

    <UMain>
      <UContainer>
        <UPage>
          <UError :error="error" />
        </UPage>
      </UContainer>
    </UMain>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app"

defineProps<{ error: NuxtError }>()

useHead({
  htmlAttrs: {
    lang: "en",
  },
})

useSeoMeta({
  title: "Page not found",
  description: "We are sorry but this page could not be found.",
})
</script>
