/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{ts,tsx,js,jsx,html}"],
  theme: {
    screens: {
      "2xl": { max: "1815px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "479px" },
    },
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
