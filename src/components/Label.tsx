import React from "react";

type LabelProps = {
  text: string;
  icon?: React.ReactNode;
  status?: string; // "*", "Required", "Optional", etc.
  className?: string;
};

const Label: React.FC<LabelProps> = ({
  text,
  icon,
  status,
  className = "",
}) => {
  const showAsterisk =
    status === "*" || status?.toLowerCase() === "required";

  return (
    <div className={`flex items-center justify-between mb-1 ${className}`}>
      <div className="flex items-center space-x-1 text-sm text-dark font-medium">
        {icon && <span className="text-primary">{icon}</span>}
        <span>
          {text}
          {showAsterisk && <span className="text-red-500 ml-0.5">*</span>}
        </span>
      </div>
      {/* Optional: Show full status text on the right if not "*" */}
      {status && !showAsterisk && (
        <span className="text-xs text-red-500 italic">{status}</span>
      )}
    </div>
  );
};

export default Label;
