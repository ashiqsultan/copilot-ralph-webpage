import {
  IconCheckbox,
  IconGitCommit,
  IconFileCode,
  IconJson,
  IconTarget,
  IconBrain,
  IconLock,
  IconBolt,
} from "@tabler/icons-react";

export default function Features() {
  const features = [
    {
      icon: IconCheckbox,
      title: "Plan Mode",
      description:
        "Define all your requirements upfront in a structured plan. The AI processes the entire plan in one go, maintaining complete context and understanding of your project goals.",
    },
    {
      icon: IconGitCommit,
      title: "Git Integration",
      description:
        "Automatic git commits after each task completion. Track progress, review changes, and easily revert if needed. Every requirement gets its own commit.",
    },
    {
      icon: IconFileCode,
      title: "Integrated Diff View",
      description:
        "Full visibility into what changed after each task. Review file modifications in an intuitive diff view before accepting changes.",
    },
    {
      icon: IconJson,
      title: "JSON Storage",
      description:
        "All requirements, plans, and execution states are stored as plain JSON and text files. Complete transparency and easy debugging.",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Define Requirements",
      desc: "Add your requirements as simple JSON entries. Each requirement describes what you want to build.",
    },
    {
      num: "02",
      title: "Generate Plan",
      desc: "Let AI analyze all requirements together and create a comprehensive execution plan with full context.",
    },
    {
      num: "03",
      title: "Execute One by One",
      desc: "Ralph picks requirements sequentially, executes them in isolated contexts, and commits changes after each task.",
    },
    {
      num: "04",
      title: "Review & Iterate",
      desc: "Check git diffs, review changes, and add more requirements as needed. Everything is transparent and trackable.",
    },
  ];

  return (
    <div className="relative max-w-6xl mx-auto px-6 py-20">
      {/* Features Grid */}
      <div className="mb-28">
        <div className="text-center mb-14">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border mb-6"
            style={{
              borderColor: "var(--border)",
              color: "var(--accent-cyan)",
            }}
          >
            Features
          </span>
          <h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Everything You Need
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 group cursor-default"
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 p-3 rounded-xl transition-colors duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(16,185,129,0.12), rgba(14,165,233,0.12))",
                  }}
                >
                  <feature.icon
                    size={26}
                    style={{ color: "var(--accent-cyan)" }}
                  />
                </div>
                <div className="flex-1">
                  <h3
                    className="text-lg font-bold mb-2 transition-colors duration-300 group-hover:text-[#7dd3fc]"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Demo */}
      <div className="mb-28">
        <div className="text-center mb-14">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border mb-6"
            style={{
              borderColor: "var(--border)",
              color: "var(--accent-purple)",
            }}
          >
            Demo
          </span>
          <h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            See It In Action
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="relative" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/U796vzV5oXc"
                title="Ralph Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why Plan Mode Section */}
      <div className="mb-28">
        <div className="text-center mb-14">
          <h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Why <span className="gradient-text">Plan Mode</span> Matters
          </h2>
          <p
            className="text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Plan mode prevents context rot by letting the AI understand all your
            requirements together before execution. Instead of processing tasks
            one by one and losing the bigger picture, the AI creates a
            comprehensive plan upfront, then executes each task in isolation
            while maintaining awareness of the overall architecture. This
            results in consistent, well-thought-out implementations without
            context window overflow.
          </p>
        </div>
      </div>

      {/* How It Works */}
      <div>
        <div className="text-center mb-14">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border mb-6"
            style={{
              borderColor: "var(--border)",
              color: "var(--accent-blue)",
            }}
          >
            Workflow
          </span>
          <h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            How It Works
          </h2>
        </div>
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div
            className="absolute left-[27px] top-4 bottom-4 w-px"
            style={{
              background:
                "linear-gradient(to bottom, var(--accent-blue), var(--accent-purple), transparent)",
            }}
          />

          <div className="space-y-5">
            {steps.map((step, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 group cursor-default relative"
              >
                <div className="flex gap-5">
                  <div
                    className="flex-shrink-0 relative z-10 w-[54px] h-[54px] rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-300"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(14,165,233,0.15), rgba(20,184,166,0.15))",
                      color: "var(--accent-blue)",
                      border: "1px solid rgba(14,165,233,0.2)",
                    }}
                  >
                    {step.num}
                  </div>
                  <div className="flex-1 pt-1">
                    <h3
                      className="text-lg font-bold mb-2 transition-colors duration-300 group-hover:text-[#7dd3fc]"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
