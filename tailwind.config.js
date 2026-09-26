/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#071426',
          900: '#0B1F3A',
          800: '#0d2644',
          700: '#123B73',
        },
        blue: {
          600: '#0759D1',
          500: '#168DFF',
          400: '#16B9F3',
        },
        gray: {
          400: '#A7B1C2',
          50: '#F5F8FC',
        }
      },
      fontFamily: {
        heading: ['Sora', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
