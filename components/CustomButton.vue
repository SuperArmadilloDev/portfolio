<template>
  <button
    ref="bt"
    class="bg-button-theme-3 hover:bg-grey font-bold py-2 px-4 rounded inline-flex items-center text-card-theme-0 button"
  >
    <span
      v-if="hasIcon"
      class="material-icons mr-2"
    >
      {{ icon }}
    </span>
    <span>
      <slot />
    </span>
  </button>
</template>

<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  hasIcon: { type: Boolean, default: false },
  icon: { type: String, default: 'mail' },
});
</script>

<style>
.button {
  position: relative;
  z-index: 0;
}

.button:after {
  content: '';
  position: absolute;
  border-radius: 0.25rem;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.5s;
  box-shadow: 0 0 5px 10px theme('colors.button-theme.1');
}

.button:active:after {
  box-shadow: 0 0 0 0 theme('colors.button-theme.1');
  position: absolute;
  border-radius: 0.25rem;
  left: 0;
  top: 0;
  opacity: 1;
  transition: 0s;
}

.button:active {
  top: 1px;
}
</style>
