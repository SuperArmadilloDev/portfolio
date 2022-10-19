<template>
  <div class="">
    <div class="md:ml-auto inset-0 h-20 md:min-h-screen fixed md:w-20">
      <button
        class="btn border border-white capitalize"
        @click="changeMode"
      >
        {{ btnLabel }}
      </button>
      <br />
      <NuxtLink to="/styleRef"> Styles </NuxtLink>
      <br />
      <NuxtLink to="/"> Home </NuxtLink>
    </div>
    <div
      class="bg-orange-500 w-fill min-h-screen dark:bg-dark-grey-50 md:pr-20"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  setup() {
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
  head() {
    return {};
  },
  computed: {
    btnLabel() {
      return this.$colorMode.preference === 'light' ? 'dark' : 'light';
    },
  },

  beforeMount() {
    this.$colorMode.preference = 'system';
  },

  methods: {
    changeMode() {
      this.$colorMode.preference =
        this.$colorMode.preference === 'light' ? 'dark' : 'light';
    },
  },
};
</script>

<style lang="scss" scoped></style>
