import './App.scss';
import Card from "./UI/Card/Card";
import Button from "./UI/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import { counterActions } from "./store/index";

function App() {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter)
    const shown = useSelector(state => state.showCounter)
    const incrementHandler = () => {
        dispatch(counterActions.increment())
    }
    const decrementHandler = () => {
        dispatch(counterActions.decrement())
    }
    const increaseHandler = () => {
        dispatch(counterActions.increase(5))
    }
    const toggleHandler = () => {
        dispatch(counterActions.toggleCounter())
    }
    return (
        <Card className="extra__card">
                <header>
                    {shown && <span>{counter}</span>}
                </header>
                <div className="buttonContainer">
                    <Button naem="Increase by 5" type={"button"} name="افزایش 5 واحدی" onClick={increaseHandler}/>
                    <Button naem="Increment" type={"button"} name="افزایش" onClick={incrementHandler}/>
                    <Button naem="Decrement" type={"button"} name="کاهش" onClick={decrementHandler}/>
                    <Button naem="toggle" type={"button"} name="تغییر وضعیت" onClick={toggleHandler}/>
                </div>
        </Card>
    );
}

export default App;
