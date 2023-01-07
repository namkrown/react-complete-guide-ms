import Card from "../UI/Card";

import UsersList from "./UsersList";
//import css from "./Users.module.css";

const Users = (props) => {
  return (
    <Card>
      <UsersList users={props.users} />
    </Card>
  );
};

export default Users;
