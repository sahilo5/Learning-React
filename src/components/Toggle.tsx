import React from "react";

type ToggleProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  activeLabel?: string;
  inactiveLabel?: string;
};

const Toggle: React.FC<ToggleProps> = ({
  checked,
  onChange,
  label,
  activeLabel = "Active",
  inactiveLabel = "Inactive",
}) => {
  return (
    <div className="flex items-center gap-3">
      {label && <span className="text-sm font-medium text-dark">{label}</span>}
      <div
        onClick={() => onChange(!checked)}
        className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-all duration-300 ${
          checked ? "bg-primary" : "bg-gray-300"
        }`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
            checked ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </div>
      <span className={`text-sm font-medium ${checked ? "text-primary" : "text-gray-500"}`}>
        {checked ? activeLabel : inactiveLabel}
      </span>
    </div>
  );
};

export default Toggle;
