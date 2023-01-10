import { useRef, useState } from "react";

import Input from "../../UI/Input";
import css from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    console.log("submitHandler-start");
    event.preventDefault();

    const enteredAmountTxt = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmountTxt;

    if (
      enteredAmountTxt.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      console.log("MealItemForm::submitHandler setAmountIsValid(false)");
      setAmountIsValid(false);
    } else {
      console.log("MealItemForm::submitHandler setAmountIsValid(true)");
      setAmountIsValid(true);
      props.onAddToCart(enteredAmountNumber);
    }
    console.log("submitHandler-end");
  };

  return (
    <form className={css.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {amountIsValid && <p>Please a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
