import React from "react";

type Option = {
  label: string;
  value: string;
};

type DropdownProps = {
  label?: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  className?: string;
};

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  value,
  onChange,
  disabled = false,
  className = "",
}) => {
  return (
    <div className={`relative flex flex-col space-y-1 ${className}`}>
  {label && <label className="text-sm text-dark">{label}</label>}
  
  <div className="relative">
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      className={`
        appearance-none w-full
        px-3 py-2 pr-10 text-sm rounded-md border border-secondary bg-white text-dark
        focus:outline-none focus:ring-2 focus:ring-primary
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-all
      `}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>

    {/* Chevron Icon */}
    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
      <svg
        className="w-4 h-4 text-dark transition-transform duration-200 peer-focus:rotate-180"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
</div>

  );
};

export default Dropdown;
