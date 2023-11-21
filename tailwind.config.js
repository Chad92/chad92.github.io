/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
      extend: {
        colors : {
          'greybg' : '#F7F7F7',
          'black' : 'black',
          'white' : '#FFFFFF',
          'grey' : '#DFDFDF',
          'blue': '#E9F1FA',
          'blackbg' : '#242225',
          'greydarkbg' : '#3F3F46',
          'redbg' : '#AA0F52'
        },
        fontFamily : {
          roboto : ['Roboto', 'sans-serif'],
          arial : ['Arial', 'sans-serif']
        },
        borderRadius : {
          roundedsmall : '8px',
          roundedmedium : '16px',
          roundedlarge : '32px'
        },
        fontSize : {
          'xxs' : '4px',
          'medium': '14px',
          'large' : '16px',
          'title' : '32px'
        },

      },
  },
  plugins: [],
  darkMode: "class",
};