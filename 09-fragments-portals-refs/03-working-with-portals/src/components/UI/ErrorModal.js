import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";

import css from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={css.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={css.modal}>
      <header className={css.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={css.content}>
        <p>{props.message}</p>
      </div>
      <footer className={css.actions}>
        <Button onClick={props.onConfirm}>Ok</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
