/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wix: {
          bg: "#000000",
          card: "#080808",
          border: "#1c1c1c",
          muted: "#757575",
          accent: "#ffffff",
        }
      },
      fontFamily: {
        sans: [
          '"Wix Madefor Display"',
          '"Wix Madefor Text"',
          '"Helvetica Neue"',
          'Helvetica',
          'Arial',
          'sans-serif'
        ]
      },
      letterSpacing: {
        widest: '0.15em',
      }
    },
  },
  plugins: [],
}
