import React from "react";
import Browse from "../components/Browse";

const data = [
  { name: "John Doe", department: "HR", status: "Active" },
  { name: "Jane Smith", department: "IT", status: "Inactive" },
  { name: "Alice", department: "Finance", status: "Active" },
];

const columns: { header: string; accessor: keyof typeof data[0] }[] = [
    { header: "Name", accessor: "name" },
    { header: "Department", accessor: "department" },
    { header: "Status", accessor: "status" },
  ];
  

const BrowsePage = () => {
  return (
    <div className="p-4">
      <Browse
        data={data}
        columns={columns}
        footerContent={
          <div className="flex justify-between items-center">
            <span>Total Employees: {data.length}</span>
            <input
              type="number"
              value={data.length}
              className="border px-2 py-1 rounded w-20"
              readOnly
            />
          </div>
        }
      />
    </div>
  );
};

export default BrowsePage;
