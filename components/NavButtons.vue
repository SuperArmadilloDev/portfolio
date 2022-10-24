<template>
  <NuxtLink
    class="transition ease-in-out dark:hover:bg-card-theme-0 dark:focus:bg-card-theme-0 w-full h-full flex items-center justify-center"
    :class="{ 'dark:bg-background-theme-50': isInPart }"
    :href="`#${hashName}`"
  >
    <slot />
  </NuxtLink>
</template>

<script setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  isInPart: { type: Boolean, default: false },
  hashName: { type: String, default: 'nan' },
});
</script>

<style></style>
