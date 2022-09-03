import NewTask from "./NewTask";
import useHttp from "../../hooks/use-http";

const AddTask = props => {
    const {isLoading, error, sendRequest: sendData} = useHttp();
    const createTask = (taskText, taskData) => {
        // console.log(taskData)
        const generateID = taskData.name;
        const createdText = { id: generateID, text: taskText};
        // console.log(createdText)
        props.onAddNewTask(createdText);
    }
    const addTaskHandler = async (tasks) => {
        await sendData({
            url: 'https://customhook-9e26b-default-rtdb.firebaseio.com/task.json',
            method: 'POST',
            body: {text: tasks},
            headers: {
                'Content-Type': 'application/json'
            }
        }, createTask.bind(null ,tasks))
    }
    return (
        <section>
            <NewTask onAddTask={addTaskHandler}/>
            {isLoading && <p>Loading...</p>}
            {!isLoading && error && <p>{error}</p>}
        </section>
    )
};
export default AddTask;