/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        sage: '#6E8B61',
        beige: '#EFE8DD',
        forest: '#2F4F3A',
        offwhite: '#FAF8F3',
        charcoal: '#1F1F1F',
        gold: '#C6A769',
        'sage-light': '#8FAB82',
        'sage-dark': '#5A7350',
        'beige-dark': '#DDD0BC',
        'forest-light': '#3D6B4F',
        'eco-bg': '#FFFFFF',
        'eco-beige': '#F7F3EE',
        'eco-green': '#314D3D',
        'eco-gold': '#C7A06C',
        'eco-text': '#1E1E1E',
        'eco-border': '#E8E2D8',
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'safe-b': 'env(safe-area-inset-bottom, 0px)',
        'safe-t': 'env(safe-area-inset-top, 0px)',
        'safe-l': 'env(safe-area-inset-left, 0px)',
        'safe-r': 'env(safe-area-inset-right, 0px)',
        'touch': '44px',
      },
      minHeight: {
        'touch': '44px',
      },
      minWidth: {
        'touch': '44px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out 1s infinite',
        'marquee': 'marquee 28s linear infinite',
        'spin-slow': 'spin 25s linear infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'slide-up': 'slide-up 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
        'slide-down': 'slide-down 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
        'fade-in': 'fade-in 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(100%)', opacity: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        luxury: '0 4px 40px rgba(110, 139, 97, 0.12)',
        'luxury-lg': '0 12px 60px rgba(47, 79, 58, 0.18)',
        card: '0 2px 20px rgba(31, 31, 31, 0.06)',
        'card-hover': '0 10px 40px rgba(31, 31, 31, 0.14)',
        gold: '0 4px 30px rgba(198, 167, 105, 0.30)',
        'inner-glow': 'inset 0 1px 0 rgba(255,255,255,0.6)',
        'sticky-cta': '0 -4px 30px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}


