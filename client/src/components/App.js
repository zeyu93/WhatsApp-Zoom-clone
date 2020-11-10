import React from "react";
import Login from "./Login";
import useLocalStorage from "../hooks/useLocalStorage";
import Dashboard from "./Dashboard";

function App() {
  const [id, setId] = useLocalStorage("id", null);
  return id ? <Dashboard id={id} /> : <Login setId={setId} />;
}

export default App;
