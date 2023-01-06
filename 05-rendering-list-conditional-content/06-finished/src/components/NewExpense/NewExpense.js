import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [formDisplayed, setFormDisplayed] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setFormDisplayed(false);
  };

  const addNewExpenseButtonClickHandler = () => {
    setFormDisplayed(true);
  };

  const cancelNewExpenseButtonClickHandler = () => {
    setFormDisplayed(false);
  };

  /*
  let divContent = (
    <button onClick={addNewExpenseButtonClickHandler}>Add New Expense</button>
  );
  if (!formDisplayed) {
    divContent = (
      <ExpenseForm
        onCancel={cancelNewExpenseButtonClickHandler}
        onSaveExpenseData={saveExpenseDataHandler}
      />
    );
  }

  return  <div className="new-expense">{divContent}</div>
*/
  return (
    <div className="new-expense">
      {!formDisplayed && (
        <button onClick={addNewExpenseButtonClickHandler}>
          Add New Expense
        </button>
      )}
      {formDisplayed && (
        <ExpenseForm
          onCancel={cancelNewExpenseButtonClickHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
