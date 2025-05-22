/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {      colors: {
        'dark-bg': '#0a0a0a',
        'accent-blue': '#3a89c9', // Daha yumuşak mavi
        'accent-purple': '#7952a3', // Daha yumuşak mor
        'neon-green': '#4caf50', // Daha yumuşak yeşil
      },
      fontFamily: {
        'futuristic': ['Rajdhani', 'sans-serif'],
        'display': ['Orbitron', 'sans-serif'],
      },      keyframes: {
        lightning: {
          '0%, 100%': { opacity: 0 },
          '10%': { opacity: 0.9 },
          '12%': { opacity: 0.4 },
          '14%': { opacity: 1 },
          '16%': { opacity: 0.3 },
          '18%': { opacity: 0.8 },
          '20%, 22%': { opacity: 0.1 },
        },        'glow-pulse': {
          '0%, 100%': { 
            'box-shadow': '0 0 2px rgba(0,168,255,0.6), 0 0 4px rgba(0,168,255,0.3)',
            'text-shadow': '0 0 2px rgba(0,168,255,0.4)'
          },
          '50%': { 
            'box-shadow': '0 0 3px rgba(0,168,255,0.7), 0 0 6px rgba(0,168,255,0.4)',
            'text-shadow': '0 0 3px rgba(0,168,255,0.5)'
          }
        },
        'logo-glow-pulse': {
          '0%, 100%': { 
            'box-shadow': '0 0 5px #00a8ff, 0 0 10px #00a8ff, 0 0 15px #00a8ff',
            'text-shadow': '0 0 5px #00a8ff, 0 0 10px #00a8ff'
          },
          '50%': { 
            'box-shadow': '0 0 10px #00a8ff, 0 0 20px #00a8ff, 0 0 30px #00a8ff',
            'text-shadow': '0 0 10px #00a8ff, 0 0 20px #00a8ff'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'data-flow': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '200% 0%' }
        },
        'pulse-opacity': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 }
        },
        'cyber-glitch': {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-2px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(2px)' }
        }
      },      animation: {
        'lightning': 'lightning 4s linear',
        'glow-pulse': 'glow-pulse 2s infinite',
        'logo-glow-pulse': 'logo-glow-pulse 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'data-flow': 'data-flow 20s linear infinite',
        'pulse-opacity': 'pulse-opacity 2s ease-in-out infinite',
        'cyber-glitch': 'cyber-glitch 0.3s ease-in-out'
      },
    },
  },
  plugins: [],
}
