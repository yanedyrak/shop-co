/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{ts,tsx,js,jsx,html}"],
  theme: {
    extend: {
      backgroundImage: {
        person: "url('./shared/ui/main/persons.png')",
        firstImg: "url('./shared/ui/browseCatalog/firstImg.png')",
        secondImg: "url('./shared/ui/browseCatalog/secondImg.png')",
        thirdImg: "url('./shared/ui/browseCatalog/thirdImg.png')",
        fourthImg: "url('./shared/ui/browseCatalog/fourthImg.png')",
      },
    },
  },
  plugins: [],
};
