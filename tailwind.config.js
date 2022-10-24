/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [],
  theme: {
    darkSelector: '.dark-mode',
    extend: {
      fontFamily: {
        Titillium: ['test'],
      },
      colors: {
        'background-theme': {
          0: '#171717',
          1: '#3e3e3e',
          2: '#6a6a6a',
          3: '#999999',
          4: '#cbcbcb',
        },
        'card-theme': {
          0: '#493d36',
          1: '#6c5f58',
          2: '#92847c',
          3: '#b9aaa2',
          4: '#e2d2ca',
        },
        'button-theme': {
          0: '#755a43',
          1: '#94775f',
          2: '#b5967d',
          3: '#d6b69c',
          4: '#f9d7bc',
        },
        'other-1': {
          0: '#d07b69',
          1: '#ad5c4c',
          2: '#8a3e30',
          3: '#692117',
          4: '#490200',
        },
        'other-2': {
          0: '#f8b363',
          1: '#6d596a',
          2: '#937e90',
          3: '#bca5b8',
          4: '#e5cee1',
        },
        'other-3': {
          0: '#f9f871',
          1: '#c1c23c',
          2: '#8a8f00',
          3: '#566000',
          4: '#2f3300',
        },
      },
    },
  },
  plugins: [],

  darkMode: 'class',
  variants: {
    backgroundColor: [
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd',
    ],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within'],
    textColor: ['dark', 'dark-hover', 'dark-active'],
  },
};

// import { Config } from 'tailwindcss';

// export default <Config> {
//   content: [
//     'app.vue'
//     // Add all files that contain Tailwind classes
//     // e.g. './modules/**/*.{vue,js,ts}',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [require('tailwindcss-dark-mode')()],

//   variants: {
//     backgroundColor: [
//       'dark',
//       'dark-hover',
//       'dark-group-hover',
//       'dark-even',
//       'dark-odd',
//       'hover',
//       'responsive'
//     ],
//     borderColor: [
//       'dark',
//       'dark-focus',
//       'dark-focus-within',
//       'hover',
//       'responsive'
//     ],
//     textColor: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive']
//   },

//   purgeCSS: {
//     whitelist: ['dark-mode']
//   }
// };
