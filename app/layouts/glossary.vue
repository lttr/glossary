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

              <UContentNavigation :navigation="filteredNavigation" highlight :default-open="true" />
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

const route = useRoute()
const navigation = inject<Ref<ContentNavigationItem[]>>("navigation")

// Filter navigation to show only the current section
const filteredNavigation = computed(() => {
  if (!navigation?.value || !route.params.category) return []
  
  const currentSection = navigation.value.find(
    item => item.stem === route.params.category
  )
  
  return currentSection ? [currentSection] : []
})
</script>
