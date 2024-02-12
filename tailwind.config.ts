import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'cb': '651px',
      },
      aspectRatio: {
        '5/8': '5/8',
      },
      fontSize: {
        'name': 'calc(3vw + 3rem)',
      },
      boxShadow: {
        'card': '0 0 2px rgba(255,255,255,.4),0 0 4px rgba(255,255,255,.4),0 0 6px rgba(255,255,255,.4), 0 0 8px rgba(255,255,255,.7)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
