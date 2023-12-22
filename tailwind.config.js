/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const gradients = {
        ".bg-light-theme-gradient": {
          background: "linear-gradient(to right bottom, #D9D9D9, #292929)",
        },
        ".bg-dark-theme-gradient": {
          background: "linear-gradient(#373636, #383838)",
        },
        ".bg-orange-gradient": {
          background:
            "linear-gradient(171deg, #F88508 -12.41%, rgba(246, 250, 217, 0.00) 163.32%)",
        },
        ".bg-sky-gradient": {
          background:
            "linear-gradient(168deg, #443D64 -19.21%, rgba(101, 130, 198, 0.00) 158.48%)",
        },
      };

      addUtilities(gradients, ["responsive", "hover"]);
    },
  ],
  darkMode: "class",
};
