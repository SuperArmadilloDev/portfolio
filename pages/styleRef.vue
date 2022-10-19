<template>
  <div class="dark:text-white px-10">
    <h1 class="text-7xl font-bold py-10">
      {{ $t('styleRef.title') }}
    </h1>
    <div class="pl-1 text-lg mb-8">
      {{ $t('styleRef.intro') }}
    </div>

    <H2Title>
      {{ $t('styleRef.iconsTitle') }}
    </H2Title>
    <div class="flex gap-5 mb-8">
      <span class="material-icons">light_mode</span>
      <span class="material-icons"> dark_mode </span>
      <span class="material-icons"> home </span>
      <span class="material-icons"> send </span>
      <LocalSvg :svg-file="'linkedin'" />
      <LocalSvg :svg-file="'github'" />
      <LocalSvg :svg-file="'gitlab'" />
    </div>
    <div class="mb-8">
      <button
        class="bg-dark-brown-50 hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center text-black"
      >
        <span class="material-icons mr-2"> mail </span>
        <span>
          {{ $t('styleRef.textButtonIcon') }}
        </span>
      </button>
      <!-- component -->
    </div>
    <H2Title>
      {{ $t('styleRef.navTitle') }}
    </H2Title>
    <div
      class="h-12 grid-cols-4 grid text-center sticky top-10 w-fill border-solid border-b-2 dark:border-dark-grey-100 mb-8"
    >
      <NavButtons>{{ $t('navText.about') }}</NavButtons>
      <NavButtons>{{ $t('navText.formations') }}</NavButtons>
      <NavButtons>{{ $t('navText.skills') }}</NavButtons>
      <NavButtons>{{ $t('navText.experiences') }}</NavButtons>
    </div>
  </div>
  <div
    id="stars"
    class="z-0"
  />
  <div
    id="stars2"
    class="z-0"
  />
  <div
    id="stars3"
    class="z-0"
  />
  <div
    v-for="n in 10"
    key="n"
    class="h-96"
  />
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

<style lang="scss" scoped>
/* divide-x */
</style>
<style lang="sass">
/* divide-x */
// .theme-light
//   --star-color: #00ff88
//   background-color: #e61010

// .light
//   --star-color: #00ff88
//   background-color: #e61010

// .light-mode
//   --star-color: #00ff88
//   background-color: #e61010

// .dark-mode
//   background-color: #e61010
//   --star-color: #000
//   color: green
</style>
