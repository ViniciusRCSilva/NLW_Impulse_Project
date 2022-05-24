module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#995DFF',
          500: '#8257E6'
        }
      },
      borderRadius: {
        md: '4px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')
  ],
}
