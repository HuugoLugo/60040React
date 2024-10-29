import "./stylesCheckoutView.css";


function CheckoutViewCart(item) {

    return (
        <>
            <div className="checkoutCartItems">
                <img
                    className="checkoutCartImg"
                    src={item.image}
                    alt={`Imagen de ${item.name}`}
                />
                <div className="checkoutCartInfo">
                    <p>{`Producto: ${item.name}`}</p>
                    <p>{`Precio: $${item.price}`}</p>
                    <p>{`Cantidad: ${item.quantity}`}</p>
                    <p>{`Subtotal: $${item.subtotal}`}</p>
                </div>
            </div>
        </>
    )
}

export default CheckoutViewCart