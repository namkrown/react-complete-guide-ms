import React, { useCallback, useState } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./Demo/DemoOutput";

function App() {
  const [, setShowParagraph] = useState(false);
  console.log("APP RUNNING");
  const toggleParagraphHandler = useCallback((event) => {
    setShowParagraph((previousShowParagraph) => !previousShowParagraph);
  }, []);
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
      <DemoOutput show={false} />
    </div>
  );
}

export default App;
