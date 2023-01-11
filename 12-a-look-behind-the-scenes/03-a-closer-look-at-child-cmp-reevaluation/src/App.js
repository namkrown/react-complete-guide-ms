import React, { useState } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";

function App() {
  console.log("APP RUNNING");
  const [showParagraph, setShowParagraph] = useState(false);
  const btnOnClickHandler = (event) => {
    setShowParagraph((previousShowParagraph) => {
      setShowParagraph(!previousShowParagraph);
    });
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={btnOnClickHandler}>Toggle Paragraph</Button>
      {showParagraph && <p>This is new!</p>}
    </div>
  );
}

export default App;
