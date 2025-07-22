// pages/LoginForm.tsx
import React, { useState } from "react";
import Form from "../../components/Form";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useLoginForm } from "./LoginFrom.hooks";
import { stringify } from "postcss";

const LoginForm = () => {

    const {
        username,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleRegister,
      } = useLoginForm();

    return (    
        <div className="max-w-sm mx-auto mt-10 bg-white shadow p-6 rounded border border-light">
            <h2 className="text-xl font-semibold mb-4 text-dark">Login</h2>
            <Form
                onSubmit={handleLogin}
                submitLabel="Login"
                fields={[
                    {
                        type: "text",
                        name: "text",
                        label: "Username",
                        value: username,
                        onChange: setEmail,
                        placeholder: "Enter your email",
                    },
                    {
                        type: "password",
                        name: "password",
                        label: "Password",
                        value: password,
                        onChange: setPassword,
                        placeholder: "Enter your password",
                    },
                ]}
            />

            {/* Extra actions below form */}
            <div className="mt-4 flex flex-col items-center space-y-2">
                <Button variant="secondary" onClick={handleRegister}>
                    Register
                </Button>
                <button
                    type="button"
                    className="text-sm text-primary hover:underline"
                    onClick={() => console.log("Forgot Password clicked")}
                >
                    Forgot Password?
                </button>
            </div>
        </div>
    );
};

export default LoginForm;
