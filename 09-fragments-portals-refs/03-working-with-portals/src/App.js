import React, { useState, Fragment } from "react";

import "./App.css";
import UsersList from "./components/Users/UsersList";
import AddUser from "./components/Users/AddUser";

const App = () => {
  const [users, setUsers] = useState([]);

  const onAddUserHandler = (user) => {
    /*
    const updatedUsers = [...users, user];
    setUsers(updatedUsers);
    */
    setUsers((prevUsers) => {
      return [...prevUsers, user];
    });
  };

  /*
  // Original with div soup
  return (
    <div>
      <AddUser onAddUser={onAddUserHandler} />
      <UsersList users={users} />
    </div>
  );
  */

  /* 
  // Requires build to support it
  return (
    <>
      <AddUser onAddUser={onAddUserHandler} />
      <UsersList users={users} />
    </>
  );
  */

  /*
// Required import React { Fragment } from 'react'
  return (
    <Fragment>
      <AddUser onAddUser={onAddUserHandler} />
      <UsersList users={users} />
    </Fragment>
  );
  */

  /* Always works : Does the same as ./components/Helpers/Wrapper*/
  return (
    <React.Fragment>
      <AddUser onAddUser={onAddUserHandler} />
      <UsersList users={users} />
    </React.Fragment>
  );
};

export default App;
