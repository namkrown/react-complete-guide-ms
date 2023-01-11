import React, { useCallback, useState } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./Demo/DemoOutput";

function App() {
  const [allowToggle, setAllowToggle] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);

  console.log("APP RUNNING");

  const allowToggleHandler = () => {
    setAllowToggle((previousAllowToggle) => !previousAllowToggle);
  };

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((previousShowParagraph) => !previousShowParagraph);
    }
  }, [allowToggle]);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
      <DemoOutput show={showParagraph} />
    </div>
  );
}

export default App;
