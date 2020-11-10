import React from "react";
import { ListGroup } from "react-bootstrap";
import { useContacts } from "../contexts/ContactsProvider";

const Contacts = () => {
  const { contacts } = useContacts();
  return (
    <ListGroup varaiant='flush'>
      {contacts.map(contact => {
        return <ListGroup.Item key={contact.id}>{contact.name}</ListGroup.Item>;
      })}
    </ListGroup>
  );
};

export default Contacts;
