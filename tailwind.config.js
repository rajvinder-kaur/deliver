/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./Pages/**/*.{js,jsx,ts,tsx}","./Components/**/*.{js,jsx,ts,tsx}","./subcomponents/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        lightgrey:'CECCCC',
        black :'#615F5F',
        blue :'342B60',  
      },
      fontSize:{
        'h1':'50.8px',
        'h2':'31.4px',
        'h3':'19.4px',
        'h4':'14px',
        'p':'12px'
      }
    }
    
  },
  plugins: [],
}

