import {useRef} from "react";

const NewTask = props => {
    const inputRef = useRef();
    const submitFormHandler = event => {
        event.preventDefault();
        const enteredValue = inputRef.current.value;
        if (enteredValue.trim().length > 0) props.onAddTask(enteredValue)
    }
    return(
        <form onSubmit={submitFormHandler}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" ref={inputRef}/>
            <button>Send</button>
        </form>
    )
}
export default NewTask;