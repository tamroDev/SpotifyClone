/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, rgba(43,43,43,1) 0%, rgba(18,18,18,1) 38%, rgba(18,18,18,1) 100%)",
      },
    },
  },
  plugins: [],
};
