<template>
  <div>
    <AppHeader />

    <UMain>
      <UContainer>
        <UPage>
          <template #left>
            <UPageAside>
              <template #top>
                <UContentSearchButton :collapsed="false" />
              </template>

              <UContentNavigation :navigation highlight :default-open="false" />
            </UPageAside>
          </template>

          <slot></slot>
        </UPage>
      </UContainer>
    </UMain>
  </div>
</template>

<script setup lang="ts">
import type { ContentNavigationItem } from "@nuxt/content"

const navigation = inject<Ref<ContentNavigationItem[]>>("navigation")
</script>
