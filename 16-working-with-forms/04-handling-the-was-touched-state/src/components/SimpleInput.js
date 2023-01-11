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
    setEnteredName(event.target.value);
    setEnteredNameTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
    } else {
      setEnteredNameIsValid(true);
      console.log("enteredName=" + enteredName);

      setEnteredName("");
    }
  };

  const nameInputCss = "form-control" + (nameInputIsInvalid ? " invalid" : "");

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputCss}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
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
