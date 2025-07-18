import React, { useState, ReactNode } from "react";

type Tab = {
  label: string;
  icon?: ReactNode;
};

type TabsProps = {
  tabs: Tab[];
  defaultIndex?: number;
  children: (activeIndex: number) => ReactNode;
};

const Tabs: React.FC<TabsProps> = ({ tabs, defaultIndex = 0, children }) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div className="flex space-x-4 border-b border-light mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-sm font-medium rounded-t ${
              activeIndex === index
                ? "text-primary border-b-2 border-primary"
                : "text-gray-500 hover:text-primary"
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <div className="flex items-center space-x-1">
              {tab.icon && <span>{tab.icon}</span>}
              <span>{tab.label}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Active Tab Content */}
      <div>{children(activeIndex)}</div>
    </div>
  );
};

export default Tabs;
