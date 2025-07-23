import React from "react";

type ToastType = "success" | "error" | "info";

type ToastProps = {
  id: string;
  message: string;
  type?: ToastType;
  onClose: (id: string) => void;
};

const typeStyles: Record<ToastType, string> = {
  success: "bg-green-100 text-green-800 border-green-400",
  error: "bg-red-100 text-red-800 border-red-400",
  info: "bg-blue-100 text-blue-800 border-blue-400",
};

const Toast: React.FC<ToastProps> = ({ id, message, type = "info", onClose }) => {
  return (
    <div
      className={`border-l-4 px-4 py-3 rounded shadow-md mb-3 w-full max-w-sm ${typeStyles[type]}`}
    >
      <div className="flex justify-between items-start gap-3">
        <div>{message}</div>
        <button onClick={() => onClose(id)} className=" text-gray-500 hover:text-gray-700">
          ✕
        </button>
      </div>
    </div>
  );
};

export default Toast;
