import React, { useCallback } from "react";

function Message({ message, isLastMessage }) {
  const setRef = useCallback((node) => {
    if (node) {
      node.scrollIntoView({ smooth: true });
    }
  }, []);
  return (
    <div
      className={`my-1 d-flex flex-column ${
        message.fromMe ? "align-self-end" : ""
      }`}
      ref={isLastMessage ? setRef : null}
    >
      <div
        className={`rounded px-2 py-1 ${
          message.fromMe ? "bg-primary text-white" : "border"
        }`}
      >
        {message.text}
      </div>
      <div className={`text-muted small ${message.fromMe ? "text-right" : ""}`}>
        {message.fromMe ? "You" : message.sender}
      </div>
    </div>
  );
}

export default Message;
