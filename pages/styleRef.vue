<template>
  <div class="dark:text-white pl-10">
    <h1 class="text-7xl font-bold py-10">
      {{ $t('styleRef.title') }}
    </h1>
    <div class="pl-1 text-lg">
      {{ $t('styleRef.intro') }}
    </div>

    <h2 class="text-6xl font-bold py-9">
      {{ $t('styleRef.iconsTitle') }}
    </h2>
    <div class="flex gap-5">
      <span class="material-icons">light_mode</span>
      <span class="material-icons"> dark_mode </span>
      <span class="material-icons"> home </span>
      <LocalSvg :svg-file="'linkedin'" />
      <LocalSvg :svg-file="'github'" />
      <LocalSvg :svg-file="'gitlab'" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  head() {
    return {
      link: [
        // Add this
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        },
      ],
    };
  },
};
</script>

<style scoped></style>
