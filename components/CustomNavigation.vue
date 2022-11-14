<template>
  <nav
    style="z-index: 1"
    class="h-12 grid-cols-4 grid place-items-center sticky top-0 w-fill border-solid border-b dark:border-card-theme-1 mb-8 dark:bg-background-theme-0"
  >
    <NavButtons
      v-for="item in hashLinks"
      :key="item.ref"
      ref="navigation"
      :hash-name="item.ref"
      :current-section="currentSection"
    >
      {{ $t(`navText.${item.name}`) }}
    </NavButtons>
  </nav>
</template>

<script lang="ts" setup>
export interface Props {
  hashLinks?: Links[];
  currentSection: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  hashLinks: undefined,
});
</script>

<style lang="scss" scoped></style>
