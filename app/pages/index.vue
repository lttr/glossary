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
    <UContainer class="py-8">
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center max-w-2xl mx-auto"
      >
        <UPageCard v-for="(card, index) of cards" :key="index" v-bind="card" />
      </div>
    </UContainer>
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
