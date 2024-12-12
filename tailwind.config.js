/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        mono: ["Space Mono"],
        dm: ["DM Sans"],
        open: ["Open Sans"],
      },
    },
  },
  plugins: [],
}