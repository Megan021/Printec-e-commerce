/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "567px",
      md: "768px",
      lg: "904px",
      xl: "1150px",
      // "2xl": "1100px",
    },
    extend: {
      container: {
        center: true,
        padding: "0.1rem",
      },
  },
  plugins: [],
}
}

