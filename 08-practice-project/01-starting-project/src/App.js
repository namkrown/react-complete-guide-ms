import React, { useState } from "react";

import "./App.css";
import Users from "./components/Users";
import NewUser from "./components/NewUser";

const App = () => {
  const [users, setUsers] = useState([
    { id: Math.random().toString(), userName: "Nate W", age: 46 },
    { id: Math.random().toString(), userName: "Tristan W", age: 14 },
  ]);

  const onAddUserHandler = (user) => {
    const updatedUsers = [...users, user];
    setUsers(updatedUsers);
  };

  return (
    <div>
      <NewUser onAddUser={onAddUserHandler} />
      <Users users={users} />
    </div>
  );
};

export default App;
