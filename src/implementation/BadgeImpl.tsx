import React from "react";
import Badge from "../components/Badge";

function BadgeImpl() {
  return (
    <div className="p-6 space-x-2 bg-light">
      <Badge text="Active" variant="success" />
      <Badge text="Inactive" variant="danger" />
      <Badge text="Pending" variant="warning" />
      <Badge text="Info" variant="info" />
      <Badge text="Neutral" />
    </div>
  );
}

export default BadgeImpl;
