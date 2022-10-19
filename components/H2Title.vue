<template>
  <h2 class="text-6xl font-bold py-9 uppercase">
    <slot />
  </h2>
</template>

<script setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  content: { type: String, default: null },
});
</script>
