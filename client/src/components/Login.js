import React, { useRef } from "react";
import { Button, Container, Form, Accordion, Card } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

export default function Login({ setId, setName }) {
  const nameRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setName(nameRef.current.value);
    generateNewID();
  };

  const generateNewID = () => {
    const newID = uuidv4();
    setId(newID);
  };
  return (
    <Container
      className='d-flex flex-column justify-content-center'
      style={{ height: "100vh" }}
    >
      <Accordion>
        <Card>
          <Card.Header className="text-center"> 
            <Accordion.Toggle as={Button} variant='link' eventKey='0'>
              READ ME!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey='0'>
            <Card.Body>
              Hello! This is a WhatsApp clone built by Zeyu Liu using SocketIO
              and React Hooks. Enter your name and press start or create a random ID.
              Add a contact by their ID and can start a conversation with one or multiple contacts.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <Form onSubmit={handleSubmit} className='w-100'>
        <Form.Group>
          <Form.Label>Enter Your Name</Form.Label>
          <Form.Control type='text' ref={nameRef} required />
        </Form.Group>
        <Button type='submit' className='mr-2'>
          Start
        </Button>
        <Button variant='secondary' onClick={generateNewID}>
          Create Random ID
        </Button>
      </Form>
    </Container>
  );
}
