import React from "react";
import { Bell, UserCircle2 } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <header className="w-full h-15 flex items-center justify-between px-6 bg-white shadow border-b border-light">
      {/* Logo / Title */}
      <div className="text-xl font-semibold text-dark">Employee Dashboard</div>

      {/* Right Side: Notifications + User */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <button className="relative text-dark hover:text-primary">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500" />
        </button>

        {/* User Avatar / Name */}
        <div className="flex items-center space-x-2">
          <UserCircle2 className="w-6 h-6 text-dark" />
          <span className="text-sm text-dark">Sahil Deshmukh</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
