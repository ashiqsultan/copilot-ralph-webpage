/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-black': 'var(--bg-black)',
        'bg-card': 'var(--bg-card)',
        'bg-dark': 'var(--bg-dark)',
        'border': 'var(--border)',
        'border-muted': 'var(--border-muted)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-tertiary': 'var(--text-tertiary)',
        'text-muted': 'var(--text-muted)',
        'accent-blue': 'var(--accent-blue)',
        'accent-blue-hover': 'var(--accent-blue-hover)',
        'accent-blue-light': 'var(--accent-blue-light)',
        'twitter-blue': 'var(--twitter-blue)',
        'twitter-blue-hover': 'var(--twitter-blue-hover)',
        'twitter-blue-light': 'var(--twitter-blue-light)',
        'blue-transparent': 'var(--blue-transparent)',
        'gold': 'var(--gold)',
        'red': 'var(--red)',
      },
    },
  },
  plugins: [],
}
