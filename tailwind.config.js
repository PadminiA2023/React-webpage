module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        105: '1.05',
      },
      backdropBlur: {
        sm: '4px',
        DEFAULT: '8px',
      },
      opacity: {
        0: '0',
        50: '0.5',
        100: '1',
      },
      translate: {
        '10': '2.5rem',
      },
      transitionDuration: {
        500: '500ms',
        700: '700ms',
      },
    },
  },
  plugins: [],
}
