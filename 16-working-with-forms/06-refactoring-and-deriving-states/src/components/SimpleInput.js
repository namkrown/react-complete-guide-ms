import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const nameInputIsInvalid = enteredNameTouched && !enteredNameIsValid;

  useEffect(() => {
    if (nameInputIsInvalid) {
      console.log("Name Input is valid!");
    }
  }, [nameInputIsInvalid]);

  const nameInputChangeHandler = (event) => {
    console.log("nameInputChangeHandler-start");
    setEnteredName(event.target.value);
    console.log("nameInputChangeHandler-end");
  };

  const nameInputBlurHandler = (event) => {
    console.log("nameInputBlurHandler-start");
    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
    } else {
      setEnteredNameIsValid(true);
    }
    console.log("nameInputBlurHandler-end");
  };

  const formSubmissionHandler = (event) => {
    console.log("formSubmissionHandler-start");
    event.preventDefault();

    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
    } else {
      setEnteredNameIsValid(true);
      console.log("enteredName=" + enteredName);

      setEnteredName("");
    }
    console.log("formSubmissionHandler-end");
  };

  const nameInputCss = "form-control" + (nameInputIsInvalid ? " invalid" : "");
  console.log("nameInputCss=" + nameInputCss);

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
        {nameInputIsInvalid && <p>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
