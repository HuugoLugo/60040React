import { useContext } from "react";
import "./stylesCartItem.css";
import { CartContext } from "../Context/CartContext";


function CartItem(item) {

    const { removeFromCart } = useContext(CartContext);

    return (
        <div className="cartItem">
            <p className="cartItemName">{item.name}</p>
            <p className="cartItemQuantity">{`${item.quantity} x $${item.price}`}</p>
            <p className="cartItemSubtotal">{`Subtotal: $${item.subtotal}`}</p>
            <button onClick={() => removeFromCart(item.id)}>x</button>
        </div>
    )
}

export default CartItem