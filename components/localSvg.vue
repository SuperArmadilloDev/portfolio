<template>
  <div class="dark:bg-white">
    <img class="w-6" :src="`assets/sprite/svg/${svgFile}.svg`" />
  </div>
</template>

<script setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  svgFile: { type: String, default: null },
});
</script>

<style lang="scss" scoped></style>
