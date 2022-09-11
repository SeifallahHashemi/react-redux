import {useDispatch, useSelector} from "react-redux";
import CartProduct from "./CartProduct";
import classes from "./CartProvider.module.scss";
import {Fragment} from "react";
import Button from "../../UI/Button/Button";
import {modalActions} from "../../store/ModalSlice";

const CartProvider = () => {
    const dispatch = useDispatch();
    const productItems = useSelector(state => state.cart.items);
    const paymentButtonStyles = `${classes['buttonContainer__item']} ${classes['buttonContainer__item--payment']}`;
    const cancelButtonStyles = `${classes['buttonContainer__item']} ${classes['buttonContainer__item--cancel']}`;
    const hideModalHandler = () => {
        dispatch(modalActions.hideModal())
    }
    return (
        <Fragment>
            <ul className={classes.cartProviderListItem}>
                {productItems.map(item => (
                    <CartProduct key={item.id} title={item.title} quantity={item.quantity} price={item.price}
                                 id={item.id}
                                 totalPrice={item.totalPrice}/>
                ))}
            </ul>
            <div className={classes.buttonContainer}>
                <Button className={paymentButtonStyles} type={'button'} onClick={hideModalHandler}>پرداخت</Button>
                <Button className={cancelButtonStyles} type={'button'} onClick={hideModalHandler}>انصراف</Button>
            </div>
        </Fragment>
    )
};
export default CartProvider;