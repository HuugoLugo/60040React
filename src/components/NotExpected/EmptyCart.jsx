import { Link } from "react-router-dom";
import "./stylesNotExpected.css";


function EmptyCart() {

    return (
        <div>
            <h2>No hay ningún producto en el carrito</h2>
            <button className="btnKeepBuying">
                <Link to={"/"}>Seguir comprando</Link>
            </button>
        </div>
    )
}

export default EmptyCart