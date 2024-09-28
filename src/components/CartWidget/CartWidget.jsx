import "./stylesCartWidget.css";
import { TiShoppingCart } from "react-icons/ti";

function CartWidget() {
    return (
        <div className="cartCont">
            <TiShoppingCart size="40px" />
            <span className="cartNumber">7</span>
        </div>
    )
}

export default CartWidget