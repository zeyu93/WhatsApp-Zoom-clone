import React from "react";
import Message from "./Message";

function MessageList({ selectedConversation }) {
  return (
    <div className='d-flex flex-column align-items-start justify-content-end px-3'>
      {selectedConversation.messages.map((message, index) => {
        const isLastMessage =
          selectedConversation.messages.length - 1 === index;
        return (
          <Message
            isLastMessage={isLastMessage}
            key={index}
            message={message}
          />
        );
      })}
    </div>
  );
}

export default MessageList;
