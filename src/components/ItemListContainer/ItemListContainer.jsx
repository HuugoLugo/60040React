import "./stylesItemListContainer.css"

function ItemListContainer({ greeting }) {
    return (
        <div>
            <h2 className="message">{greeting}</h2>
        </div>
    )
}

export default ItemListContainer