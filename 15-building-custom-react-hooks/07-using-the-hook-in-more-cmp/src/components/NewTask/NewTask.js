import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useHttp from "../../hooks/use-http";

const NewTask = (props) => {
  // const [isLoading, setIsLoading] = useState(false);
  //const [error, setError] = useState(null);

  const baseUrl = "https://<firebase-realtime-database-url>/";
  const tasksUrl = baseUrl + "tasks.json";

  const httpData = useHttp();
  const { isLoading, error, sendRequest } = httpData;

  const enterTaskHandler = async (taskText) => {
    const task = { text: taskText };
    const requestConfig = {
      url: tasksUrl,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: task,
    };
    const applyData = (data) => {
      const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };

      props.onAddTask(createdTask);
    };
    sendRequest(requestConfig, applyData);
    /*
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(tasksUrl, {
        method: "POST",
        body: JSON.stringify({ text: taskText }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };

      props.onAddTask(createdTask);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
    */
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
