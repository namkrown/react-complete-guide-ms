import React, { useState } from "react";
import Button from "./UI/Button";
import Card from "./UI/Card";

const NewUserForm = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");

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
    console.log("onSubmitHandler");
    const userData = {
      userName: userName,
      age: age,
    };
    props.onAddUser(userData);
    setUserName("");
    setAge("");
  };

  return (
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
  );
};

export default NewUserForm;
