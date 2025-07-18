import React from "react";
import Loader from "../components/Loader";

const LoadingPage = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-light">
      <Loader size={40} color="text-primary" />
    </div>
  );
};

export default LoadingPage;
