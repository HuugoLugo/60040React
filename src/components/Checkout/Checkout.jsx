import { useContext } from "react";
import "./stylesCheckout.css";
import { CartContext } from "../Context/CartContext";
import EmptyCart from "../NotExpected/EmptyCart.jsx";
import CheckoutViewCart from "../CheckoutView/CheckoutViewCart";
import CheckoutViewForm from "../CheckoutView/CheckoutViewForm.jsx";


function Checkout() {

    const { cart, totalQuantity } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <EmptyCart />
        )
    }

    return (
        <>
            <h2 style={{ color: "#242424" }}>Finalizar compra</h2>
            <div className="checkoutView">
                <div className="checkoutViewCart">
                    {cart.map((item, id) => (
                        <CheckoutViewCart key={id} {...item} />
                    ))}
                </div>
                <div className="checkoutViewForm">
                    <CheckoutViewForm />
                </div>
            </div>
        </>
    )
}

export default Checkout;