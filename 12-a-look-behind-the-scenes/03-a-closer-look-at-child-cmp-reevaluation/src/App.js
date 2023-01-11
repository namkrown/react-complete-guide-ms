import React, { useState } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./Demo/DemoOutput";
function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  console.log("APP RUNNING");
  const btnOnClickHandler = (event) => {
    setShowParagraph((previousShowParagraph) => {
      setShowParagraph(!previousShowParagraph);
    });
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={btnOnClickHandler}>Toggle Paragraph</Button>
      <DemoOutput show={false} />
    </div>
  );
}

export default App;
