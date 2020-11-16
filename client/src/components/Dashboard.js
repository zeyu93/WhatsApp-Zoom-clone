import React from "react";
import { useConversation } from "../contexts/ConversationsProvider";
import Chat from "./Chat";
import Sidebar from "./Sidebar";

function Dashboard({ id }) {
  const { selectedConversation } = useConversation();
  return (
    <div className='d-flex' style={{ height: "100vh" }}>
      <Sidebar id={id} />
      {selectedConversation && <Chat id={id} />}
    </div>
  );
}

export default Dashboard;
