import React from "react";
import { ListGroup } from "react-bootstrap";
import { useConversation } from "../contexts/ConversationsProvider";

function Conversations() {
  const { conversations, selectConversationIndex } = useConversation();
  const displayNames = (array) => {
    const names = array.map((member) => member.name);
    return names.join(", ");
  };

 
  return (
    <ListGroup varaiant='flush'>
      {conversations.map((convo, index) => {
        return (
          <ListGroup.Item
            key={index}
            action
            active={convo.selected}
            onClick={() => selectConversationIndex(index)}
          >
            {displayNames(convo.chatMembers)}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

export default Conversations;
