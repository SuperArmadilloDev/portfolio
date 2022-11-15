<template>
  <div
    id="about"
    class="dark:bg-card-theme-0 rounded-md border border-card-theme-1 py-5 px-10"
  >
    <div :class="images ? 'grid grid-cols-2 gap-10 items-center' : ''">
      <div class="flex flex-col gap-5 h-full">
        <div class="whitespace-pre-line">
          <CardTitle>
            <slot name="post" />
          </CardTitle>
          <div class="flex flex-col">
            <div class="text-lg font-bold">
              <slot name="company" />
            </div>
            <div class="date-gap">
              <slot name="date" />
            </div>
            <div class="date-gap">
              <slot name="place" />
            </div>
          </div>
          <div class="flex flex-col mt-5">
            <div>
              <b>{{ $t('experienceCard.tech') }}:</b> <slot name="technology" />
            </div>
            <div class="mt-5">
              <ul class="flex flex-col gap-1">
                <li
                  v-for="text in description"
                  :key="text"
                >
                  {{ $t(text) }}
                </li>
              </ul>
              <!-- <slot name="description" /> -->
            </div>
          </div>
        </div>
        <div
          v-if="buttons"
          class="flex gap-2"
        >
          <CustomButton
            v-for="button in buttons"
            :key="button.text"
            :icon="button.icon"
          >
            {{ $t(`${button.text}`) }}
          </CustomButton>
        </div>
      </div>
      <div v-if="images">
        <carousel
          :settings="settings"
          class="h-fit"
        >
          <slide
            v-for="image in images"
            :key="image.alt"
            class="rounded-lg"
          >
            <img
              class="inset-y-0 right-0 rounded-lg"
              :src="image.url"
              :alt="image.alt"
            />
          </slide>

          <template #addons>
            <div v-if="images.length > 1">
              <Navigation />
              <Pagination />
            </div>
          </template>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export interface Props {
  images?: CompImage[];
  buttons?: CompButtons[];
  description: string[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  buttons: () => undefined,
  images: () => undefined,
});

useHead({
  link: [
    // for mdn icons
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
    },
  ],
});

onMounted(() => {
  if (props.images)
    if (props.images.length === 1)
      settings.value = {
        itemsToShow: 1,
        snapAlign: 'center',
        mouseDrag: false,
        touchDrag: false,
      };
    else
      settings.value = {
        itemsToShow: 1,
        snapAlign: 'center',
        wrapAround: true,
        autoplay: 10000,
        pauseAutoplayOnHover: true,
      };
});

const settings = ref({});
</script>

<style lang="scss">
.date-gap {
  margin-top: -5px;
}

.carousel__prev,
.carousel__next {
  margin: 0;
  padding: 7px 5px;
  background-color: rgba($color: #ffffff, $alpha: 0.5);
}

.carousel__prev {
  border-radius: 0 10% 10% 0;
}

.carousel__next {
  border-radius: 10% 0% 0% 10%;
}
</style>
