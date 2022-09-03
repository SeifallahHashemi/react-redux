const Input = props => {
    const styles = `${props.className} ${props.isValid === false ? "invalid" : ''}`;
    return (
        <div className={styles}>
            <label for={props.id}>{props.label}</label>
            <input onClick={props.onClick} type={props.type || "text"} id={props.id} onBlur={props.onBlur}
                   onChange={props.onConfirm} value={props.value}/>
        </div>
    )
}
export default Input;