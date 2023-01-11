import useInput from "../hooks/use-input";
const SimpleInput = (props) => {
  const nameValidationFx = (value) => value.trim() !== "";
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(nameValidationFx);

  const emailValidRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const emailValidationFx = (value) =>
    value.trim() !== "" && value.includes("@") && value.match(emailValidRegex);
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(emailValidationFx);

  const formIsValid = enteredNameIsValid && enteredEmailIsValid;

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    const nameValid = enteredName.trim() !== "";
    const emailValid =
      enteredEmail.trim() !== "" && enteredEmail.match(emailValidRegex);
    if (nameValid && emailValid) {
      resetNameInput();
      resetEmailInput();
    }
  };

  const nameInputCss = "form-control" + (nameInputHasError ? " invalid" : "");

  const emailInputCss = "form-control" + (emailInputHasError ? " invalid" : "");

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputCss}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameInputHasError && <p>Name must not be empty</p>}
      </div>
      <div className={emailInputCss}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && <p>Email must be valid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
