/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-teal': '#1FAF98',
        'brand-blue': '#36BCEE',
        'brand-purple': '#5B4897',
        'brand-red': '#E9454E'
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
