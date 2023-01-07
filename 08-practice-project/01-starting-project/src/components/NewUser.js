import Card from "./UI/Card";
import NewUserForm from "./NewUserForm";

const NewUser = (props) => {
  const onAddNewUserHandler = (userData) => {
    const user = {
      ...userData,
      id: Math.random().toString(),
    };
    props.onAddUser(user);
  };

  //onAddUser
  return (
    <Card>
      <NewUserForm onAddUser={onAddNewUserHandler} />
    </Card>
  );
};

export default NewUser;
