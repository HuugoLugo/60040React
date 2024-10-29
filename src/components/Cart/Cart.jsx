import { Link } from "react-router-dom";
import { useContext } from "react";
import "./stylesCart.css";
import { CartContext } from "../Context/CartContext";
import EmptyCart from "../NotExpected/EmptyCart";
import CartItem from "../CartItem/CartItem";


function Cart() {

    const { cart, clearCart, total, totalQuantity } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <EmptyCart />
        )
    }

    return (
        <>
            <h2>Carrito</h2>
            <div className="cartItemsCont">
                {cart.map((item, id) => (
                    <CartItem key={id} {...item} />
                ))}
            </div>
            <div className="divide">
                <p>{`Total: $${total}`}</p>
                <button onClick={() => clearCart()}>Limpiar carrito</button>
            </div>
            <button className="btnToCheckout">
                <Link to={"/checkout"}>Ir a pagar</Link>
            </button>
        </>
    )
}

export default Cart