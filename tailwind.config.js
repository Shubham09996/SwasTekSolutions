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
          950: '#03080F',
          900: '#0A1828',
          800: '#0D1E34',
          700: '#112444',
        },
        blue: {
          700: '#0F4BB5',
          600: '#1558D4',
          500: '#2570E8',
          400: '#4A8FF5',
          300: '#7AB2FA',
        },
        cyan: {
          500: '#0BC4E3',
          400: '#38D9F0',
        },
        gray: {
          400: '#A0AFB8',
          100: '#F4F8FD',
          50:  '#F7FAFD',
        }
      },
      fontFamily: {
        heading: ['Sora', 'sans-serif'],
        body:    ['Plus Jakarta Sans', 'sans-serif'],
        mono:    ['DM Mono', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.65rem', { lineHeight: '1rem' }],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'fade-in':      'fadeIn 0.6s ease-out forwards',
        'slide-up':     'slideUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'float-slow':   'floatSlow 14s ease-in-out infinite',
        'float-med':    'floatMed 10s ease-in-out infinite',
        'shimmer':      'shimmer 4s linear infinite',
        'pulse-ring':   'pulseRing 2s ease-out infinite',
        'grain':        'grain 12s steps(1) infinite',
        'border-glow':  'borderGlow 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '33%':      { transform: 'translateY(-28px) translateX(12px)' },
          '66%':      { transform: 'translateY(14px) translateX(-8px)' },
        },
        floatMed: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        pulseRing: {
          '0%':   { transform: 'scale(1)',   opacity: '0.8' },
          '100%': { transform: 'scale(2.5)', opacity: '0' },
        },
        borderGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(21,88,212,0)' },
          '50%':      { boxShadow: '0 0 24px 2px rgba(21,88,212,0.18)' },
        },
      },
      boxShadow: {
        'glow-blue': '0 0 32px rgba(21,88,212,0.35)',
        'glow-cyan': '0 0 32px rgba(11,196,227,0.3)',
        'card':      '0 4px 32px rgba(7,17,31,0.08)',
        'card-hover':'0 20px 60px rgba(7,17,31,0.12)',
        'glass':     '0 8px 32px rgba(7,17,31,0.08), inset 0 1px 0 rgba(255,255,255,0.06)',
      },
      transitionTimingFunction: {
        'expo-out':   'cubic-bezier(0.16, 1, 0.3, 1)',
        'expo-in':    'cubic-bezier(0.7, 0, 0.84, 0)',
        'spring':     'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      transitionDuration: {
        '350': '350ms',
        '400': '400ms',
        '600': '600ms',
      },
      backdropBlur: {
        'xs': '4px',
      },
    },
  },
  plugins: [],
}
