import { useRef } from "react";
import css from "./Checkout.module.css";

const Checkout = (props) => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    console.log("confirmHandler", event);

    const enteredName = nameInputRef.current.value;
    const streetName = streetInputRef.current.value;
    const postalName = postalInputRef.current.value;
    const cityName = cityInputRef.current.value;
  };

  return (
    <form onSubmit={confirmHandler}>
      <div className={css.control}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={nameInputRef}></input>
      </div>

      <div className={css.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef}></input>
      </div>

      <div className={css.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef}></input>
      </div>

      <div className={css.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef}></input>
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
