import Memory from "./pages/Memory";
import AICommandCenter from "./pages/AICommandCenter";
import NotFound from "./pages/NotFound";
import Settings from "./pages/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Journal from "./pages/Journal";
import AICompanion from "./pages/AICompanion";
import BreathingExercise from "./pages/BreathingExercise";
import MoodAnalytics from "./pages/MoodAnalytics";
import Support from "./pages/Support";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/memory" element={<Memory />} />
        <Route path="/command-center" element={<AICommandCenter />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/ai-companion" element={<AICompanion />} />
        <Route path="/breathing" element={<BreathingExercise />} />
        <Route path="/analytics" element={<MoodAnalytics />} />
        <Route path="/support" element={<Support />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;