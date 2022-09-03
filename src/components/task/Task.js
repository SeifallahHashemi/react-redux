const Task = props => {
    // console.log(props.items)
    let content;
    if (props.items.length > 0) {
        content = <ul>
            {props.items.map(item => <li key={item.id}>{item.text}</li>)}
        </ul>
    }
    const {loading: isLoading} = props;
    const {errorList: isError} = props;
    // console.log(isLoading, isError);
    return (
        <>
            {!isLoading && !isError && content}
            {isLoading && !isError && <p>Loading...</p>}
            {!isLoading && isError && <p>{props.errorList}</p>}
        </>
    )
}
export default Task;