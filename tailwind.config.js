/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGray: "#171717",
        light : "#878787"
      },
      screens: {
        'xs': '470px',    
        'sm': '640px',    
        'md': '835px',    
        'lg': '1024px',   
        'xl': '1280px',   
        '2xl': '1536px', 
        '3xl': '1920px'   
      },
      animation: {
        "pulse-dot": "pulse-dot 1.2s infinite ease-in-out",
      },
      keyframes: {
        "pulse-dot": {
          "0%, 80%, 100%": { transform: "scale(0.8)", opacity: 0.9 },
          "40%, 50%": { transform: "scale(1.1)", opacity: 1 },
        },
      }
    },
    screens : {
      'h-sm': { raw: '(max-height: 540px)' },
    }
  },
  plugins: [],
}