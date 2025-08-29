<template>
  <NuxtLink :to external>
    <span class="hover:underline">{{ text }}</span>
    <Icon
      name="uil:external-link-alt"
      class="w-5 h-5 ms-1 relative top-[2px]"
    />
  </NuxtLink>
</template>

<script lang="ts" setup>
import { Icon } from "#components"

defineProps<{
  to: string
  text: string
}>()
</script>

<style scoped></style>
