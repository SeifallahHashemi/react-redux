import classes from "./Modal.module.scss";
import {Fragment} from "react";
import ReactDOM from "react-dom";
export const Backdrop = props => {
    return(
        <div className={classes.overlay} onClick={props.onConfirm}/>
    )
}
export const ModalOverlay = props => {
    return(
        <Fragment>
            <Backdrop onConfirm={props.onClick}/>
            <div className={classes.modalOverlay}>{props.children}</div>
        </Fragment>
    )
}
const Modal = props => {
    return(
        ReactDOM.createPortal(<ModalOverlay onClick={props.onConfirm}>{props.children}</ModalOverlay>, document.getElementById('ModalOverlay'))
    )
}
export default Modal;