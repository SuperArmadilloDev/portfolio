<template>
  <main>
    <div>
      <h1>Sticky ScrollSpy Table of Contents in Vue.js</h1>
      <section
        v-for="d in dd"
        :id="d"
        :key="d"
        ref="section"
      >
        <h2>{{ d }}</h2>
      </section>
    </div>
    <nav class="section-nav">
      <ol class="bullet-list">
        <li>
          <a
            href="#introduction"
            :class="{ aaaa: 'introduction' === activeEntry }"
          >
            Introduction
          </a>
        </li>
        <li>
          <a
            href="#about"
            :class="{ aaaa: 'about' === activeEntry }"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#contact"
            :class="{ aaaa: 'contact' === activeEntry }"
          >
            Contact
          </a>
        </li>
      </ol>
    </nav>
  </main>
</template>

<script setup>
const dd = ref(['introduction', 'about', 'contact']);
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
</script>
<style scoped>
.aaaa {
  background-color: #efefef;
}

/* Sidebar Navigation */
.section-nav {
  margin-top: 2rem;
  padding-left: 0;
  border-left: 1px solid #efefef;
}

.section-nav a {
  text-decoration: none;
  display: block;
  padding: 0.125rem 0;
  color: black;
  transition: all 50ms ease-in-out;
}

.section-nav a:hover,
.section-nav a:focus {
  color: #666;
}

.section-nav li.active > a {
  color: #f2765d;
  font-weight: 500;
}

/* Sticky Navigation */
main > nav {
  position: sticky;
  top: 2rem;
  align-self: start;
}

ul.bullet-list,
ol.bullet-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  margin-left: 1rem;
}

/** page layout **/
main {
  display: grid;
  grid-template-columns: 1fr 15em;
  max-width: 100em;
  width: 90%;
  margin: 0 auto;
}

section {
  margin-bottom: 50rem;
}
</style>
