function AIWorkflow() {
  const agents = [
    {
      icon: "🧠",
      title: "Mood Agent",
      description: "Understands your emotional patterns",
    },
    {
      icon: "😴",
      title: "Sleep Agent",
      description: "Looks at your rest and recovery",
    },
    {
      icon: "📚",
      title: "Study Agent",
      description: "Helps balance study and wellbeing",
    },
  ];

  return (
    <section className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 sm:p-7">

      {/* Header */}
      <div className="flex items-start gap-3">

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-lg dark:bg-emerald-950/40">
          🤖
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-400">
            Behind the scenes
          </p>

          <h2 className="mt-1 text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
            How ManaSetu works
          </h2>

          <p className="mt-1 max-w-xl text-sm leading-6 text-slate-500 dark:text-slate-400">
            Different wellness agents work together to understand your needs
            and create a more personalized experience.
          </p>
        </div>

      </div>

      {/* Workflow */}
      <div className="mt-8">

        {/* Student */}
        <WorkflowNode
          icon="👤"
          title="You"
          description="Your moods, habits and wellbeing signals"
          active
        />

        <Connector />

        {/* Coordinator */}
        <WorkflowNode
          icon="🤖"
          title="Mana AI Coordinator"
          description="Brings your wellness information together"
          highlight
        />

        <Connector />

        {/* Agents */}
        <div className="grid gap-3 md:grid-cols-3">

          {agents.map((agent) => (
            <AgentCard
              key={agent.title}
              icon={agent.icon}
              title={agent.title}
              description={agent.description}
            />
          ))}

        </div>

        <Connector />

        {/* Crisis */}
        <WorkflowNode
          icon="🛡️"
          title="Crisis & Safety Agent"
          description="Helps identify situations that may need additional support"
          safety
        />

        <Connector />

        {/* Wellness Score */}
        <WorkflowNode
          icon="💚"
          title="Wellness Score"
          description="A simple snapshot of your current wellbeing"
        />

        <Connector />

        {/* Final output */}
        <WorkflowNode
          icon="🌱"
          title="Personalized Wellness Plan"
          description="Gentle recommendations based on your journey"
          final
        />

      </div>

      {/* Footer note */}
      <div className="mt-7 flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-white/[0.025]">

        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white text-sm shadow-sm dark:bg-slate-800">
          ✨
        </div>

        <div>
          <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">
            Designed around you
          </p>

          <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
            ManaSetu brings these signals together so your wellness journey
            feels more personal, supportive and easier to understand.
          </p>
        </div>

      </div>

    </section>
  );
}

function WorkflowNode({
  icon,
  title,
  description,
  active,
  highlight,
  safety,
  final,
}) {
  let iconStyle =
    "bg-slate-50 text-slate-600 dark:bg-slate-800 dark:text-slate-300";

  if (active) {
    iconStyle =
      "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400";
  }

  if (highlight) {
    iconStyle =
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300";
  }

  if (safety) {
    iconStyle =
      "bg-amber-50 text-amber-600 dark:bg-amber-950/30 dark:text-amber-400";
  }

  if (final) {
    iconStyle =
      "bg-teal-50 text-teal-600 dark:bg-teal-950/30 dark:text-teal-400";
  }

  return (
    <div
      className={`mx-auto flex w-full max-w-xl items-center gap-4 rounded-2xl border p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm ${
        highlight
          ? "border-emerald-200 bg-emerald-50/50 dark:border-emerald-900/40 dark:bg-emerald-950/20"
          : "border-slate-100 bg-slate-50/60 dark:border-slate-800 dark:bg-white/[0.025]"
      }`}
    >

      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg ${iconStyle}`}
      >
        {icon}
      </div>

      <div className="min-w-0">

        <h3 className="text-sm font-semibold text-slate-800 dark:text-white">
          {title}
        </h3>

        <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
          {description}
        </p>

      </div>

    </div>
  );
}

function AgentCard({ icon, title, description }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4 transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-sm dark:border-slate-800 dark:bg-white/[0.025] dark:hover:bg-white/[0.04]">

      <div className="flex items-center gap-3">

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-lg shadow-sm dark:bg-slate-800">
          {icon}
        </div>

        <div className="min-w-0">

          <h3 className="text-sm font-semibold text-slate-800 dark:text-white">
            {title}
          </h3>

          <p className="mt-1 text-[11px] leading-4 text-slate-400">
            {description}
          </p>

        </div>

      </div>

    </div>
  );
}

function Connector() {
  return (
    <div className="flex h-8 items-center justify-center">
      <div className="h-full w-px bg-slate-200 dark:bg-slate-700" />
    </div>
  );
}

export default AIWorkflow;