import Hero from './components/Hero';
import Features from './components/Features';

function App() {
  return (
    <div className="min-h-screen bg-bg-black">
      <Hero />
      <Features />
      
      {/* Footer */}
      <footer className="border-t border-border py-8 mt-20">
        <div className="max-w-6xl mx-auto px-6 text-center text-text-muted">
          <p className="mb-2">
            Built with React, Vite, and Electron
          </p>
          <p>
            <a 
              href="https://github.com/ashiqsultan/copilot-ralph" 
              className="text-twitter-blue hover:text-twitter-blue-hover transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
