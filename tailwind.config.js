const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: 'class',
  content: [
    "./build/**/*.{html,js}"
  ],
  theme: {
    screens: {
      'sm': '600px',
      'md': '700px',
      'lg': '900px',
      'xl': '1200px',
    },
    colors: {
       indigo: {
         light:'#b3bcf5',
         DEFAULT:'#5c6ac4',
         dark:'#202e78'
       }
    },
    extend: {
      screens: {
       '3xl': '1600px'
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities, addComponents,addBase, theme, e, prefix, config }) {
      const newUtilities = {
        '.scale-1': {
          transform:'scale(1)'
        },
        '.rotate-1': {
          transform: 'rotate(1)'
        }
      }
      addUtilities(newUtilities)

      const button = {
        '.baton': {
          padding:'.5rem 1rem',
          fontweight: '600'
        },
        '.baton-blue': {
          color: '#fff',
          '&:hover':{
            color:'#000'
          }
        }
      }
      addComponents(button, {variants:['hover']})
      
      const headings = {
         'h1': {fontSize: theme('fontSize.sm')},
         'h2': {fontSize: '3.5rem'},
         'h3': {fontSize: '3rem'},
         'h4': {fontSize: theme('spacing.24')},
         'h5': {fontSize: '2rem'},
         'h6': {fontSize: '1.5rem'}
      }
      addBase(headings)
    }),
  ],
  
}
