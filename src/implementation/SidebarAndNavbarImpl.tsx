import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar, { NavItem } from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Home, Users, CalendarDays, Settings, LogIn, BowArrow, TabletsIcon, LoaderIcon, TestTube } from "lucide-react";

const SidebarImpl: React.FC = () => {

  const navItems: NavItem[] = [
    { label: "Dashboard", path: "/", icon: <Home className="w-4 h-4" /> },
    { label: "Employees", path: "/employees", icon: <Users className="w-4 h-4" /> },
    { label: "Attendance", path: "/attendance", icon: <CalendarDays className="w-4 h-4" /> },
    { label: "Settings", path: "/settings", icon: <Settings className="w-4 h-4" /> },
    { label: "Testing components", path: "/test", icon: <TestTube className="w-4 h-4" /> },
    { label: "Testing Page Loader", path: "/loading", icon: <LoaderIcon className="w-4 h-4" /> },
    { label: "Testing TabsPage", path: "/tabsPage", icon: <TabletsIcon className="w-4 h-4" /> },
    { label: "Testing BrowsePage", path: "/BrowsePage", icon: <BowArrow className="w-4 h-4" /> },
    { label: "LoginForm", path: "/loginPage", icon: <LogIn className="w-4 h-4" /> },
  ];
  
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar navItems={navItems} />

      {/* Main content area */}
      <div className="flex-1 flex flex-col bg-light overflow-hidden">
        {/* Navbar */}
        <Navbar />

        {/* Page content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default SidebarImpl;
