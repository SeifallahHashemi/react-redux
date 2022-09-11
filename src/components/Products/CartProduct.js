import Button from "../../UI/Button/Button";
import classes from "./CartProducts.module.scss";
import {useDispatch} from "react-redux";
import {cartActions} from "../../store/CartSlice";

const CartProduct = props => {
    // const items = useSelector(state => state.cart.items);
    // const findItem = items.find(item => item.id === props.id);
    const {id, title, price, quantity, totalPrice} = props;
    const dispatch = useDispatch();
    const addItemHandler = () => {
        dispatch(cartActions.addItemToCart({id, title, price, quantity}));
    }
    const removeItemHandler = () => {
        console.log(id)
        dispatch(cartActions.removeItemfromCart(id))
    }
    return(
        <li className={classes.cartProducts}>
            <div className={classes['cartProducts__title']}>
                <p>{title}</p>
                <div className={classes['cartProducts__quantity']}>
                    <p>تعداد</p>
                    <span>x {quantity}</span>
                </div>
                <div className={classes['cartProducts__button--container']}>
                    <Button type={"button"} className={classes['cartProducts__button']} onClick={addItemHandler}>+</Button>
                    <Button type={"button"} className={classes['cartProducts__button']} onClick={removeItemHandler}>-</Button>
                </div>
            </div>
            <div className={classes['cartProducts__price']}>
                <p>ارزش(تومان)</p>
                <span>{totalPrice}</span>
            </div>
        </li>
    )
};
export default CartProduct;