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
      colors: {
        accent: {
          '70': '#00AAA1',
          '30': '#DFF1F0',
          '20': '#E8F3F3',
          '10': '#F2F8F7',
        },
        text: {
          '80': '#222',
          '70': '#555',
          '50': '#777'
        }
      }
    },
  },
  plugins: [],
}
export default config
