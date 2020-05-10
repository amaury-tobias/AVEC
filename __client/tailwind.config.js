module.exports = {
  purge: {
    content: ['./**/*.html', './**/*.vue', './**/*.ts'],
    options: {
      whitelistPatterns: [/svg.*/, /fa.*/],
    },
  },
  theme: {
    darkSelector: '.dark-mode',
    extend: {
      colors: {
        light: 'var(--light-color)',
        dark: 'var(--dark-color)',
        'dark-highlight': 'var(--dark-highlight-color)',
        'light-highlight': 'var(--light-highlight-color)',
        'gray-transparent': 'var(--gray-transparent-color)',
      },
    },
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
    borderColor: ['dark', 'dark-hover', 'dark-focus', 'dark-focus-within'],
    textColor: ['dark', 'dark-hover', 'dark-active', 'hover'],
  },

  plugins: [require('tailwindcss-dark-mode')()],
}
