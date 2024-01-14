/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      margin: {
        '35.2': '2.2rem',
        '70': '4.375rem',
        '4.5': '4.5rem',
        '76': '4.75rem',
        '96': '6rem',
        '120': '7.5rem',
        '124': '7.75rem',
        '128': '8rem',
        '256': '16rem',
        '384': '24rem',
        '448': '28rem',
        '512': '32rem',
        '576': '36rem',
        '592': '37rem',
        '684': '40rem',
        '688': '43rem',
        '691.2': '43.2rem',
        '692': '43.25rem',
        '700': '43.75rem',
        '704': '44rem',
        '720': '45rem',
      },
      width: {
        '16': '16rem',
        '18': '18rem',
        '392': '24.5rem',
        '512': '32rem',
        '544': '34rem',
        '20.2rem': '20.2rem',
      },
      height: {
        '392': '24.5rem',
        '512': '32rem',
        '544': '34rem',
      },
      colors: {
        'custom-gray': '#3c3c3c',
        'lBrown': '#a1887f',
      },
      fontSize: {
        'xs': '0.75rem',    // 12px
        '2xs': '0.625rem',  // 10px
        '3xs': '0.5rem',    // 8px
      },
      blur: {
        xs: '1px',
      },
    },
  },
  plugins: [],
}
