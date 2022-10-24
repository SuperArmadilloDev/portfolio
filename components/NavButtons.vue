<template>
  <NuxtLink
    class="transition ease-in-out dark:hover:bg-dark-grey-100 dark:focus:bg-dark-grey-100 w-full h-full flex items-center justify-center"
    :class="{ 'dark:bg-dark-grey-100': isInPart }"
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
