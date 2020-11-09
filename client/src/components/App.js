import React, { useState } from "react";
import Login from "./Login";

function App() {
  const [id, setId] = useState(null);
  return (
    <div className='App'>
      <p>{id}</p>
      <Login setId={setId} />
    </div>
  );
}

export default App;
