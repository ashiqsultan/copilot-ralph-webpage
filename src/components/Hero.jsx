import { IconDownload } from '@tabler/icons-react';

export default function Hero() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="text-center mb-12 animate-fade-in-up">
        <h1 className="text-sm md:text-6xl font-bold mb-6 text-text-primary">
          <span style={{ color: '#24289A' }}>Copilot</span> <span style={{ color: '#F1D01D' }}>Ralph</span>
        </h1>
        <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto">
          A desktop application that helps you build applications systematically with GitHub Copilot. 
          Define tasks in plan mode and let Ralph execute them one by one.
        </p>
        <a 
          href="https://github.com/ashiqsultan/copilot-ralph/releases/download/v1.0.0/CopilotRalph.dmg"
          className="inline-flex items-center gap-2 px-8 py-4 bg-twitter-blue hover:bg-twitter-blue-hover text-white font-semibold rounded-full transition-all duration-300 text-lg hover:scale-105 hover:shadow-lg hover:shadow-twitter-blue/30"
        >
          <IconDownload size={24} />
          Download for macOS
        </a>
        <p className="text-sm text-text-muted mt-4">
          Universal DMG for Apple Silicon & Intel
        </p>
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
        <div className="flex items-center justify-center md:justify-start">
          <p className="text-2xl md:text-3xl font-semibold text-text-primary">
            Desktop app to vibe code using copilot
          </p>
        </div>
        <div className="rounded-xl overflow-hidden shadow-2xl animate-scale-in hover:shadow-twitter-blue/20 transition-shadow duration-300">
          <img 
            src="/screenshots/ss02.png" 
            alt="Copilot Ralph Application Screenshot" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
