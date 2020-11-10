import React, { useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useContacts } from "./ContactsProvider";
const ConversationContext = React.createContext();

export const useConversation = () => {
  return useContext(ConversationContext);
};

export const ConversationsProvider = ({ children }) => {
  const { contacts } = useContacts();
  const [conversations, setConversatoins] = useLocalStorage("coversations", []);
  const [selectedConvoIndex, setSelectedConvoIndex] = useState(0);

  const createConversation = (ids) => {
    setConversatoins((prevConversations) => {
      return [...prevConversations, { ids, messages: [] }];
    });
  };

  const formattedConversations = conversations.map((convo, index) => {
    const chatMembers = convo.ids.map((id) => {
      const person = contacts.find((contact) => {
        return contact.id === id;
      });
      const name = (person && person.name) || id;
      return { id, name };
    });
    let selected = false;
    if (index === selectedConvoIndex) {
      selected = true;
    }

    return { ...convo, chatMembers, selected };
  });
  return (
    <ConversationContext.Provider
      value={{
        conversations: formattedConversations,
        createConversation,
        selectConversationIndex: setSelectedConvoIndex,
      }}
    >
      {children}
    </ConversationContext.Provider>
  );
};
