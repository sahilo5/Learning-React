import React from "react";

type CheckboxProps = {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  id?: string;
  className?: string;
};

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  disabled = false,
  id,
  className = "",
}) => {
  const checkboxId = id || `checkbox-${label?.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <label htmlFor={checkboxId} className={`flex items-center space-x-2 cursor-pointer ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}>
      <input
        id={checkboxId}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        className="hidden"
      />
      <div
        className={`w-5 h-5 flex items-center justify-center rounded border-2 border-primary
          ${checked ? "bg-primary" : "bg-white"} transition duration-150`}
      >
        {checked && (
          <svg
            className="w-6 h-6 ml-0.5 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6.173 10.977l-2.12-2.121L2.5 10.409l3.673 3.673 7.364-7.364-1.555-1.555-5.809 5.814z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
      {label && <span className="text-sm text-dark">{label}</span>}
    </label>
  );
};

export default Checkbox;
