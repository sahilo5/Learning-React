import React from "react";
import { NavLink } from "react-router-dom";

export type NavItem = {
  label: string;
  path: string;
  icon?: React.ReactNode;
};

type SidebarProps = {
  navItems: NavItem[];
};

const Sidebar: React.FC<SidebarProps> = ({ navItems }) => {
  return (
    <div className="w-64 h-full bg-primary text-white shadow-lg flex flex-col">
      <div className="text-xl font-bold p-4 border-b border-light">EMS</div>
      <nav className="flex-1 p-2 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary transition ${
                isActive ? "bg-secondary text-white" : "text-light"
              }`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
