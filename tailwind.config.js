/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        background: "var(--background-color)",
        text: "var(--text-color)",
        accent: "var(--accent-color)",
        code: "var(--code-background)",
        section: "var(--section-background)",
        border: "var(--border-color)",
      },
    },
  },
  plugins: [],
};
