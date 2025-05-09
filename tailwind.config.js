module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryStart: '#0a0a1a',
        primaryMid: '#0f172a',
        primaryEnd: '#1e3a8a',
        accent: '#3b82f6',
        accentLight: '#60a5fa',
        cardBg: '#111827',
        textPrimary: '#f9fafb',
        textSecondary: '#9ca3af',
        hoverGlow: '#38bdf8',
        darkBlue: '#0a0a1a',
        midBlue: '#1e3a8a',
        lightBlue: '#60a5fa',
      },
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
