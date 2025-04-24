/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'oklch(0.3 0.01 265)', // Deep graphite (cool dark)
        'primary-foreground': 'oklch(0.98 0 0)', // Pure white
        background: 'oklch(1 0 0)', // White
        foreground: 'oklch(0.16 0.02 265)', // Near-black
        muted: 'oklch(0.85 0.015 250)', // Silvery-gray
        'muted-foreground': 'oklch(0.4 0.02 265)',

        // Gradient stops
        'gradient-start': 'oklch(0.15 0.02 265)', // Deep blue-black
        'gradient-mid': 'oklch(0.3 0.05 265)', // Midnight steel
        'gradient-end': 'oklch(0.85 0.02 265)', // Icy white-ish blue
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        xl: 'calc(var(--radius) + 4px)',
      },
      animation: {
        gradientShift: 'gradientShift 6s ease-in-out infinite',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(270deg, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
