import ProductItem from "./ProductItem";
import classes from "./Products.module.scss";

const DUMMY_DATA = [
    {
        url: `https://www.freepnglogos.com/uploads/burger-png/burger-png-png-images-yellow-images-12.png`,
        title: 'همبرگر',
        price: 20000,
        id: 'Hamburger'
    },
    {url: `https://i.postimg.cc/28pC7f4d/pizza-png.png`, title: 'پیتزا', price: 50000, id: 'pizza'},
    {
        url: `https://i.postimg.cc/3r0KGwDJ/lasagne-png.png`,
        title: 'لازانیا',
        price: 60000,
        id: 'lasagna'
    },
];
const Products = props => {
    return (
        <ul className={classes['product__container']}>
            {DUMMY_DATA.map(product => (
                <ProductItem key={product.id} properties={{
                    address: product.url,
                    title: product.title,
                    price: product.price,
                    id: product.id
                }} alt={"photo"}/>
            ))}
        </ul>
    )
};
export default Products;