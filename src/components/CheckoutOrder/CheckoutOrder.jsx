import { useNavigate, Link } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useContext, useState } from "react";
import "./stylesCheckoutOrder.css";
import { CartContext } from "../Context/CartContext";


function CheckoutOrder() {

    const { orderDetail, setOrderDetail, endOperation } = useContext(CartContext);
    { orderDetail && console.log(orderDetail) }

    const [orderIdInput, setOrderIdInput] = useState("");
    const [orderNotFound, setOrderNotFound] = useState(false);
    const navigate = useNavigate();

    const handleOrderSearch = () => {
        const db = getFirestore()
        const orderRef = doc(db, "orders", orderIdInput)
        getDoc(orderRef)
            .then(snapshot => {
                if (snapshot.exists()) {
                    const order = ({ id: snapshot.id, ...snapshot.data() })
                    setOrderDetail(order)
                    navigate(`/order/${orderIdInput}`)
                } else {
                    setOrderNotFound(true)
                }
            })
    }

    if (!orderDetail) {
        return (
            <div>
                <h2>No hay ninguna orden generada por el momento</h2>
                <div className="orderSearch">
                    <label>Buscar #ticket</label>
                    <input className="orderInput"
                        type="text"
                        value={orderIdInput}
                        onChange={(e) => setOrderIdInput(e.target.value)} // Actualiza el estado temporal
                        placeholder="Escriba su número de orden"
                    />
                    <button onClick={handleOrderSearch}>Buscar</button>
                    {orderNotFound && <p style={{ color: "red" }}>Esa orden no existe.</p>}
                </div>
            </div>
        )
    }

    return (
        <>
            <h2>Orden de compra</h2>
            <section className="orderCont">
                <h3>{`#Ticket: ${orderDetail.id}`} </h3>
                <p>{`Cliente: ${orderDetail.buyer.client}`}</p>
                <h3>Productos</h3>
                <ul className="orderListCont">
                    {orderDetail.products.map((item, id) => (
                        <li key={id}   >
                            <p>{`Producto: ${item.name}`}</p>
                            <p>{`Precio: $${item.price}`}</p>
                            <p>{`Cantidad: ${item.quantity}`}</p>
                            <p>{`Subtotal: $${item.subtotal}`}</p>
                        </li>
                    ))}
                </ul>
                <h4>{`Cantidad total de productos: ${orderDetail.totalQuantity}`}</h4>
                <h4>{`Total: $${orderDetail.total}`}</h4>
                <h6>{`Fecha de compra: ${orderDetail.date}`}</h6>
            </section>
            <button className="btnEnd" onClick={endOperation}><Link to={"/"}>Terminar operación</Link></button>
        </>
    )
}

export default CheckoutOrder