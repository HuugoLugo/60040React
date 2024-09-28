import "./stylesItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({detail}) {
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
                <ItemCount initial={1} stock={detail.stock} onAdd={(count) => console.log(`Se ha añadido ${count} ${detail.name} al carrito`)} />
            </div>
        </div>
    )
}

export default ItemDetail