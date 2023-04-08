/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'fullblack': '#000000',
        'title': {
          'first-color': {
            100: '#FFC400',
          },
          'second-color': {
            100: '#FFE000',
          },
          'third-color': {
            100: '#fff',
          },
          'fourth-color': {
            100: '#fff',
          },
        }, 
        'text-gray-200': '#FFFFFF',
        'button': '#7B7B7B',
        'gradient-200': '#222222',
        'gradient-300': '#1F1F1F',
        'gradient-400': '#171717',
        'gradient-500': '#161616',
        'gradient-600': '#151515',
        'gradient-700': '#131313',
        'gradient-800': '#121212',
      },
      gradientColorStops: {
        0: '0%',
        22: '22%',
        44: '44%',
        62: '62%',
        77: '77%',
        85: '85%',
        100: '100%',
      },
      animation: {
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)'
      },
      keyframes: {
        overlayShow: {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
        contentShow: {
          from: {
            opacity: '0',
            transform: 'translate(-50%, -48%) scale(0.96)',
          },
          to: {
            opacity: '1',
            transform: 'translate(-50%, -50%) scale(1)',
          },
        },
      }
    },
  },
  plugins: [],
};
