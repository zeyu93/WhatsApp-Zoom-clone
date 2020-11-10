import React from "react";
import Login from "./Login";
import useLocalStorage from "../hooks/useLocalStorage";

function App() {
  const [id, setId] = useLocalStorage('id');
  return (
    <div className='App'>
      <p>{id}</p>
      <Login setId={setId} />
    </div>
  );
}

export default App;
