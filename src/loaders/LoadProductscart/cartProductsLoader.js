import { getShoppingCart } from "../../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();

    const storedCart = getShoppingCart();
    console.log(storedCart)
    // storedcart a ami product gula k paisi object hishebe, tahole loop kori for in diye
    const savedCart = [];
    for (const id in storedCart) {
        const addedProducts = products.find(pd => pd.id === id);
        if (addedProducts) {
            const quantity = storedCart[id];
            addedProducts.quantity = quantity;
            savedCart.push(addedProducts);
        }
    }
    return savedCart;
}



export default cartProductsLoader;