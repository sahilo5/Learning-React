import React from "react";

type BadgeProps = {
  text: string;
  variant?: "success" | "danger" | "warning" | "info" | "neutral";
  className?: string;
};

const variantStyles: Record<Required<BadgeProps>["variant"], string> = {
  success: "bg-green-100 text-green-800",
  danger: "bg-red-100 text-red-800",
  warning: "bg-yellow-100 text-yellow-800",
  info: "bg-blue-100 text-blue-800",
  neutral: "bg-gray-100 text-gray-800",
};

const Badge: React.FC<BadgeProps> = ({
  text,
  variant = "neutral",
  className = "",
}) => {
  return (
    <span
      className={`px-2 py-0.5 text-xs font-medium rounded-full ${variantStyles[variant]} ${className}`}
    >
      {text}
    </span>
  );
};

export default Badge;
