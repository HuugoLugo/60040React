import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./stylesItemListContainer.css";
import { productsData } from "../../data/productsData";
import ItemList from "../ItemList/ItemList";


function ItemListContainer({ greeting }) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();


    useEffect(() => {
        const getDataProducts = () => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(productsData)
                }, 3000)
            })
        }

        getDataProducts()
            .then(response => {
                if (categoryId) {
                    const categoryProducts = response.filter(product => product.category === categoryId)
                    console.log(categoryProducts);
                    setProducts(categoryProducts);

                } else {
                    console.log(response);
                    setProducts(response);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
            })

    }, [categoryId])

    if (loading) {
        return <h2>Cargando...</h2>
    }

    return (
        <>
            <h2> {greeting} </h2>
            <div className="cardItemsCont">
                <ItemList products={products} />
            </div>
        </>
    )
}

export default ItemListContainer