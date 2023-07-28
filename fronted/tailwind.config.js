/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          primaryColor : "#0067ff",      //Color para botones
          yellowColor : "#FEB60D",      //Color amarillo
          purpleColor : "#9771FF",      //Color morado
          irisBlueColor : "#01B5C5",    //Color azul iris
          headingColor : "#181A1E",     //Color para encabezados
          textColor : "#4E545F"        //Color para texto
      },
      boxShadow: {
        panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0" 
      }
    },
  },
  plugins: [],
}

