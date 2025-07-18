import React from "react";

type CardProps = {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = ({ title, value, icon, footer, className = "" }) => {
  return (
    <div
      className={`bg-white shadow rounded-lg p-4 border border-light text-dark ${className}`}
    >
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-sm font-medium text-dark">{title}</h4>
        {icon && <div className="text-primary">{icon}</div>}
      </div>
      <div className="text-2xl font-semibold text-dark">{value}</div>
      {footer && <div className="mt-2 text-xs text-accent">{footer}</div>}
    </div>
  );
};

export default Card;
