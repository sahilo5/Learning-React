// pages/RegisterForm.tsx
import React, { useState } from "react";
import Form from "../../components/Form";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [agree, setAgree] = useState(false);
  const [gender, setGender] = useState("male");

  const handleRegister = () => {
    console.log("Registering with:", { email, password, dob, gender, agree });
    // Add validation or API call
  };

  return (
    <div className="max-w-sm mx-auto mt-10 bg-white shadow p-6 rounded border border-light">
      <h2 className="text-xl font-semibold mb-4 text-dark">Register</h2>
      <Form
        onSubmit={handleRegister}
        submitLabel="Register"
        fields={[
          {
            type: "email",
            name: "email",
            label: "Email",
            value: email,
            onChange: setEmail,
            placeholder: "Your email",
          },
          {
            type: "password",
            name: "password",
            label: "Password",
            value: password,
            onChange: setPassword,
            placeholder: "Choose a password",
          },
          {
            type: "date",
            name: "dob",
            label: "Date of Birth",
            value: dob,
            onChange: setDob,
          },
          {
            type: "dropdown",
            name: "gender",
            label: "Gender",
            value: gender,
            onChange: setGender,
            options: [
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
              { label: "Other", value: "other" },
            ],
          },
          {
            type: "checkbox",
            name: "agree",
            label: "I agree to the terms",
            checked: agree,
            onChange: setAgree,
          },
        ]}
      />
    </div>
  );
};

export default RegisterForm;
