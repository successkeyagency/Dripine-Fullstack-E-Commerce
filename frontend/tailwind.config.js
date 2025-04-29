/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '25%': { width: '50%' },
          '50%': { width: '100%' },
          '75%': { width: '50%' },
          '100%': { width: '0' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-4px)' },
          '50%': { transform: 'translateX(4px)' },
          '75%': { transform: 'translateX(-4px)' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        flip: {
          '0%': { transform: 'rotateY(0)' },
          '50%': { transform: 'rotateY(180deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeInUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        flipIn: {
          '0%': { transform: 'rotateY(-180deg)', opacity: '0' },
          '100%': { transform: 'rotateY(0)', opacity: '1' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(255, 255, 0, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(255, 255, 0, 0.8)' },
        },
      },
      animation: {
        typing: 'typing 4s steps(30, end) infinite',
        bounce: 'bounce 1s ease-in-out infinite',
        shake: 'shake 0.5s ease-in-out infinite',
        zoomIn: 'zoomIn 1s ease-out forwards',
        flip: 'flip 3s ease-in-out infinite',
        pulse: 'pulse 1.5s ease-in-out infinite',
        slideIn: 'slideIn 1s ease-out forwards',
        fadeInUp: 'fadeInUp 1s ease-out forwards',
        flipIn: 'flipIn 1s ease-out forwards',
        bounceIn: 'bounceIn 1s ease-out forwards',
        glow: 'glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

