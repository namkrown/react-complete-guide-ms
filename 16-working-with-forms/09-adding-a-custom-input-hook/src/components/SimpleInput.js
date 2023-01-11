import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const enteredNameIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const emailValidRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const enteredEmailIsValid =
    enteredEmail.trim() !== "" && enteredEmail.match(emailValidRegex);
  //const enteredEmailIsValid = enteredEmail.includes("@");
  const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  const formIsValid = enteredNameIsValid && enteredEmailIsValid;

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    const nameValid = enteredName.trim() !== "";
    const emailValid =
      enteredEmail.trim() !== "" && enteredEmail.match(emailValidRegex);
    if (nameValid && emailValid) {
      setEnteredName("");
      setEnteredNameTouched(false);

      setEnteredEmail("");
      setEnteredEmailTouched(false);
    }
  };

  const nameInputCss =
    "form-control" + (enteredNameIsInvalid ? " invalid" : "");

  const emailInputCss =
    "form-control" + (enteredEmailIsInvalid ? " invalid" : "");

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputCss}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {enteredNameIsInvalid && <p>Name must not be empty</p>}
      </div>
      <div className={emailInputCss}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {enteredEmailIsInvalid && <p>Email must be valid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
