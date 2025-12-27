/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      colors: {
        brand: {
          dark: "#0a0a0a",
          accent: "#38bdf8", // Sky 400
        },
      },
    },
  },
  plugins: [],
};
