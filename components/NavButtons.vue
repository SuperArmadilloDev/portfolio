<template>
  <NuxtLink
    class="transition ease-in-out dark:hover:bg-card-theme-0 w-full h-full flex items-center justify-center"
    :class="{ 'dark:bg-card-theme-0': hashName === currentSection }"
    :href="`#${hashName}`"
  >
    <slot />
  </NuxtLink>
</template>

<script setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  currentSection: { type: String, default: '' },
  hashName: { type: String, default: 'nan' },
});
</script>

<style></style>
