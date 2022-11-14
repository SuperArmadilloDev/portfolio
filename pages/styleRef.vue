<template>
  <div class="dark:text-white px-10 relative">
    <h1 class="text-7xl font-bold py-10">
      {{ $t('styleRef.title') }}
    </h1>
    <div class="pl-1 text-lg mb-8">
      {{ $t('styleRef.intro') }}
    </div>

    <H2Title>
      {{ $t('styleRef.colorPalette') }}
    </H2Title>

    <DisplayPalette />

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
    <div class="mb-8 flex gap-5">
      <CustomButton>
        {{ $t('styleRef.textButton') }}
      </CustomButton>
      <CustomButton
        has-icon
        :icon="'person'"
      >
        {{ $t('styleRef.textButtonIcon') }}
      </CustomButton>
      <CustomButton
        :custom-colors="'bg-button-theme-0 hover:bg-button-theme-1'"
      >
        {{ $t('styleRef.textButton') }}
      </CustomButton>
      <CustomButton
        has-icon
        :custom-colors="'bg-button-theme-0 hover:bg-button-theme-1'"
      >
        {{ $t('styleRef.textButtonIcon') }}
      </CustomButton>
      <!-- component -->
    </div>
    <H2Title>
      {{ $t('styleRef.navTitle') }}
    </H2Title>

    <CustomNavigation
      :hash-links="hashLinks"
      :current-section="activeEntry"
    />
    <H2Title>
      {{ $t('styleRef.cardTitle') }}
    </H2Title>
    <div class="flex flex-col gap-5">
      <section
        v-for="data in sectionList"
        :id="data.title"
        :key="data.title"
        ref="section"
      >
        <ExperienceCard
          :has-image="data.hasImage"
          :has-button="data.hasButton"
          :buttons="data.buttons"
          :image-url="data.image"
        >
          <template #cardTitle>
            {{ data.title }}
          </template>
          <template #cardContent>
            {{ data.content }}
          </template>
        </ExperienceCard>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
const observer = ref();
const section = ref();
const activeEntry = ref('');
onMounted(() => {
  createObserver();
  observeSections();
});

function createObserver() {
  const options = {
    threshold: [0.5],
  };
  observer.value = new IntersectionObserver((entries) => {
    const active = entries.filter((e) => e.isIntersecting);
    if (active.length) {
      activeEntry.value = active[0].target.attributes.id.value;
    }
  }, options);
}

function observeSections() {
  section.value.forEach((section) => {
    observer.value.observe(section);
  });
}

useHead({
  link: [
    // for mdn icons
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
    },
  ],
});

const hashLinks = [
  {
    ref: 'about',
    name: 'about',
  },
  {
    ref: 'formations',
    name: 'formations',
  },
  {
    ref: 'skills',
    name: 'skills',
  },
  {
    ref: 'experiences',
    name: 'experiences',
  },
];

const sectionList: CardContent[] = [
  {
    title: 'about',
    content: 'this is some text to test the text content section',
    hasImage: true,
    hasButton: false,
    image: 'https://picsum.photos/1000/500',
  },
  {
    title: 'formations',
    content:
      'Lorem ipsum dolor sit aLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. met, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. ',
    hasImage: false,
    hasButton: true,
    buttons: [
      { text: 'test button text', icon: 'person', hasIcon: true },
      { text: 'test button text', icon: 'person', hasIcon: true },
      { text: 'test button text', icon: 'person', hasIcon: true },
      { text: 'test button text', icon: 'person', hasIcon: true },
      { text: 'test button text', icon: 'person', hasIcon: true },
      { text: 'test button text', icon: 'person', hasIcon: true },
    ],
  },
  {
    title: 'skills',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. ',
    hasImage: true,
    image: 'https://picsum.photos/1000/500',
    hasButton: true,
    buttons: [
      { text: 'test button text', icon: 'person', hasIcon: true },
      { text: 'test button text', icon: 'person', hasIcon: true },
      { text: 'test button text', icon: 'person', hasIcon: true },
      { text: 'test button text', icon: 'person', hasIcon: true },
    ],
  },
  {
    title: 'experiences',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ipsum nec elit vulputate congue. Aliquam erat volutpat. Pellentesque sollicitudin lacus sed placerat tristique. Etiam ut aliquet nibh. Duis consectetur enim et nunc tincidunt tincidunt. Nulla non ex non dolor fringilla condimentum et a sem. Praesent quis lorem sed tortor laoreet venenatis a vel ex. Suspendisse vestibulum et nunc non malesuada. Aenean mi ex, pretium in rhoncus at, condimentum quis metus. Cras ac nunc orci. In hac habitasse platea dictumst. Phasellus ac metus a mi vulputate mattis. Fusce quis erat a turpis tincidunt lacinia. ',
    hasImage: false,
    hasButton: false,
  },
];
</script>
