import React from "react";
import Label from "./Label";

type InputProps = {
  type?: "text" | "email" | "password" | "date";
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  className?: string;
};

const Input: React.FC<InputProps> = ({
  type = "text",
  label,
  placeholder = "",
  value,
  onChange,
  disabled = false,
  className = "",
}) => {
  return (
    <div className={`flex flex-col space-y-1 ${className}`}>
      {label && <Label text={label} status="Required" />}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className={`
          px-3 py-2 text-sm rounded-md border border-secondary bg-white text-dark 
          focus:outline-none focus:ring-2 focus:ring-primary
          disabled:opacity-50 disabled:cursor-not-allowed
        `}
      />
    </div>
  );
};

export default Input;
