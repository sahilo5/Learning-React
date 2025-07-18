import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SidebarImpl from "./implementation/SidebarAndNavbarImpl";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Attendance from "./pages/Attendance";
import Settings from "./pages/Settings";
import TestPage from "./pages/TestPage"; // <-- your component testing
import LoadingPage from "./implementation/LoadingPage";
import TabsPage from "./implementation/TabsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SidebarImpl />}>
          <Route index element={<Dashboard />} />
          <Route path="employees" element={<Employees />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="settings" element={<Settings />} />
          <Route path="test" element={<TestPage />} /> {/* testing UI */}
          <Route path="loading" element={<LoadingPage />} /> {/* testing UI */}
          <Route path="tabsPage" element={<TabsPage />} /> {/* testing UI */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
