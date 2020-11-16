import React from "react";
import { Alert, Badge, Button } from "react-bootstrap";
import { useVideo } from '../contexts/VideoProvider'

function UserInfo({ selectedConversation, setVideoStart, videoStart }) {


  const handleStartVideo = () => {
    setVideoStart(!videoStart)
  }
  return (
    <div>
      <Alert className='px-3 m-2 d-flex align-items-center' variant='primary'>
        Chat Member:{" "}
        {selectedConversation.chatMembers.map((member) => {
          return <Badge>{member.name}</Badge>;
        })}
        <Button style={{
          marginLeft: 'auto'
        }} onClick={handleStartVideo} variant='primary'>
          {videoStart ? "End Video" : "Enter Video Room"}
        </Button>
      </Alert>
    </div>
  );
}

export default UserInfo;
