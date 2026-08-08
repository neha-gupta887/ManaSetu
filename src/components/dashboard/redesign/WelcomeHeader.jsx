import useAuth from "../../../hooks/useAuth";

function WelcomeHeader() {
  const { user } = useAuth();

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
        {getGreeting()}, {user?.displayName?.split(" ")[0] || "Student"}!
      </h1>
      <p className="mt-2 text-slate-500 dark:text-slate-400">
        Welcome to your personal wellness space. Let's take a moment for your
        wellbeing.
      </p>
    </div>
  );
}

export default WelcomeHeader;
