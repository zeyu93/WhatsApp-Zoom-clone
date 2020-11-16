import React, { useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { useConversation } from "../contexts/ConversationsProvider";
import MessageList from "./MessageList";
import UserInfo from "./UserInfo";
import Video from "./Video";
import { VideoProvider } from "../contexts/VideoProvider";


function Chat({ id }) {
  const [text, setText] = useState("");
  const { sendMessage, selectedConversation } = useConversation();
  const [videoStart, setVideoStart] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(text);
    setText("");
  };

  return (
    <div className='d-flex flex-column flex-grow-1'>
      <UserInfo selectedConversation={selectedConversation} setVideoStart={setVideoStart} videoStart={videoStart} />
      {videoStart ? (
        <VideoProvider id={id} >
          <Video selectedConversation={selectedConversation} />
        </VideoProvider>
      ) : (
          <>
            <div className='flex-grow-1 overflow-auto'>
              <MessageList selectedConversation={selectedConversation} />
            </div>
            <Form>
              <Form.Group className='m-2'>
                <InputGroup>
                  <Form.Control
                    as='textarea'
                    required
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    style={{ height: "100px", resize: "none" }}
                  />
                  <InputGroup.Append>
                    <Button onClick={handleSubmit} type='submit'>
                      Send
                  </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Form.Group>
            </Form>
          </>
        )}
    </div>
  );
}

export default Chat;
