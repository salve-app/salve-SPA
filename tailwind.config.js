/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-open)',
        alt: 'var(--font-oswald)',
      },

      colors: {
        watermelon: {
          main: '#DB6161',
          alternative: '#F9F6F4',
          emphasis: '#0F502E',
          'dark-main': '#AD3838',
        },
        blueberry: {
          main: '#8E98A8',
          alternative: '#efecf5',
          emphasis: '#043065',
          'dark-main': '#432c69',
        },
        main: 'var(--main)',
        alternative: 'var(--alternative)',
        emphasis: 'var(--emphasis)',
        'dark-main': 'var(--dark-main)',
      },
    },
  },
  plugins: [],
}
