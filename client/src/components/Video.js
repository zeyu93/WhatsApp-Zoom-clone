import React from 'react'
import { Button } from "react-bootstrap";
import { useVideo } from '../contexts/VideoProvider'

function Video({ selectedConversation }) {
  const { userVideo, callOtherUsersInChat, receivingCall, caller, acceptCall, callAccepted, partnerVideo, endCall } = useVideo()

  return (
    <div className="d-flex flex-column align-items-center m-5">
      <div className="d-flex flex-column ">
        {!callAccepted && <Button className="m-2 p-2" onClick={() => callOtherUsersInChat(selectedConversation.chatMembers)} >Call users in Chat</Button>}
        {receivingCall && !callAccepted && <Button className="m-2 p-2" onClick={acceptCall}>Accept Call from {caller}</Button>}
        {callAccepted && <Button className="m-2 p-2" onClick={endCall}>End Call</Button>}
      </div>
      <div className="d-flex flex-column ">
        <video ref={userVideo} playsInline muted autoPlay width="500px" height="500px" />
        {callAccepted && <video ref={partnerVideo} playsInline muted autoPlay width="500px" height="500px" />}
      </div>
    </div>
  )
}

export default Video
