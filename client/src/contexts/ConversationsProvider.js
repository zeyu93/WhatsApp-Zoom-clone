import React, { useContext, useState, useEffect, useCallback } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useContacts } from "./ContactsProvider";
import { useSocket } from "./SocketProvider";
const ConversationContext = React.createContext();

export const useConversation = () => {
  return useContext(ConversationContext);
};

export const ConversationsProvider = ({ children, id }) => {
  const { contacts } = useContacts();
  const [conversations, setConversations] = useLocalStorage("coversations", []);
  const [selectedConvoIndex, setSelectedConvoIndex] = useState(0);
  const socket = useSocket();

  const createConversation = (ids) => {
    setConversations((prevConversations) => {
      let existingConvoIndex = null;
      const existingConvo = prevConversations.some((convo, index) => {
        if (isArrayEqual(convo.ids, ids)) {
          existingConvoIndex = index;
          return true;
        } else {
          return false;
        }
      });
      if (existingConvo) {
        setSelectedConvoIndex(existingConvoIndex);
        return [...prevConversations];
      }
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
    const messages = convo.messages.map((message) => {
      const person = contacts.find((contact) => {
        return contact.id === message.sender;
      });
      const name = (person && person.name) || message.sender;
      const fromMe = message.sender === id;
      return { ...message, senderName: name, fromMe };
    });
    const selected = index === selectedConvoIndex;
    return { ...convo, messages, chatMembers, selected };
  });

  const addMessageToConversation = useCallback(
    ({ ids, text, sender }) => {
      let newMessage = {
        sender,
        text,
      };
      setConversations((prevConvos) => {
        let madeChange = false;
        const newConversations = prevConvos.map((convo) => {
          if (isArrayEqual(convo.ids, ids)) {
            madeChange = true;
            return { ...convo, messages: [...convo.messages, newMessage] };
          }
          return convo;
        });
        if (madeChange) {
          return newConversations;
        } else {
          return [...prevConvos, { ids, messages: [newMessage] }];
        }
      });
    },
    [setConversations]
  );

  useEffect(() => {
    if (!socket) return;
    socket.on("receive-message", addMessageToConversation);
    return () => socket.off("receive-message");
  }, [socket, addMessageToConversation]);

  const sendMessage = (text) => {
    const currentConversation = formattedConversations[selectedConvoIndex];
    const ids = currentConversation.chatMembers.map(
      (member) => member.id
    );
    socket.emit("send-message", { ids, text, sender: id });
    addMessageToConversation({
      ids,
      text,
      sender: id,
    });
  };
  return (
    <ConversationContext.Provider
      value={{
        conversations: formattedConversations,
        createConversation,
        selectConversationIndex: setSelectedConvoIndex,
        selectedConversation: formattedConversations[selectedConvoIndex],
        sendMessage,
      }}
    >
      {children}
    </ConversationContext.Provider>
  );
};

const isArrayEqual = (array1, array2) => {
  if (array1.length !== array2.length) return false;
  array2.sort();
  array1.sort();
  return array1.every((element, index) => element === array2[index]);
};
