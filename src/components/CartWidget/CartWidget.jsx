import { Link } from "react-router-dom";
import { useContext } from "react";
import "./stylesCartWidget.css";
import { TiShoppingCart } from "react-icons/ti";
import { CartContext } from "../Context/CartContext";


function CartWidget() {
    const { totalQuantity } = useContext(CartContext);

    return (
        <div className="cartCont">
            <Link to={"/cart"}>
                <TiShoppingCart size="40px" />
                <span
                    className="cartNumber"
                    style={{ display: totalQuantity > 0 ? "block" : "none" }}
                >{`${totalQuantity}`}</span>
            </Link>
        </div>
    )
}

export default CartWidget