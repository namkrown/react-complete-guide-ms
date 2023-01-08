import Card from "../UI/Card";
import css from "./UsersList.module.css";

const UsersList = (props) => {
  if (props.users.length <= 0) {
    return <h2>No Users found</h2>;
  }
  return (
    <Card className={css.users}>
      <ul className={css.users}>
        {props.users.map((user) => (
          <li key={user.id} className={css.users}>
            {user.userName} {user.age} years old
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
