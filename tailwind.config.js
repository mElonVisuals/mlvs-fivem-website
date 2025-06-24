/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Ensure Inter font is available or link it
      },
      animation: {
        // Placeholder for custom animations if you define them in index.css
        // e.g., 'fade-in-up': 'fadeInUp 1s ease-out',
        // 'bounce-in': 'bounceIn 1s ease-out',
      },
      keyframes: {
        // Placeholder for custom animation keyframes
        // fadeInUp: {
        //   '0%': { opacity: 0, transform: 'translateY(20px)' },
        //   '100%': { opacity: 1, transform: 'translateY(0)' },
        // },
        // bounceIn: {
        //    '0%': { transform: 'scale(0.8)', opacity: 0 },
        //    '50%': { transform: 'scale(1.1)', opacity: 1 },
        //    '100%': { transform: 'scale(1)', opacity: 1 },
        // }
      }
    },
  },
  plugins: [],
}

