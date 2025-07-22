import React, { useState } from "react";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import Dropdown from "../components/Dropdown";
import PicklistImpl from "../implementation/PicklistImpl";
import InputImpl from "../implementation/InputImpl";
import TextareaImpl from "../implementation/TextareaImpl";
import LabelImpl from "../implementation/LabelImpl";
import CardImpl from "../implementation/CardImpl";
import BadgeImpl from "../implementation/BadgeImpl";
import Loader from "../components/Loader";

const TestPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [role, setRole] = useState("admin");

  const roleOptions = [
    { label: "Admin", value: "admin" },
    { label: "Manager", value: "manager" },
    { label: "Employee", value: "employee" },
  ];

  return (
    <div className="p-6 space-y-6 text-dark bg-light min-h-screen">
      <div>
        <h1>{localStorage.getItem("username")}</h1>
      </div>
      <div className="space-x-3">
        <Button onClick={() => alert("Primary clicked")}>Add Employee</Button>
        <Button variant="secondary">Cancel</Button>
        <Button variant="danger">Delete</Button>
        <Button disabled>Disabled</Button>
      </div>

      <div>
        <h1 className="text-indigo-500 font-bold text-2xl">Checkbox</h1>
        <Checkbox
          label="Accept Terms and Conditions"
          checked={isChecked}
          onChange={setIsChecked}
        />
        <div className="text-sm">Checked: {isChecked ? "Yes" : "No"}</div>
      </div>

      <div>
        <h1 className="text-indigo-500 font-bold text-2xl">Dropdown</h1>
        <Dropdown
          label="Select Role"
          options={roleOptions}
          value={role}
          onChange={setRole}
        />
        <div className="text-sm">Selected: {role}</div>
      </div>

      <div>
        <h1 className="text-indigo-500 font-bold text-2xl">Picklist</h1>
        <PicklistImpl />
      </div>

      <div>
        <h1 className="text-indigo-500 font-bold text-2xl">Input</h1>
        <InputImpl />
      </div>

      <div>
        <h1 className="text-indigo-500 font-bold text-2xl">Textarea</h1>
        <TextareaImpl />
      </div>

      <div>
        <h1 className="text-indigo-500 font-bold text-2xl">Labels</h1>
        <LabelImpl />
      </div>

      <div>
        <h1 className="text-indigo-500 font-bold text-2xl">Cards</h1>
        <CardImpl />
      </div>

      <div>
        <h1 className="text-indigo-500 font-bold text-2xl">Badges</h1>
        <BadgeImpl />
      </div>

      <button
  disabled
  className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded"
>
  <Loader size={16} color="text-white" />
  Saving...
</button>

    </div>
  );
};

export default TestPage;
