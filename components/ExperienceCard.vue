<template>
  <div
    id="about"
    class="dark:bg-card-theme-0 rounded-md border border-card-theme-1 py-5 px-10"
  >
    <div :class="hasImage ? 'grid grid-cols-2 gap-10' : ''">
      <div class="flex flex-col gap-5">
        <div class="">
          <CardTitle>
            <slot name="cardTitle" />
          </CardTitle>
          <slot name="cardContent" />
        </div>
        <div
          v-if="hasButton"
          class="flex gap-2"
        >
          <CustomButton
            v-for="button in buttons"
            :key="button.text"
            :has-icon="button.hasIcon"
            :icon="button.icon"
          >
            {{ $t(`${button.text}`) }}
          </CustomButton>
        </div>
      </div>
      <div
        v-if="hasImage"
        class="w-full flex justify-end"
      >
        <img
          class="inset-y-0 right-0 rounded-lg"
          :src="imageUrl"
          alt="a card Image"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
export interface Props {
  hasButton: boolean;
  hasImage: boolean;
  imageUrl: string;
  buttons?: CompButtons[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  hasButton: false,
  hasImage: false,
  imageUrl: '',
  buttons: () => [
    {
      text: 'placeholder',
      icon: undefined,
      hasIcon: false,
    },
  ],
});
</script>

<style lang="scss" scoped></style>
