import { IconBrandAppleFilled, IconArrowDown, IconBrandGithub } from "@tabler/icons-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background glows */}
      <div
        className="hero-glow top-[-200px] left-[-100px]"
        style={{ background: "#3b82f6" }}
      />
      <div
        className="hero-glow top-[-100px] right-[-200px]"
        style={{ background: "#8b5cf6" }}
      />
      <div
        className="hero-glow bottom-[-200px] left-[30%]"
        style={{ background: "#06b6d4" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-12 md:pt-32 md:pb-16">
        {/* Badge */}
        <div
          className="flex justify-center mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border border-blue-500/20 bg-blue-500/10 text-blue-300">
            Open Source Desktop App
          </span>
        </div>

        {/* Heading */}
        <div
          className="text-center mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-none mb-2">
            <span className="gradient-text">Copilot</span>{" "}
            <span className="text-white">Ralph</span>
          </h1>
        </div>

        {/* Subtitle */}
        <p
          className="text-lg md:text-xl lg:text-2xl text-center max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
          style={{ color: "var(--text-secondary)", animationDelay: "0.3s" }}
        >
          A native desktop UI for GitHub Copilot. Plan, execute, and review —
          all in one place.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="https://github.com/ashiqsultan/copilot-ralph/releases/download/v1.0.0/CopilotRalph.dmg"
            className="btn-glow inline-flex items-center gap-2.5 px-8 py-4 text-white font-semibold rounded-2xl text-lg"
          >
            <IconBrandAppleFilled size={22} />
            Download for macOS
          </a>
          <a
            href="https://github.com/ashiqsultan/copilot-ralph"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-2xl text-lg border transition-all duration-300 hover:bg-white/5"
            style={{
              borderColor: "var(--border)",
              color: "var(--text-secondary)",
            }}
          >
            <IconBrandGithub size={22} />
            View on GitHub
          </a>
        </div>

        {/* Screenshot */}
        <div
          className="screenshot-frame animate-scale-in animate-float"
          style={{ animationDelay: "0.5s" }}
        >
          <img
            src="/screenshots/ss02.png"
            alt="Copilot Ralph Application Screenshot"
            className="w-full h-auto block"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in"
        style={{ animationDelay: "1.2s" }}
      >
        <div className="flex flex-col items-center gap-2 text-text-tertiary">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <IconArrowDown size={16} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}
