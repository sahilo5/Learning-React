import React from "react";
import Browse from "../components/Browse";
import ThreeDotDropdown from "../components/ThreeDotDropdown";
import Button from "../components/Button";
import { Plus, PlusCircleIcon, PlusIcon, PlusSquare } from "lucide-react";

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

  const options = [
    { label: "View Profile", href: "/profile" },
    { label: "Settings", href: "/settings" },
    { label: "External Link", href: "https://example.com", target: "_blank" },
  ];
  

const BrowsePage = () => {
  return (
    <div className="p-4">
      <Browse
      title="Test Browse"
      subtitle="This is a test browse"
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
        headerActions={
          <div className="flex items-center gap-2">
           <Button variant="secondary">{<PlusCircleIcon/>}</Button>
            
            <ThreeDotDropdown options={options} />
    
          </div>
        }
      />
    </div>
  );
};

export default BrowsePage;
