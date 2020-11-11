import React, { useContext, useState, useEffect } from "react";
import io from "socket.io-client";

const SocketContext = React.createContext();

export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ id, children }) => {
  const [socket, setSocket] = useState();
  console.log(process.env.REACT_APP_DEV_URL)
  useEffect(() => {
    const newSocket = io(
      process.env.REACT_APP_DEV_URL,
      {
        query: { id },
      },
      [id]
    );
    setSocket(newSocket);

    return () => newSocket.close();
  }, [id]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
