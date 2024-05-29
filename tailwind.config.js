/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx,js,jsx,html}"],
  theme: {
    extend: {
      backgroundImage: {
        person: "url('./shared/ui/main/persons.png')",
      },
    },
  },
  plugins: [],
};
