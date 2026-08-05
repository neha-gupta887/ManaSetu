function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`
        rounded-3xl
        border border-white/20
        bg-white/70
        dark:bg-gray-900/70
        backdrop-blur-xl
        shadow-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-2xl
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default GlassCard;