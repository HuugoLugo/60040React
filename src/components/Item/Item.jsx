import { Link } from "react-router-dom";
import "./stylesItem.css";

function Item({ product }) {
    return (
        <div className="cardItem" >
            <img className="imgItem" src={product.image} alt={`Imagen de ${product.name}`} />
            <h3>{product.name}</h3>
            <p>{`Precio: $${product.price}`}</p>
            <button><Link to={`/item/${product.id}`}>Ver más</Link></button>
        </div>
    )
}

export default Item