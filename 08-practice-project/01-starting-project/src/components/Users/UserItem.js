const UserItem = (props) => {
  return (
    <li>
      {props.userName} {props.age}
    </li>
  );
};

export default UserItem;
