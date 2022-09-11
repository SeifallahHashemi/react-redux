import styles from './Button.module.scss';
const Button = props => {
    const classes = `${styles.button} ${props.className || ''}`
    return(
        <button className={classes} type={props.type || "submit"} onClick={props.onClick}>{props.children}</button>
    )
};
export default Button;