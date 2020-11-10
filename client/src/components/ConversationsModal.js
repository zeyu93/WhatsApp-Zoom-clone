import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useContacts } from "../contexts/ContactsProvider";
import { useConversation } from "../contexts/ConversationsProvider";

function ConversationsModal({ closeModal }) {
  const { contacts } = useContacts();
  const { createConversation } = useConversation();
  const [selectedContactIds, setSelectedContactIds] = useState([]);

  const handleCheckBox = id => {
    setSelectedContactIds(prevContacts => {
      if (prevContacts.includes(id)) {
        return prevContacts.filter(prevId => prevId.id !== id);
      } else {
        return [...prevContacts, id];
      }
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    createConversation(selectedContactIds);
    closeModal();
  };

  return (
    <>
      <Modal.Header closeButton>Create Conversation</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map(contact => {
            return (
              <Form.Group controlId={contact.id} key={contact.id}>
                <Form.Check
                  type='checkbox'
                  value={selectedContactIds.includes(contact.id)}
                  label={contact.name}
                  onChange={() => {
                    handleCheckBox(contact.id);
                  }}
                />
              </Form.Group>
            );
          })}
          <Button type='submit'>Create Conversation</Button>
        </Form>
      </Modal.Body>
    </>
  );
}

export default ConversationsModal;
