export function getEmergencySupport(result) {
  const support = {
    show: false,
    level: "Safe",
    title: "",
    message: "",
    actions: [],
  };

  // Crisis Agent Trigger
  if (result.crisis) {
    support.show = true;
    support.level = "High";

    support.title = "🚨 Immediate Emotional Support";

    support.message =
      "ManaSetu detected that you may be experiencing emotional distress. You don't have to handle this alone.";

    support.actions = [
      "📞 Contact a trusted family member or friend.",
      "🏥 Reach out to your university counselor.",
      "💙 Practice a guided breathing exercise.",
      "🚶 Take a short walk in a safe environment.",
    ];
  }

  // Burnout Trigger
  else if (
    result.burnout &&
    result.burnout.risk === "High"
  ) {
    support.show = true;
    support.level = "Moderate";

    support.title = "⚠ Burnout Alert";

    support.message =
      "Your burnout risk is high. Taking preventive steps now may help improve your wellbeing.";

    support.actions = [
      "😴 Get sufficient sleep tonight.",
      "🍎 Eat a healthy meal and stay hydrated.",
      "📚 Reduce study workload for a while.",
      "🧘 Practice mindfulness for 10 minutes.",
    ];
  }

  return support;
}
