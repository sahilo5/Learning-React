// pages/LoginForm.hooks.ts
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../utils/api"; // path to your API utility

export const useLoginForm = () => {
  const navigate = useNavigate();
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await api("/auth/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
      });

      console.log("Login successful:", response);

      // To store token, redirect, or show message here
      localStorage.setItem("token", response.accessToken);
      localStorage.setItem("username", response.username    );

      navigate("/test"); 
    } catch (err: any) {
      alert(err.message);
    }
  };

  const handleRegister = () => {
    navigate("/registerPage");
  };

  return {
    username,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleRegister,
  };
};
