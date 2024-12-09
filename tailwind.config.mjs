/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        script: {
          100: "#E1D5C5",
          200: "#D4C7B6",
        },
      },
      fontFamily: {
        heading: ["IBM Plex Sans", "serif"],
        body: ["iA Writer Quattro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
