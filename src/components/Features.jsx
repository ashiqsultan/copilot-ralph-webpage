import { IconCheckbox, IconGitCommit, IconFileCode, IconJson } from '@tabler/icons-react';

export default function Features() {
  const features = [
    {
      icon: IconCheckbox,
      title: 'Plan Mode',
      description: 'Define all your requirements upfront in a structured plan. The AI processes the entire plan in one go, maintaining complete context and understanding of your project goals.'
    },
    {
      icon: IconGitCommit,
      title: 'Git Integration',
      description: 'Automatic git commits after each task completion. Track progress, review changes, and easily revert if needed. Every requirement gets its own commit.'
    },
    {
      icon: IconFileCode,
      title: 'Integrated Diff View',
      description: 'Full visibility into what changed after each task. Review file modifications in an intuitive diff view before accepting changes.'
    },
    {
      icon: IconJson,
      title: 'JSON Storage',
      description: 'All requirements, plans, and execution states are stored as plain JSON and text files. Complete transparency and easy debugging.'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Why Plan Mode Section */}
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-text-primary mb-6 text-center">
          Why Plan Mode Matters
        </h2>
        <div className="max-w-4xl mx-auto bg-bg-dark border border-border rounded-xl p-8">
          <p className="text-lg text-text-secondary mb-4">
            Plan mode is the secret sauce that makes Copilot Ralph effective. Here's why:
          </p>
          <div className="space-y-4 text-text-secondary">
            <div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">🎯 Prevents Context Rot</h3>
              <p>
                When you execute requirements one by one without planning, the AI loses track of the bigger picture. 
                Each task becomes isolated, leading to inconsistent implementations. Plan mode ensures the AI understands 
                all requirements together, maintaining coherent architecture throughout.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">🧠 Better Planning & Architecture</h3>
              <p>
                With all requirements visible upfront, the AI can make smarter architectural decisions. It considers 
                dependencies between tasks, reuses code appropriately, and designs solutions that work well together 
                rather than solving each problem in isolation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">🔒 Task Isolation in Execution</h3>
              <p>
                After planning, each requirement runs in a separate execution context. This prevents context window 
                overflow and keeps the AI focused on one task at a time, while still maintaining awareness of the 
                overall plan. It's the best of both worlds.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">⚡ Reduced Context Confusion</h3>
              <p>
                Large context windows with multiple unrelated conversations lead to confusion and mistakes. Plan mode 
                creates a clear separation of concerns: plan everything once, then execute systematically. The AI 
                knows exactly what it needs to do and in what order.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-text-primary mb-12 text-center">
          Key Features
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-bg-dark border border-border rounded-xl p-6 hover:border-twitter-blue-light transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="bg-twitter-blue-light/10 p-3 rounded-lg">
                  <feature.icon size={28} className="text-twitter-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="mt-20">
        <h2 className="text-4xl font-bold text-text-primary mb-8 text-center">
          How It Works
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-bg-dark border border-border rounded-xl p-6">
            <div className="flex gap-4">
              <div className="text-2xl font-bold text-twitter-blue min-w-[2rem]">1</div>
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">Define Requirements</h3>
                <p className="text-text-secondary">
                  Add your requirements as simple JSON entries. Each requirement describes what you want to build.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-bg-dark border border-border rounded-xl p-6">
            <div className="flex gap-4">
              <div className="text-2xl font-bold text-twitter-blue min-w-[2rem]">2</div>
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">Generate Plan (Optional but Recommended)</h3>
                <p className="text-text-secondary">
                  Let AI analyze all requirements together and create a comprehensive execution plan with full context.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-bg-dark border border-border rounded-xl p-6">
            <div className="flex gap-4">
              <div className="text-2xl font-bold text-twitter-blue min-w-[2rem]">3</div>
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">Execute One by One</h3>
                <p className="text-text-secondary">
                  Ralph picks requirements sequentially, executes them in isolated contexts, and commits changes after each task.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-bg-dark border border-border rounded-xl p-6">
            <div className="flex gap-4">
              <div className="text-2xl font-bold text-twitter-blue min-w-[2rem]">4</div>
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">Review & Iterate</h3>
                <p className="text-text-secondary">
                  Check git diffs, review changes, and add more requirements as needed. Everything is transparent and trackable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
