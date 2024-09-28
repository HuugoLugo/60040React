import { useState } from "react";
import "./stylesItemCount.css";

function ItemCount({ initial, stock, onAdd }) {

    const [count, setCount] = useState(initial)

    const decrement = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }

    const increment = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    return (
        <div className="countCont">
            <button onClick={decrement}>-</button>
            <span className="count">{count}</span>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(count)} >Añadir al carrito</button>
        </div>
    )
}

export default ItemCount