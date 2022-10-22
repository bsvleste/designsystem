/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    fontSize: {
      sx: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      xxl: 32
    },
    colors: {
      'transparent': "transparent",
      'black': "#000",
      'white': "#ffff",
      'red-5000': "#eb5757",
      gray: {
        400: "#B1B4BA",
        600: "#121214",
        700: "#6B7280",
        800: "#202024",
        900: "#202024"
      },
      cyan: {
        200: "#9CEAFF",
        500: "#61DAFB"
      },
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif"
      }
    },
  },
  plugins: [],
}
