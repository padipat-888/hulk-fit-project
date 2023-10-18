/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': {'min': '0px', 'max': '767px'},
      // => @media (min-width: 0px and max-width: 767px) { ... }

      'tablet': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'labtop': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'desktop': {'min': '1280px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }
    }
  },
  plugins: [require("daisyui")],
}


