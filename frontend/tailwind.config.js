/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00A2A2",
        secondary: "#161C2D",
        bgPrimary: "#E6E6E6",
    },
  },
},
  plugins: [],
};
