import AuthenticatedLayout from "../components/layout/AuthenticatedLayout";
import WelcomeHeader from "../components/dashboard/redesign/WelcomeHeader";
import MoodCheckinCTA from "../components/dashboard/redesign/MoodCheckinCTA";
import CurrentMood from "../components/dashboard/redesign/CurrentMood";
import QuickActionCards from "../components/dashboard/redesign/QuickActionCards";
import SupportResources from "../components/dashboard/redesign/SupportResources";
import RecentActivity from "../components/dashboard/RecentActivity";

function Dashboard() {
  return (
    <AuthenticatedLayout>
      <div className="space-y-8">
        <WelcomeHeader />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <MoodCheckinCTA />
            <QuickActionCards />
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


