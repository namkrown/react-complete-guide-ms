import { useRef, useState } from "react";
import css from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isNotEmtpty = (value) => !isEmpty(value);
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputsValidity, setFOrmInputsValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    console.log("confirmHandler", event);

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = isNotEmtpty(enteredName);
    const enteredStreetIsValid = isNotEmtpty(enteredStreet);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);
    const enteredCityIsValid = isNotEmtpty(enteredCity);

    setFOrmInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postalCode: enteredPostalCodeIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid;

    console.log("formIsValid", formIsValid);

    if (!formIsValid) {
    } else {
    }
  };

  const inputDivCssFx = (validity) => {
    return `${css.control} ${validity ? "" : css.invalid}`;
  };

  return (
    <form onSubmit={confirmHandler}>
      <div className={inputDivCssFx(formInputsValidity.name)}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={nameInputRef}></input>
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>

      <div className={inputDivCssFx(formInputsValidity.street)}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef}></input>
        {!formInputsValidity.street && <p>Please enter a valid street!</p>}
      </div>

      <div className={inputDivCssFx(formInputsValidity.postalCode)}>
        <label htmlFor="postalCode">Postal Code</label>
        <input type="text" id="postalCode" ref={postalCodeInputRef}></input>
        {!formInputsValidity.postalCode && (
          <p>Please enter a valid postal code (5 characters long)!</p>
        )}
      </div>

      <div className={inputDivCssFx(formInputsValidity.city)}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef}></input>
        {!formInputsValidity.city && <p>Please enter a valid city!</p>}
      </div>

      <div className={css.actions}>
        <button
          type="button"
          className={css["button--alt"]}
          onClick={props.onCancel}
        >
          Cancel
        </button>
        <button className={css.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
