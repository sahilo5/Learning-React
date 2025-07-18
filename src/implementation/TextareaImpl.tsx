import { useState } from "react";
import Textarea from "../components/Textarea";
import React from "react";

function TextareaImpl() {
  const [message, setMessage] = useState("");

  return (
    <div className="p-6 space-y-4 bg-light">
      <Textarea
        label="Message"
        value={message}
        onChange={setMessage}
        placeholder="Enter your message here..."
      />

      <div className="text-sm text-dark pt-4">
        Message: {message}
      </div>
    </div>
  );
}

export default TextareaImpl;
