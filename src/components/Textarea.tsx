import React from "react";

type TextareaProps = {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  rows?: number;
  className?: string;
};

const Textarea: React.FC<TextareaProps> = ({
  label,
  placeholder = "",
  value,
  onChange,
  disabled = false,
  rows = 4,
  className = "",
}) => {
  return (
    <div className={`flex flex-col space-y-1 ${className}`}>
      {label && <label className="text-sm text-dark">{label}</label>}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        className={`
          px-3 py-2 text-sm rounded-md border border-secondary bg-white text-dark
          focus:outline-none focus:ring-2 focus:ring-primary
          disabled:opacity-50 disabled:cursor-not-allowed resize-none
        `}
      />
    </div>
  );
};

export default Textarea;
