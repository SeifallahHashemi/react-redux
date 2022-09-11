import {MdOutlineAddShoppingCart} from "react-icons/md";
import Card from "../../UI/Card/Card";
import classes from "./ProductItem.module.scss";
import Button from "../../UI/Button/Button";
import {useDispatch} from "react-redux";
import {cartActions} from "../../store/CartSlice";

// const url = `https://www.freepnglogos.com/uploads/burger-png/burger-png-png-images-yellow-images-12.png`;
const classNames = `${classes['productItem__price']} fs-lg`;
const ProductItem = props => {
    const dispatch = useDispatch();
    const {address, title, price, id} = props.properties;
    const addItemHandler = () => {
        dispatch(cartActions.addItemToCart({ id, price, title}))
    }
    return(
        <li>
            <Card className={classes.productItem}>
                <div className={classes['image__container']}>
                    <img src={address} alt={props.alt}/>
                </div>
                <div className={`${classes['productItem__content']} fs-lg`}>{title}</div>
                <div className={classNames}>
                    <span>{price} تومان</span>
                    <Button type={"button"} className={classes.btn} onClick={addItemHandler}>
                        <span>افزودن</span>
                        <MdOutlineAddShoppingCart />
                    </Button>
                </div>
            </Card>
        </li>
    )
}
export default ProductItem;