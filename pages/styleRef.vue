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
    <div class="mb-8">
      <button
        class="bg-button-theme-0 hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center text-white"
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

    <!-- <CustomNavigation :hash-links="hashLinks" /> -->

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

    <H2Title>
      {{ $t('styleRef.cardTitle') }}
    </H2Title>
    <section
      id="about"
      class="mb-10 dark:bg-card-theme-0 rounded-md p-10 border border-card-theme-1"
    >
      <CardTitle>
        {{ $t('styleRef.cardContentTitle') }}
      </CardTitle>
      <div class="grid grid-cols-2 gap-10 mb-5">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus
          quam ut magna convallis laoreet. Aliquam sollicitudin, orci vehicula
          semper vehicula, nunc libero varius sem, consequat aliquam metus nibh
          eu lacus. Aenean sit amet lobortis risus. Phasellus pellentesque
          tortor purus, id cursus dui efficitur ut. Donec sit amet felis dictum,
          scelerisque velit id, mattis nisl. Suspendisse varius sem diam, non
          convallis odio condimentum vel. Phasellus ultrices nisi id eros
          bibendum, eu egestas massa sollicitudin. Donec aliquam velit massa.
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Praesent sit amet nisl egestas, fringilla
          massa vel, cursus velit. Maecenas in bibendum eros. In congue turpis
          nec bibendum aliquam. Morbi placerat dui turpis, et sollicitudin nunc
          iaculis eget. Proin nec felis in ex interdum tincidunt. Ut fringilla,
          ipsum vel rhoncus consequat, dui arcu rhoncus augue, a mattis velit
          magna at risus. Integer quis maximus nulla. Proin odio velit, lacinia
          et urna ut, maximus viverra augue. Donec accumsan lorem ut nunc
          feugiat, sed bibendum eros imperdiet. Etiam laoreet libero eu nulla
          vestibulum, et vulputate nisi consectetur. Nulla iaculis justo metus,
          at mattis magna ultricies non. Sed ac posuere purus. Quisque egestas
          semper sapien, sed facilisis mauris lacinia quis. Morbi eu scelerisque
          tortor, ut vestibulum leo. In varius felis quis mauris interdum
          tempus. Quisque vestibulum eget mi at aliquam. Nulla sagittis id ipsum
          eu luctus. Donec mollis pulvinar tempus. Aenean justo est, maximus sit
          amet lobortis a, scelerisque id purus. Donec felis tortor, maximus et
          elementum eget, finibus maximus nisi. Ut aliquet elementum iaculis.
          Nulla eget metus ultrices, dapibus eros sit amet, laoreet tellus. Nunc
          varius facilisis neque a semper.
        </div>
        <div class="w-full flex justify-end">
          <img
            class="inset-y-0 right-0 rounded-lg"
            src="https://picsum.photos/1000/500"
            alt="lorem pictum image"
          />
        </div>
      </div>
      <CustomButton
        has-icon
        :icon="'vape_free'"
      >
        Salut
      </CustomButton>
    </section>
    <section
      id="formations"
      class="dark:bg-card-theme-0 rounded-md p-10 border border-card-theme-1"
    >
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus
        quam ut magna convallis laoreet. Aliquam sollicitudin, orci vehicula
        semper vehicula, nunc libero varius sem, consequat aliquam metus nibh eu
        lacus. Aenean sit amet lobortis risus. Phasellus pellentesque tortor
        purus, id cursus dui efficitur ut. Donec sit amet felis dictum,
        scelerisque velit id, mattis nisl. Suspendisse varius sem diam, non
        convallis odio condimentum vel. Phasellus ultrices nisi id eros
        bibendum, eu egestas massa sollicitudin. Donec aliquam velit massa. Orci
        varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Praesent sit amet nisl egestas, fringilla massa vel,
        cursus velit. Maecenas in bibendum eros. In congue turpis nec bibendum
        aliquam. Morbi placerat dui turpis, et sollicitudin nunc iaculis eget.
        Proin nec felis in ex interdum tincidunt. Ut fringilla, ipsum vel
        rhoncus consequat, dui arcu rhoncus augue, a mattis velit magna at
        risus. Integer quis maximus nulla. Proin odio velit, lacinia et urna ut,
        maximus viverra augue. Donec accumsan lorem ut nunc feugiat, sed
        bibendum eros imperdiet. Etiam laoreet libero eu nulla vestibulum, et
        vulputate nisi consectetur. Nulla iaculis justo metus, at mattis magna
        ultricies non. Sed ac posuere purus. Quisque egestas semper sapien, sed
        facilisis mauris lacinia quis. Morbi eu scelerisque tortor, ut
        vestibulum leo. In varius felis quis mauris interdum tempus. Quisque
        vestibulum eget mi at aliquam. Nulla sagittis id ipsum eu luctus. Donec
        mollis pulvinar tempus. Aenean justo est, maximus sit amet lobortis a,
        scelerisque id purus. Donec felis tortor, maximus et elementum eget,
        finibus maximus nisi. Ut aliquet elementum iaculis. Nulla eget metus
        ultrices, dapibus eros sit amet, laoreet tellus. Nunc varius facilisis
        neque a semper.
      </div>
      <div class="w-full flex justify-end">
        <img
          class="inset-y-0 right-0 rounded-lg"
          src="https://picsum.photos/500"
          alt="lorem pictum image"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
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

onMounted(() => {
  console.log('azeazeazeazez');
});
</script>
