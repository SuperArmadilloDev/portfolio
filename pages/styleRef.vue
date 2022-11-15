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
          :buttons="data.buttons"
          :images="data.images"
          :description="data.content.description"
        >
          <template #post>
            {{ $t(data.title) }}
          </template>
          <template #company>
            {{ $t(data.content.company) }}
          </template>
          <template #date>
            {{ $t(data.content.date) }}
          </template>
          <template #place>
            {{ $t(data.content.place) }}
          </template>
          <template #technology>
            {{ $t(data.content.tech) }}
          </template>
        </ExperienceCard>
      </section>
    </div>
    <H2Title>
      {{ $t('styleRef.sectionStyleTitle') }}
    </H2Title>
    <div class="border-t-2 border-card-theme-1 mb-10">
      <H2Title> Sec 1 </H2Title>
      <div class="grid grid-cols-4">
        <div class="col-span-3">Bla bla bla...</div>
        <div class="grid justify-center">
          <img
            class="inset-y-0 right-0 rounded-full"
            src="https://picsum.photos/200"
            alt="picum"
          />
          <p class="text-center">image!</p>
        </div>
      </div>
    </div>
    <div class="border-t-2 border-card-theme-1">
      <H2Title> Sec 2 </H2Title>
      <p>Bla bla bla...</p>
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
    title: 'styleRef.experienceCard.title',
    content: {
      company: 'styleRef.experienceCard.company',
      date: 'styleRef.experienceCard.date',
      place: 'styleRef.experienceCard.place',
      tech: 'styleRef.experienceCard.tech',
      description: [
        'styleRef.experienceCard.description.1',
        'styleRef.experienceCard.description.2',
        'styleRef.experienceCard.description.3',
      ],
    },
    images: [
      { url: 'assets/sprite/webp/mars.webp', alt: 'mars' },
      { url: 'assets/sprite/webp/dyson.webp', alt: 'dyson' },
      { url: 'assets/sprite/webp/orion.webp', alt: 'dyson' },
    ],
    buttons: [
      {
        text: 'Mars',
        icon: 'public',
      },
      {
        text: 'Dyson',
        icon: 'panorama_photosphere',
      },
      {
        text: 'Orion',
        icon: 'bungalow',
      },
    ],
  },
  {
    title: 'styleRef.experienceCard.title',
    content: {
      company: 'styleRef.experienceCard.company',
      date: 'styleRef.experienceCard.date',
      place: 'styleRef.experienceCard.place',
      tech: 'styleRef.experienceCard.tech',
      description: [
        'styleRef.experienceCard.description.1',
        'styleRef.experienceCard.description.2',
        'styleRef.experienceCard.description.3',
      ],
    },
    buttons: [
      {
        text: 'Mars',
      },
      {
        text: 'Dyson',
      },
      {
        text: 'Orion',
      },
    ],
  },
];
</script>
<style lang="scss"></style>
