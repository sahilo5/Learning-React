import React from "react";
import Tabs from "../components/Tabs";

function TabsPage() {
  const tabList = [
    { label: "Employees" },
    { label: "Departments" },
    { label: "Leave Requests" },
  ];

  return (
    <div className="p-4">
      <Tabs tabs={tabList} defaultIndex={0}>
        {(activeIndex) => (
          <>
            {activeIndex === 0 && <div>Employee List Goes Here</div>}
            {activeIndex === 1 && <div>Department View</div>}
            {activeIndex === 2 && <div>Leave Management</div>}
          </>
        )}
      </Tabs>
    </div>
  );
};

export default TabsPage;
