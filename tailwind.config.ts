import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      fontFamily: {
        'signika': 'Signika, sans-serif',
        'black-san': 'Black Han Sans, sans-serif',
      },

      fontSize: {
        's': '12px',
        'sx': '16px',
        'lm': '20px',
        'm': '24px',
        'l': '35px',
        'ml': '40px',
        'xl': '50px',
      },

      screens: {
        's': '300px',
        'sm': '430px',
        'md': '650px',
        'm': '895px',
        'l': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },

      colors: {
        'dark': '#4A2C2A',
        'blue': '#4377BC',
        'dark-green': '#346F36',
        'back-green': '#F0FFF0',
        'back-blue': '#6CB4EE',
        'dark-blue': '#1a1f71',
        'red': '#7C0A02'
      },
    },
  },
  plugins: [],
}
export default config
