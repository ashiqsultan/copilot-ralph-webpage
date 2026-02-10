import { IconCheckbox, IconGitCommit, IconFileCode, IconJson, IconTarget, IconBrain, IconLock, IconBolt } from '@tabler/icons-react';

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

  const planBenefits = [
    {
      icon: IconTarget,
      title: 'Prevents Context Rot',
      description: 'When you execute requirements one by one without planning, the AI loses track of the bigger picture. Each task becomes isolated, leading to inconsistent implementations. Plan mode ensures the AI understands all requirements together, maintaining coherent architecture throughout.'
    },
    {
      icon: IconBrain,
      title: 'Better Planning & Architecture',
      description: 'With all requirements visible upfront, the AI can make smarter architectural decisions. It considers dependencies between tasks, reuses code appropriately, and designs solutions that work well together rather than solving each problem in isolation.'
    },
    {
      icon: IconLock,
      title: 'Task Isolation in Execution',
      description: 'After planning, each requirement runs in a separate execution context. This prevents context window overflow and keeps the AI focused on one task at a time, while still maintaining awareness of the overall plan. It\'s the best of both worlds.'
    },
    {
      icon: IconBolt,
      title: 'Reduced Context Confusion',
      description: 'Large context windows with multiple unrelated conversations lead to confusion and mistakes. Plan mode creates a clear separation of concerns: plan everything once, then execute systematically. The AI knows exactly what it needs to do and in what order.'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Why Plan Mode Section */}
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-text-primary mb-6 text-center animate-fade-in-up">
          Why Plan Mode Matters
        </h2>
        <p className="text-lg text-text-secondary mb-8 text-center max-w-3xl mx-auto">
          Plan mode is the secret sauce that makes Copilot Ralph effective. Here's why:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {planBenefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-bg-card rounded-xl p-6 hover:bg-bg-card/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-twitter-blue/10 p-3 rounded-lg group-hover:bg-twitter-blue/20 transition-colors">
                  <benefit.icon size={24} className="text-twitter-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-twitter-blue transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
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
              className="bg-bg-card rounded-xl p-6 hover:bg-bg-card/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group"
            >
              <div className="flex items-start gap-4">
                <div className="bg-twitter-blue/10 p-3 rounded-lg group-hover:bg-twitter-blue/20 transition-colors">
                  <feature.icon size={28} className="text-twitter-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-twitter-blue transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
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
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="bg-bg-card rounded-xl p-6 hover:bg-bg-card/80 transition-all duration-300 hover:scale-[1.02] group">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-twitter-blue/10 flex items-center justify-center text-xl font-bold text-twitter-blue group-hover:bg-twitter-blue group-hover:text-white transition-colors">1</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-twitter-blue transition-colors">Define Requirements</h3>
                <p className="text-text-secondary leading-relaxed">
                  Add your requirements as simple JSON entries. Each requirement describes what you want to build.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-bg-card rounded-xl p-6 hover:bg-bg-card/80 transition-all duration-300 hover:scale-[1.02] group">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-twitter-blue/10 flex items-center justify-center text-xl font-bold text-twitter-blue group-hover:bg-twitter-blue group-hover:text-white transition-colors">2</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-twitter-blue transition-colors">Generate Plan (Optional but Recommended)</h3>
                <p className="text-text-secondary leading-relaxed">
                  Let AI analyze all requirements together and create a comprehensive execution plan with full context.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-bg-card rounded-xl p-6 hover:bg-bg-card/80 transition-all duration-300 hover:scale-[1.02] group">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-twitter-blue/10 flex items-center justify-center text-xl font-bold text-twitter-blue group-hover:bg-twitter-blue group-hover:text-white transition-colors">3</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-twitter-blue transition-colors">Execute One by One</h3>
                <p className="text-text-secondary leading-relaxed">
                  Ralph picks requirements sequentially, executes them in isolated contexts, and commits changes after each task.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-bg-card rounded-xl p-6 hover:bg-bg-card/80 transition-all duration-300 hover:scale-[1.02] group">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-twitter-blue/10 flex items-center justify-center text-xl font-bold text-twitter-blue group-hover:bg-twitter-blue group-hover:text-white transition-colors">4</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-twitter-blue transition-colors">Review & Iterate</h3>
                <p className="text-text-secondary leading-relaxed">
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
