/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        custom: 530,
      }
      
    },
    
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}