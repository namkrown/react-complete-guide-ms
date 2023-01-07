import React, { useState } from "react";

import "./App.css";
import Users from "./components/Users/Users";
import AddUser from "./components/Users/AddUser";

const App = () => {
  const [users, setUsers] = useState([
    { id: Math.random().toString(), userName: "Nate W", age: 46 },
    { id: Math.random().toString(), userName: "Tristan W", age: 14 },
  ]);

  const onAddUserHandler = (user) => {
    /*
    const updatedUsers = [...users, user];
    setUsers(updatedUsers);
    */
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

  return (
    <div>
      <AddUser onAddUser={onAddUserHandler} />
      <Users users={users} />
    </div>
  );
};

export default App;
