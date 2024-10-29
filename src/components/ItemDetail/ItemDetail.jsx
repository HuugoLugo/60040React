import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./stylesItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../Context/CartContext";
import { ToastContainer } from "react-toastify";


function ItemDetail({ detail }) {

    const [quantity, setQuantity] = useState(0)
    const { addToCart } = useContext(CartContext)

    const handleQuantity = (quantity) => {
        console.log(`Se ha añadido ${quantity} ${detail.name} al carrito`)
        setQuantity(quantity)

        const itemInCart = {
            id: detail.id, image: detail.image, name: detail.name, price: detail.price, subtotal: detail.price * quantity, stock: detail.stock
        }
        addToCart(itemInCart, quantity)
    }

    return (
        <div className="cardItemDetail">
            <div className="divider">
                <img className="imgItemDetail" src={detail.image} alt={`Imagen de ${detail.name}`} />
            </div>
            <div className="divider">
                <h3>{`Producto: ${detail.name}`}</h3>
                <h4>{`Categoría: ${detail.category}`}</h4>
                <p>{detail.description}</p>
                <p>{`Precio: $${detail.price}`}</p>
                <>
                    {
                        quantity > 0 ? (
                            <button><Link to={"/cart"}>Ir al carrito</Link></button>)
                            : (
                                <ItemCount initial={1} stock={detail.stock} onAdd={handleQuantity} />)
                    }
                </>
                <ToastContainer />
            </div>
        </div>
    )
}

export default ItemDetail