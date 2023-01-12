import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const nameValidation = (value) => value !== "";
  const emailValidation = (value) => value.includes("@");

  const firstNameInput = useInput(nameValidation);
  const lastNameInput = useInput(nameValidation);
  const emailInput = useInput(emailValidation);

  const isValidForm =
    firstNameInput.isValid && lastNameInput.isValid && emailInput.isValid;

  const formSubmitHandler = (event) => {
    event.preventDefault();

    // probably should revalidate form inputs
    if (isValidForm) {
      console.log("Submitted!");
      console.log(firstNameInput.value, lastNameInput.value, emailInput.value);
      firstNameInput.reset();
      lastNameInput.reset();
      emailInput.reset();
    }
  };

  const formInputDivCssFx = (hasError) =>
    "form-control" + (hasError ? " invalid" : "");
  const firstNameDivCss = formInputDivCssFx(firstNameInput.hasError);
  const lastNameDivCss = formInputDivCssFx(lastNameInput.hasError);
  const emailDivCss = formInputDivCssFx(emailInput.hasError);

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameDivCss}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstNameInput.value}
            onChange={firstNameInput.valueChangeHandler}
            onBlur={firstNameInput.inputBlurHandler}
          />
          {firstNameInput.hasError && (
            <p className="error-text">Please provide valid first name</p>
          )}
        </div>
        <div className={lastNameDivCss}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastNameInput.value}
            onChange={lastNameInput.valueChangeHandler}
            onBlur={lastNameInput.inputBlurHandler}
          />
          {lastNameInput.hasError && (
            <p className="error-text">Please provide valid last name</p>
          )}
        </div>
      </div>
      <div className={emailDivCss}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={emailInput.value}
          onChange={emailInput.valueChangeHandler}
          onBlur={emailInput.inputBlurHandler}
        />
        {emailInput.hasError && (
          <p className="error-text">Please provide valid email</p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={!isValidForm}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
