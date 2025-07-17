import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  className = "",
}) => {
  let variantClass = "";

  switch (variant) {
    case "primary":
      variantClass = "bg-primary hover:opacity-90 text-white";
      break;
    case "secondary":
      variantClass = "bg-light text-dark border border-secondary hover:bg-gray-200";
      break;
    case "danger":
      variantClass = "bg-red-600 hover:bg-red-700 text-white";
      break;
    default:
      variantClass = "bg-primary hover:opacity-90 text-white";
  }

  const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-md font-medium text-sm transition duration-200 ${variantClass} ${disabledClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
