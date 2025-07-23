import React, { useState } from "react";
import Toggle from "../components/Toggle";

const ToggleImpl = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="p-4">
      <Toggle
        checked={isActive}
        onChange={setIsActive}
        label="Status"
        activeLabel="Active"
        inactiveLabel="Inactive"
      />
    </div>
  );
};

export default ToggleImpl;
