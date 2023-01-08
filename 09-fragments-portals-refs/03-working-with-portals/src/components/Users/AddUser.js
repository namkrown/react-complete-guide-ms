import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

import css from "./AddUser.module.css";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const onUserNameChangeHandler = (event) => {
    //todo - add validation
    setUserName(event.target.value);
  };

  const onAgeChangeHandler = (event) => {
    // add validation
    setAge(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty) values",
      });
      return;
    } else if (+age < 1) {
      //+age -> + in front of age forces the string to be converted to a number
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0)",
      });
      return;
    }
    const userData = {
      userName: userName,
      age: age,
      id: Math.random().toString(),
    };
    props.onAddUser(userData);
    setUserName("");
    setAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={css.input}>
        <form onSubmit={onSubmitHandler}>
          <div>
            <label htmlFor="userName">UserName</label>
            <input
              id="userName"
              type="text"
              value={userName}
              onChange={onUserNameChangeHandler}
            ></input>
          </div>
          <div>
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              type="number"
              value={age}
              onChange={onAgeChangeHandler}
            ></input>
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
