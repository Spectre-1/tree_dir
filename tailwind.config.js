module.exports = {
  content: ['./*.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkBlue: 'hsl(217, 28%, 15%)',
        darkBlue1: 'hsl(218, 28%, 13%)',
        darkBlue2: 'hsl(216, 53%, 9%)',
        darkBlue3: 'hsl(219, 30%, 15%)',
        accentCyan: 'hsl(176, 68%, 64%)',
        accentBlue: 'hsl(198, 60%, 50%)',
        lightRed: 'hsl(0, 100%, 62%)',
        lightGreen: 'hsl(154, 59%, 51%)',
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif']
      },
      flex: {
        'footer': '1 0 auto',
      },
      minHeight: {
        'screen-footer': 'calc(100vh - 80px)', // Adjust the value as needed based on your header height
      },
      backgroundImage: (theme) => ({
     //TBA
      }),
    },
  },
  variants: {
    extend: {
      backgroundImage: ['dark']
    },
  },
  plugins: [],
}