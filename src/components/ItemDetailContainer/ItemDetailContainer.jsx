import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import "./stylesItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import NotFound from "../NotExpected/NotFound";


function ItemDetailContainer() {

    const [productDetail, setProductDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { itemId } = useParams();

    useEffect(() => {

        const db = getFirestore()

        const refItemDetail = doc(db, "items", itemId)

        getDoc(refItemDetail)
            .then(snapshot => {
                if (snapshot.exists()) {
                    const productData = ({ id: snapshot.id, ...snapshot.data() })
                    setProductDetail(productData)
                    console.log(productData)
                } else {
                    setError(true)
                }

                setTimeout(() => {
                    setLoading(false)
                }, 2000)
            })
            .catch(error => {
                console.error(error)
                setError(true)
            })

    }, [itemId])

    if (loading) {
        return (
            <h2>Cargando...</h2>
        )
    }

    if (error) {
        return (
            <NotFound />
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