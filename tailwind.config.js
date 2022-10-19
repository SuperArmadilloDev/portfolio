/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        Titillium: ['test'],
      },
      colors: {
        'dark-grey': '#222831',
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
