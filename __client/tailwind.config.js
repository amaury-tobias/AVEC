module.exports = {
  purge: {
    content: ['./**/*.html', './**/*.vue', './**/*.ts'],
    options: {
      whitelistPatterns: [/svg.*/, /fa.*/],
    },
  },
  theme: {
    darkSelector: '.dark-mode',
  },
  variants: {
    backgroundColor: [
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd',
      'hover',
    ],
    borderColor: [
      'dark',
      'dark-hover',
      'dark-focus',
      'dark-focus-within',
      'focus',
      'active',
    ],
    textColor: ['dark', 'dark-hover', 'dark-active', 'hover'],
  },

  plugins: [require('tailwindcss-dark-mode')()],
}
