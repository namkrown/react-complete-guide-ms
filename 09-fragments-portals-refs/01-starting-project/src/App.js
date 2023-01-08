import React, { useState } from "react";

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

  return (
    <div>
      <AddUser onAddUser={onAddUserHandler} />
      <UsersList users={users} />
    </div>
  );
};

export default App;
