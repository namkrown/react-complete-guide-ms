import React from "react";
import MyParagraph from "./MyParagraph";
const DemoOutput = (props) => {
  console.log("DemoOutput RUNNING");
  return <MyParagraph>{props.show ? "This is new!" : ""}</MyParagraph>;
};

// Only reexecute the component if the props to the component changed
export default React.memo(DemoOutput);
