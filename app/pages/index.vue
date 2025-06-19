<template>
  <UPage>
    <UPageHero
      title="Welcome to Glosssssary"
      description="A glossary full of wierd technical terms"
      :ui="{
        title: 'font-display',
        description: 'font-display',
      }"
    />
    <UPageGrid>
      <UPageCard v-for="(card, index) of cards" :key="index" v-bind="card" />
    </UPageGrid>
  </UPage>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "default",
})

const cards = [
  {
    title: "AI",
    icon: "uil:robot",
    to: "/ai",
  },
  {
    title: "Web performance",
    icon: "uil:monitor-heart-rate",
    to: "/web-performance",
  },
]
</script>

<style scoped></style>
