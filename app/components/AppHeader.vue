<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <div class="flex items-center gap-1 text-2xl font-display">
          <span
            class="flex items-center bg-mandarin-600 text-white dark:text-[var(--ui-color-neutral-200)] rounded px-2 py-0"
          >
            <span class="translate-y-[5px]">G</span>
          </span>
          <span class="flex items-center translate-y-[5px]">lossary</span>
        </div>
      </NuxtLink>
    </template>

    <template #right>
      <UNavigationMenu
        :items="items"
        variant="pill"
        highlight
        class="font-display text-lg"
      >
        <template #item-label="{ item }">
          <span class="inline-flex text-lg px-3 translate-y-[5px]">{{
            item.label
          }}</span>
        </template>
      </UNavigationMenu>
    </template>
  </UHeader>
</template>

<script setup lang="ts">
const route = useRoute()

const items = computed(() => [
  {
    label: "AI",
    to: "/ai",
  },
  {
    label: "Web performance",
    to: "/web-performance",
  },
])
</script>
