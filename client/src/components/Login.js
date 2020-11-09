import React, { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

export default function Login({ setId }) {
  const idRef = useRef();
  const handleSubmit = e => {
    e.preventDefault();
    setId(idRef.current.value);
  };

  const generateNewID = () => {
    const newID = uuidv4();
    setId(newID);
  };
  return (
    <Container
      className='align-items-center d-flex'
      style={{ height: "100vh" }}
    >
      <Form onSubmit={handleSubmit} className='w-100'>
        <Form.Group>
          <Form.Label>Enter Your ID</Form.Label>
          <Form.Control type='text' ref={idRef} required />
        </Form.Group>
        <Button type='submit' className='mr-2'>
          Login
        </Button>
        <Button variant='secondary' onClick={generateNewID}>
          Create new ID
        </Button>
      </Form>
    </Container>
  );
}
