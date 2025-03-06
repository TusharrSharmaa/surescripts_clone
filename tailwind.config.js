/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "#f7901e",
        darkOrange: "#dd7a08",
        darkBlue: "#005677",
        mediumBlue: "#0082ca",
        lightBlue: "#00a8e1",
        sortBlue: "#009dd1",
        green: "#69b345",
        darkGray: "#002a3b",
        mediumGray: "#415363",
        lightGray: "#98A4AF",
        lightestGray: "#f2f2f3",
      }
    },
  },
  plugins: [],
};
