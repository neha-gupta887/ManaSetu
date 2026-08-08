import { useEffect, useState } from "react";
import AuthenticatedLayout from "../components/layout/AuthenticatedLayout";
import WelcomeHeader from "../components/dashboard/redesign/WelcomeHeader";
import MoodCheckinCTA from "../components/dashboard/redesign/MoodCheckinCTA";
import CurrentMood from "../components/dashboard/redesign/CurrentMood";
import QuickActionCards from "../components/dashboard/redesign/QuickActionCards";
import SupportResources from "../components/dashboard/redesign/SupportResources";
import DashboardHero from "../components/dashboard/DashboardHero";
import DashboardOverview from "../components/dashboard/DashboardOverview";
import MoodAnalyticsChart from "../components/dashboard/MoodAnalyticsChart";
import QuickActions from "../components/dashboard/QuickActions";
import WellnessGarden from "../components/dashboard/WellnessGarden";
import RecentActivity from "../components/dashboard/RecentActivity";
import { getDashboardStats } from "../services/dashboardService";

function Dashboard() {
  const [stats, setStats] = useState({});
  const [greeting, setGreeting] = useState("Welcome back");
  const [dailyMessage, setDailyMessage] = useState(
    "Take a moment for yourself today."
  );

  useEffect(() => {
    const fetchStats = async () => {
      const data = await getDashboardStats();
      setStats(data);
    };

    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");

    fetchStats();
  }, []);

  return (
    <AuthenticatedLayout>
      <div className="space-y-8">
        <WelcomeHeader />
        <DashboardHero
          stats={stats}
          greeting={greeting}
          dailyMessage={dailyMessage}
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="space-y-8 lg:col-span-3">
            <DashboardOverview stats={stats} />
            <MoodAnalyticsChart />
            <QuickActions />
          </div>
          <div className="space-y-8 lg:col-span-2">
            <MoodCheckinCTA />
            <QuickActionCards />
            <WellnessGarden />
            <RecentActivity />
          </div>
          <div className="space-y-8">
            <CurrentMood />
            <SupportResources />
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}

export default Dashboard;


