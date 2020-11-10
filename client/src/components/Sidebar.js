import React, { useState } from "react";
import { Tab, Nav, Button, Modal } from "react-bootstrap";
import Conversations from "./Conversations";
import ConversationsModal from "./ConversationsModal.js";
import ContactsModal from "./ContactsModal";
import Contacts from "./Contacts";
const CONTACTS_KEY = "contacts";
const CONVERSATIONS_KEY = "conversations";

function Sidebar({ id }) {
  const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);
  const [showModal, setShowModal] = useState(false);

  const conversationOpen = activeKey === CONVERSATIONS_KEY;
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div style={{ width: "250px" }} className='d-flex flex-column'>
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant='tabs' className='justify-content-center'>
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATIONS_KEY}> Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className='border-right overflow-auto flex-grow-1'>
          <Tab.Pane eventKey={CONVERSATIONS_KEY}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <div className='p-2 border-top border-right small'>
          Your ID <span className='text-muted'> {id}</span>
        </div>
        <Button className='rounded-0' onClick={() => setShowModal(true)}>
          NEW {conversationOpen ? "CONVERSATION" : "CONTACTS"}
        </Button>
      </Tab.Container>

      <Modal show={showModal} onHide={closeModal}>
        {conversationOpen ? (
          <ConversationsModal closeModal={closeModal} />
        ) : (
          <ContactsModal closeModal={closeModal} />
        )}
      </Modal>
    </div>
  );
}

export default Sidebar;
