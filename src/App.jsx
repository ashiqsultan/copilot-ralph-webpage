import Hero from './components/Hero';
import Features from './components/Features';

function App() {
  return (
    <div className="min-h-screen bg-bg-black">
      <Hero />
      <Features />
      
      {/* Footer */}
      <footer className="py-12 mt-20">
        <div className="max-w-6xl mx-auto px-6 text-center text-text-muted">
          <p className="mb-3 text-sm">
            Built with React, Vite, and Electron
          </p>
          <p>
            <a 
              href="https://github.com/ashiqsultan/copilot-ralph" 
              className="text-twitter-blue hover:text-twitter-blue-hover transition-all duration-300 hover:underline"
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
