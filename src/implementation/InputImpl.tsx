import { useState } from "react";
import Input from "../components/Input";
import React from "react";

function InputImpl() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="p-6 space-y-4 bg-light">
      <Input
        label="Name"
        value={name}
        onChange={setName}
        placeholder="Enter your name"
      />
      <Input
        type="email"
        label="Email"
        value={email}
        onChange={setEmail}
        placeholder="Enter your email"
      />
      <Input
        type="date"
        label="Date of Birth"
        value={date}
        onChange={setDate}
        placeholder="DD/MM/YYYY"
      />
      <Input
        type="password"
        label="Password"
        value={password}
        onChange={setPassword}
        placeholder="Enter your password"
      />

      <div className="text-sm text-dark space-y-1 pt-4">
        <div>Name: {name}</div>
        <div>Email: {email}</div>
        <div>Password: {password}</div>
      </div>
    </div>
  );
}

export default InputImpl;
