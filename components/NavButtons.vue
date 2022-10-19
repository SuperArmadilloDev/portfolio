<template>
  <button
    class="transition
     ease-in-out 
     dark:hover:bg-dark-grey-100 
     dark:focus:bg-dark-grey-100"
    :class="{ 'dark:bg-dark-grey-100': isInPart }"
  >
    <slot />
  </button>
</template>

<script setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
    isInPart: { type: Boolean, default: false },
});
</script>

<style></style>
