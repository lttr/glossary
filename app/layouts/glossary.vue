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

              <UContentNavigation 
                :navigation="filteredNavigation" 
                highlight 
                :default-open="true"
                class="[&>ul>li:first-child>a]:text-lg [&>ul>li:first-child>a]:font-bold"
              />
              <!-- 
                Navigation configuration:
                - :navigation uses filtered data to show only current section
                - highlight enables active link highlighting
                - :default-open keeps navigation expanded by default
                - class attempts to style first item (category) with larger, bold text
              -->
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

// Filter navigation to show only the current section instead of all sections
// This improves focus by displaying only relevant navigation items for the current category
const filteredNavigation = computed(() => {
  if (!navigation?.value || !route.params.category) return []
  
  // Find the section matching the current route category (e.g., 'ai', 'web-performance')
  const currentSection = navigation.value.find(
    item => item.stem === route.params.category
  )
  
  if (!currentSection || !currentSection.children) return []
  
  // Create a flattened navigation structure to avoid collapsible behavior
  // Instead of showing the category as a collapsible parent with children,
  // we create separate navigation items to prevent the collapse/expand toggle
  const categoryLink = {
    title: currentSection.title,
    to: `/${route.params.category}`, // Navigate to category overview page
    stem: currentSection.stem,
    children: [], // Empty children array prevents collapsible behavior
    class: 'text-lg font-bold' // Styling attempt for emphasis (may not apply due to component limitations)
  }
  
  // Return the category link first, followed by all individual term links
  // This keeps the navigation unpacked and makes the category clickable for navigation
  return [categoryLink, ...currentSection.children]
})
</script>
