import Button from "../Button/Button";
import classes from "./WarningText.module.scss";

const WarningText = props => {
    return(
        <div className={classes.warningText}>
            <p>{props.warning}</p>
            <div>
                <Button className={classes['warningText__button']} type={"button"} onClick={props.onConfirm}>{props.title}</Button>
            </div>
        </div>
    )
};
export default WarningText;