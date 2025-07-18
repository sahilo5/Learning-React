import { UserIcon } from "lucide-react";
import Label from "../components/Label";
import React from "react";

function LabelImpl() {
  return (
    <div className="p-6 space-y-4 bg-light">
      <Label text="Full Name" status="required" />
      <Label text="Email Address" />
      <Label text="Username" icon={<UserIcon className="w-4 h-4" />} status="Optional" />
    </div>
  );
}

export default LabelImpl;
