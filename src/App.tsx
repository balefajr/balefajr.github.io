import React, { useState } from "react";
import "./App.css";
import { Messanger } from "./pages/messanger/Messanger";
import { Landing } from "./pages/landing/Landing";

function App() {
  const [isEntered, setIsEntered] = useState(false);
  return isEntered ? (
    <Messanger />
  ) : (
    <Landing onEnter={() => setIsEntered(true)} />
  );
}

export default App;
