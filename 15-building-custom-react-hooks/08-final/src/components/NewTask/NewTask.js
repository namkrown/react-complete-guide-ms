import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useHttp from "../../hooks/use-http";

const NewTask = (props) => {
  const baseUrl = "https://<firebase-realtime-database-url>/";
  const tasksUrl = baseUrl + "tasks.json";

  // object destructuring + alias for sendRequest to sendTaskRequest
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

  const createTask = (taskText, data) => {
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText) => {
    const task = { text: taskText };
    const requestConfig = {
      url: tasksUrl,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: task,
    };
    // 1st param to bind allows to set this 'this' function
    // 2nd argument will be 1st parameter received by the function
    // data will be appended to the parameter list, thus as 2nd arg
    const bindedCreateTaskFx = createTask.bind(null, taskText);
    sendTaskRequest(requestConfig, bindedCreateTaskFx);
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
