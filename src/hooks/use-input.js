import {useState} from "react";

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    // const regex = new RegExp('[a-z0-9]+@[a-z]+\\.[a-z]{2,3}');
    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = e => {
        setEnteredValue(e.target.value)
    }
    const stateChangeHandler = () => {
        setIsTouched(true)
    }
    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }
    return {
        enteredValue,
        isTouched,
        hasError,
        valueChangeHandler,
        stateChangeHandler,
        reset
    }
}
export default useInput;