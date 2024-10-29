import { createContext, useState } from "react";
import { toastAdd, sweetRemove, sweetClear, sweetNoStock, sweetThankful } from "../Alert/Alert";


export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    { cart.length > 0 && console.log(cart) }

    const addToCart = (item, quantity) => {
        const itemInCart = cart.find(prod => prod.id === item.id);
        if (itemInCart) {
            if (itemInCart.quantity + quantity <= item.stock) {
                itemInCart.quantity += quantity
                itemInCart.subtotal = itemInCart.price * itemInCart.quantity
                setCart([...cart])
                toastAdd()
            } else {
                console.error("El producto ya fue agregado y nuestro stock no es suficiente")
                sweetNoStock()
            }
        } else {
            setCart(prevState => [...prevState, { ...item, quantity }])
            toastAdd()
        }
    }

    const removeFromCart = (itemId) => {
        const updateCart = cart.filter(prod => prod.id !== itemId)
        setCart(updateCart)
        sweetRemove()
    }

    const clearCart = () => {
        setCart([])
        sweetClear()
    }


    let totalQuantity = 0;
    cart.forEach((item) => (totalQuantity += item.quantity));

    let total = 0;
    cart.forEach((item) => (total = total + item.subtotal));
    { total > 0 && console.log(`La cantidad a pagar es de: $${total}`) }


    const [orderDetail, setOrderDetail] = useState(null);

    const endOperation = () => {
        setOrderDetail([])
        sweetThankful()
    }

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart, clearCart, totalQuantity, total, orderDetail, setOrderDetail, endOperation }} >
            {children}
        </CartContext.Provider>
    )
}
