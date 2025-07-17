import React from "react";
import Button from "./components/Button";

function App() {
  return (
    <div className="p-6 space-x-3 bg-light min-h-screen">
      <Button onClick={() => alert("Primary clicked")}>Add Employee</Button>
      <Button variant="secondary">Cancel</Button>
      <Button variant="danger">Delete</Button>
      <Button disabled>Disabled</Button>
    </div>
  );
}



export default App
