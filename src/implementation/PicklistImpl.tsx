import { useEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import React from "react";

type Department = {
  id: string;
  name: string;
};

function PicklistImpl() {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    // Simulate API call
    const fetchDepartments = async () => {
      // Commented for now, simulate fetch
      // const response = await fetch('/api/departments');
      // const data = await response.json();
      // setDepartments(data);

      // TEMP hardcoded
      const mockData = [
        { id: "hr", name: "HR" },
        { id: "sales", name: "Sales" },
        { id: "it", name: "IT" },
      ];
      setDepartments(mockData);
    };

    fetchDepartments();
  }, []);

  const dropdownOptions = departments.map((dept) => ({
    value: dept.id,
    label: dept.name,
  }));

  return (
    <div className="p-6 space-y-4 bg-light">
      <Dropdown
        label="Select Department"
        options={dropdownOptions}
        value={selected}
        onChange={setSelected}
      />
      <div className="text-sm text-dark">Selected: {selected}</div>
    </div>
  );
}


export default PicklistImpl