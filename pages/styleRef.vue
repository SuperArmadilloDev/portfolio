<template>
  <div class="dark:text-white px-10 relative">
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
      class="h-12 grid-cols-4 grid place-items-center sticky top-2 w-fill border-solid border-b-2 dark:border-dark-grey-100 mb-8"
    >
      <NavButtons :hash-name="'about'">
        {{ $t('navText.about') }}
      </NavButtons>
      <NavButtons :hash-name="'formations'">
        {{ $t('navText.formations') }}
      </NavButtons>
      <NavButtons :hash-name="'skills'">
        {{ $t('navText.skills') }}
      </NavButtons>
      <NavButtons :hash-name="'experiences'">
        {{ $t('navText.experiences') }}
      </NavButtons>
    </div>
    <H2Title>
      {{ $t('styleRef.cardTitle') }}
    </H2Title>
    <div
      id="about"
      class="dark:bg-dark-grey-100 px-10 py-5"
    >
      ABOUTE
    </div>
    <div id="formations">ABOUTE</div>
    <div id="skills">ABOUTE</div>
    <div id="experiences">ABOUTE</div>
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

<style lang="scss" scoped>
/* divide-x */
</style>
<style>
.scr {
  overflow-y: scroll;
  scroll-behavior: smooth;
}
</style>
