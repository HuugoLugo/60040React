import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import "./stylesCheckoutView.css";
import { CartContext } from "../Context/CartContext";


function CheckoutViewForm() {

    const { cart, setCart, total, totalQuantity, clearCart, orderDetail, setOrderDetail } = useContext(CartContext);

    const [formValue, setFormValue] = useState({
        client: "",
        email: "",
        repeatEmail: "",
        phone: "",
    });

    const [formError, setFormError] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormValue({
            ...formValue,
            [name]: value,
        })
    }

    const handleError = () => {
        let errors = {};
        if (formValue.client.length <= 3) errors.client = "No podemos registrar un nombre tan corto";
        if (!formValue.email) errors.email = "Debe escribir un email";
        if (formValue.repeatEmail !== formValue.email) errors.repeatEmail = "El correo escrito no coincide";
        if (formValue.phone.length !== 10) errors.phone = "Se requieren 10 digitos";
        return errors
    }

    const clearForm = () => {
        setFormValue({
            client: "",
            email: "",
            repeatEmail: "",
            phone: "",
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const errors = handleError()
        setFormError(errors)

        // le decimos que si no hay errores construya la orden
        if (Object.keys(errors).length === 0) {
            const orderInfo = {
                buyer: {
                    client: formValue.client,
                    email: formValue.email,
                    phone: formValue.phone
                },
                products: cart.map(product => ({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: product.quantity,
                    subtotal: product.subtotal
                })),
                totalQuantity: totalQuantity,
                total: total,
                date: new Date().toLocaleString(),
                state: "generada"
            }

            try {
                const db = getFirestore();
                const refOrder = collection(db, "orders")
                await addDoc(refOrder, orderInfo).then(({ id }) => {
                    setOrderDetail({ id, ...orderInfo })
                })
            }
            catch (error) {
                console.error("Error al agregar la orden: ", error)
            }
        }
    }

    const postOrder = () => {
        setCart([])
        clearForm()
    }

    if (orderDetail) {
        return (
            <div>
                <h2>Su compra ha sido realizada exitosamente</h2>
                <button onClick={postOrder}><Link to={`/order/${orderDetail.id}`}>Generar ticket</Link></button>
            </div>
        )
    }

    return (
        <>
            <form className="checkoutForm" onSubmit={handleSubmit} >
                <div className="checkoutPay">
                    <button style={{ backgroundColor: "darkgoldenrod" }} onClick={() => clearCart()}>Vaciar carrito</button>
                    <h4>{`Total a pagar: $${total}`}</h4>
                </div>
                <div className="elementRow">
                    <label>Nombre</label>
                    <input className="inputStyle" type="text" name="client" value={formValue.client} onChange={handleChange} />
                </div>
                {formError.client && <p style={{ color: "red" }}>{formError.client}</p>}
                <div className="elementRow">
                    <label >Correo</label>
                    <input className="inputStyle" type="email" name="email" value={formValue.email} onChange={handleChange} />
                </div>
                {formError.email && <p style={{ color: "red" }}>{formError.email}</p>}
                <div className="elementRow">
                    <label >*Correo</label>
                    <input className="inputStyle" type="email" name="repeatEmail" placeholder="Escriba de nuevo el correo" value={formValue.repeatEmail} onChange={handleChange} />
                </div>
                {formError.repeatEmail && <p style={{ color: "red" }}>{formError.repeatEmail}</p>}
                <div className="elementRow">
                    <label >Teléfono</label>
                    <input className="inputStyle" type="phone" name="phone" value={formValue.phone} onChange={handleChange} />
                </div>
                {formError.phone && <p style={{ color: "red" }}>{formError.phone}</p>}
                <fieldset>
                    <input required type="checkbox" name="terminos" value="terminos" />
                    <label htmlFor="terminos">Acepta nuestros términos & aviso de privacidad</label>
                </fieldset>
                <div className="elementRow">
                    <input type="reset" value="Limpiar datos" onClick={clearForm} />
                    <input className="btnPay" type="submit" value="Finalizar compra" />
                </div>
            </form>
        </>
    )
}

export default CheckoutViewForm