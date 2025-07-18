import React from "react";

type LoaderProps = {
  size?: number; // size in px
  color?: string; // tailwind text color like 'text-primary'
};

const Loader: React.FC<LoaderProps> = ({ size = 24, color = "text-primary" }) => {
  return (
    <div
      className={`animate-spin rounded-full border-3 border-t-transparent ${color}`}
      style={{
        width: size,
        height: size,
        borderRightColor: "transparent",
      }}
    />
  );
};

export default Loader;
