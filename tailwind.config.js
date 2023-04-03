/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
       'base': '1rem',
       'lg': '1.125rem',
       'xl': '1.25rem',
       '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
       '5xl': '3rem',
       '6xl': '4rem',
      '7xl': '.65rem',
     },
    fontFamily: {
      'HankenGrotesk-Medium': ["HankenGrotesk-Medium"],
      'HankenGrotesk-Bold': ["HankenGrotesk-Medium"],
      'HankenGrotesk-ExtraBold': ["HankenGrotesk-Medium"]
    },
    extend: {
      colors: {
        primary: {
          'background-slate-blue': 'hsl(252, 100%, 67%)',
          'background-royal-blue': 'hsl(241, 81%, 54%)',
          'light gray': 'hsl(212, 45%, 89%)',
          'white': 'hsl(0, 0%, 100%)',
          'circle-violet-blue': 'hsla(256, 72%, 46%, 1)',
          'circle-persian-blue': 'hsla(241, 72%, 46%, 0)',
          'light-red': 'hsl(0, 100%, 67%)',
          'Orangey-yellow': 'hsl(39, 100%, 56%)',
          'Light-lavender': 'hsl(241, 100%, 89%)',
          'Green-teal': 'hsl(166, 100%, 37%)',
          'Dark-gray-blue': 'hsl(224, 30%, 27%)'
        }
      }
    },
  },
  plugins: [],
}
