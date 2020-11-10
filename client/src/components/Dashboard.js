import React from "react";
import Chat from "./Chat";
import Sidebar from "./Sidebar";

function Dashboard({ id }) {
  return (
    <div className='d-flex' style={{ height: "100vh" }}>
      <Sidebar id={id} />
      <Chat />
    </div>
  );
}

export default Dashboard;
