module.exports = {
  plugins: {
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {
      overrideBrowserslist: [
        'last 2 versions',
        '> 1%',
        'ie >= 11',
        'Edge >= 15',
        'iOS >= 10',
        'Safari >= 10',
        'Android >= 6'
      ]
    },
  },
}
