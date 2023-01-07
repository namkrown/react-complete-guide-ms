import UserItem from "./UserItem";
//import css from "./UsersList.module.css";

const UsersList = (props) => {
  if (props.users.length <= 0) {
    return <h2>No Users found</h2>;
  }
  return (
    <ol>
      {props.users.map((user) => (
        <UserItem key={user.id} userName={user.userName} age={user.age} />
      ))}
    </ol>
  );
};

export default UsersList;
