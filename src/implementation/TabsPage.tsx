import React from "react";
import { Tabs, Tab } from "../components/Tabs";

const EmployeesTabsDemo = () => {
  return (
    <div className="p-4">
      <Tabs defaultIndex={0}>
        <Tab index={0} label="Employees">
          <div>Employee Component Goes Here</div>
        </Tab>
        <Tab index={1} label="Departments">
          <div>Departments View</div>
        </Tab>
        <Tab index={2} label="Leaves">
          <div>Leave Request List</div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default EmployeesTabsDemo;
