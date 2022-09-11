import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import {AiOutlineShoppingCart} from "react-icons/ai";
import classes from './Cart.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {modalActions} from "../../store/ModalSlice";

const Cart = props => {
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const dispatch = useDispatch();
    const showModalHandler = () => {
        dispatch(modalActions.showModal())
    }
    return(
        <Card className={classes['btn__container']}>
            <Button className={classes.btn} type="button" onClick={showModalHandler}>
                <span>سبد خرید</span>
                <span>{totalQuantity}</span>
                <AiOutlineShoppingCart />
            </Button>
        </Card>
    )
};
export default Cart;