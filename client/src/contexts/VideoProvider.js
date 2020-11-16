import React, { useContext, useState, useEffect, useRef } from "react";
import { useSocket } from "./SocketProvider";
import Peer from 'simple-peer'
const VideoContext = React.createContext();

export const useVideo = () => {
  return useContext(VideoContext);
};

export const VideoProvider = ({ id, children }) => {

  const userVideo = useRef()
  const partnerVideo = useRef()
  const [stream, setStream] = useState(null)
  const [callAccepted, setCallAccepted] = useState(false)
  const [receivingCall, setReceivingCall] = useState(false);
  const [callerSignal, setCallerSignal] = useState();

  const [caller, setCaller] = useState("");
  const socket = useSocket()
  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
      setStream(stream);
      if (userVideo.current) {
        userVideo.current.srcObject = stream
      }
    })

    socket.on("hey", (data) => {
      setReceivingCall(true);
      setCaller(data.from);
      setCallerSignal(data.signal);
    })
    const copy = userVideo.current
    console.log('copy', copy)
    return () => {
      console.log('running clean up')
      navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(mediaStream => {
          const stream = mediaStream;
          const tracks = stream.getTracks();
          tracks.forEach((track) => {
            track.stop()
          })
          console.log(tracks)
          if (copy) {
            copy.srcObject = null
            setStream(null)

          }
        })
    }
  }, [socket])

  const callOtherUsersInChat = (ids) => {
    console.log('yoooooooo', ids)
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream
    })

    peer.on("signal", data => {
      socket.emit('callUser', {
        usersToCall: ids,
        signalData: data,
        from: id
      })
    })

    peer.on('stream', stream => {
      if (partnerVideo.current) {
        console.log(partnerVideo.current)
        partnerVideo.current.srcObject = stream;
      }
    })

    socket.on("callAccepted", signal => {
      setCallAccepted(true)
      peer.signal(signal)
    })
  }

  const acceptCall = () => {
    setCallAccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream
    })

    peer.on("signal", data => {
      socket.emit("acceptCall", { signal: data, to: caller })
    })

    peer.on("stream", stream => {
      partnerVideo.current.srcObject = stream
    })

    peer.signal(callerSignal)
  }

  const endCall = () => {
    console.log('ending Call')
    setCallAccepted(false)
    setReceivingCall(false)
    setCallerSignal(null)
    const userStream = userVideo.current.srcObject
    const tracks = userStream.getTracks();
    tracks.forEach((track) => {
      track.stop();
    });
    partnerVideo.current.srcObject = null
    userVideo.current.srcObject = null

  }


  return (
    <VideoContext.Provider value={{
      stream,
      userVideo,
      partnerVideo,
      callOtherUsersInChat,
      receivingCall,
      caller,
      callAccepted,
      acceptCall,
      endCall
    }}> { children}</VideoContext.Provider >
  );
};
