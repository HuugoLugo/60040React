import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./stylesItemDetailContainer.css";
import { productsData } from "../../data/productsData";
import ItemDetail from "../ItemDetail/ItemDetail";


function ItemDetailContainer() {

    const [productDetail, setProductDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {

        const getDetail = () => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(productsData.find(product => product.id === parseInt(itemId)))
                }, 3000)
            })
        }

        getDetail()
            .then(response => {
                setProductDetail(response)
                console.log(response)
                setLoading(false)
            })
            .catch(error => {
                console.error(error)
            })

    }, [itemId])

    if (loading) {
        return (
            <h2>Cargando...</h2>
        )
    }

    return (
        <>

            <div className="cardItemCont">
                <h2>Detalle de producto</h2>
                <ItemDetail detail={productDetail} />
            </div>
        </>
    )
}

export default ItemDetailContainer