import Hero from './components/Hero';
import Features from './components/Features';

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-black)' }}>
      <div className="noise-overlay" />
      <Hero />
      <Features />

      {/* Footer */}
      <footer className="py-16 mt-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px w-full mb-10" style={{ background: 'linear-gradient(to right, transparent, var(--border), transparent)' }} />
          <div className="text-center">
            <p className="text-sm mb-4" style={{ color: 'var(--text-tertiary)' }}>
              Built with React, Vite, and Electron
            </p>
            <a
              href="https://github.com/ashiqsultan/copilot-ralph"
              className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:underline"
              style={{ color: 'var(--accent-blue)' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
