<template>
  <div
    style="z-index: 1"
    class="h-12 grid-cols-4 grid place-items-center sticky top-0 w-fill border-solid border-b dark:border-card-theme-1 mb-8 dark:bg-background-theme-0"
  >
    <NavButtons
      v-for="item in hashLinks"
      :key="item.ref"
      ref="navigation"
      :hash-name="item.ref"
    >
      {{ $t(`navText.${item.name}`) }}
    </NavButtons>
  </div>
</template>

<script lang="ts" setup>
export interface Props {
  hashLinks?: Links[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  hashLinks: undefined,
});

const emit = defineEmits<{
  (e: 'navRefs', val: unknown): void;
}>();

// const emit = defineEmits(['navRefs']);
// const navigation = ref(null);
// async onMounted(() => {})
// async onMounted(() => {
//   await nextTick();
//   console.log(navigation);
//   emit('navRefs', navigation);
// });

// emit('navRefs', this.$refs);
</script>

<style lang="scss" scoped></style>
