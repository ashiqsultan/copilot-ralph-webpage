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
        'border': 'var(--border)',
        'border-muted': 'var(--border-muted)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-tertiary': 'var(--text-tertiary)',
        'accent-blue': 'var(--accent-blue)',
        'accent-blue-hover': 'var(--accent-blue-hover)',
        'accent-blue-light': 'var(--accent-blue-light)',
        'blue-transparent': 'var(--blue-transparent)',
        'gold': 'var(--gold)',
        'red': 'var(--red)',
      },
    },
  },
  plugins: [],
}
