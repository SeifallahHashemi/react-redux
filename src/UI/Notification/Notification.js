import classes from "./Notification.module.scss";
import Card from "../Card/Card";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

const Notification = props => {
    const styleToggle = useSelector(state => state.cart.isShowNotification);
    const [toggleState, setToggleState] = useState(false);
    const [stateManage, setStateManage] = useState();
    let {status: statusState} = props;
    let status;
    if (props.status === 'Success') {
        status = `${classes.success}`
    } else if (props.status === 'Error') {
        status = `${classes.error}`
    } else {
        status = '';
    }
    /*const styles = `${classes.notification} ${status} ${toggleState ? classes.move : ''}`;
    const timerStyle = `${classes['notification__footer']} ${props.status !== 'Pending' ? classes.timer : classes.empty}`;*/
    let styles = `${classes.notification} ${status} ${toggleState ? classes.move : ''}`;
    let timerStyle = `${classes['notification__footer']} ${props.status !== 'Pending' ? classes.timer : classes.empty}`;
    useEffect(() => {
        setToggleState(true);
        const timer = setTimeout(() => {
            setToggleState(false)
        }, 4100)
        setStateManage(statusState);
        const myFunc = () => {
            return new Promise((resolve, reject) => {
                if (stateManage === 'Pending') {
                    resolve('Pending')
                } else {
                    reject('Succes')
                }
            })
        }
        myFunc().then((_) => clearTimeout(timer), (_) => setToggleState(true))
        return () => {
            clearTimeout(timer)
        }
    }, [styleToggle, statusState, stateManage])
    return(
        <Card className={styles} >
            <header>{props.title}</header>
            <section>{props.message}</section>
            <footer className={timerStyle} />
        </Card>
    )
};
export default Notification;