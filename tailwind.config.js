// @ts-check
/* eslint-disable @typescript-eslint/no-var-requires */
const appConfig = require('./src/core/config/appConfig')

module.exports = {
  mod: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      md: appConfig.mobileAppMaxWidth,
    },
    extend: {
      margin: {
        center: '0 auto',
      },
      spacing: {
        'gb-header': appConfig.headerHeight,
        'bt-nav': appConfig.bottomNavigationHeight,
        'side-padding': appConfig.sidePadding,
      },
      maxWidth: {
        'mobile-app': appConfig.mobileAppMaxWidth,
      },

      colors: {
        primary_bg: {
          50: '#FEFBF6',
          100: '#FEFAF1',
          200: '#FCF4E3',
          300: '#FBEFD5',
          400: '#F9E8C3',
          500: '#F8E3B6',
          600: '#E1C076',
          700: '#E2C076',
          800: '#9E710F',
          900: '#4F3808',
        },
        primary: {
          50: '#F8ECE2',
          100: '#F2DAC5',
          200: '#E5B78F',
          300: '#D89255',
          400: '#BB6E2B',
          500: '#834D1E',
          600: '#683D18',
          700: '#4F2E12',
          800: '#36200C',
          900: '#190F06',
        },
        secondary: {
          50: '#FFFDFA',
          100: '#FEFCF6',
          200: '#FEFAF1',
          300: '#FDF7E7',
          400: '#FDF5E3',
          500: '#FCF2D9',
          600: '#F5D584',
          700: '#EEB72A',
          800: '#AF810E',
          900: '#553F07',
        },
        link: {
          50: '#35f0ff',
          100: '#2be6ff',
          200: '#21dcff',
          300: '#17d2ff',
          400: '#0dc8ff',
          500: '#03befc',
          600: '#00b4f2',
          700: '#00aae8',
          800: '#00a0de',
          900: '#0096d4',
        },
      },
    },
  },
}
