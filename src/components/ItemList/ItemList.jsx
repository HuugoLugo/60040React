import Item from "../Item/Item";


function ItemList({ products }) {
    return (
        products.map((product) => (
            <div key={product.id}>
                <Item product={product} />
            </div>
        ))
    )
}

export default ItemList