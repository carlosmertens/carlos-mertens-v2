import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      accent: '#800000',
      dark: '#001126',
      light: '#b3c9d9',
      primary: '#243949',
      secondary: '#489eba',
      white: '#f5f5f5',
      glass: 'rgba(245, 245, 245, 0.103)',
    },
    extend: {
      dropShadow: {
        header: '3px 3px 3px rgba(128, 0, 0)',
      },
    },
  },
  plugins: [],
};
export default config;
