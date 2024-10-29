import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import "./stylesItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import NotFound from "../NotExpected/NotFound";


function ItemListContainer({ greeting }) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { categoryId } = useParams();

    useEffect(() => {

        const db = getFirestore()

        const refItemsCollection = categoryId ?
            query(collection(db, "items"), where("category", "==", categoryId))
            :
            collection(db, "items")

        getDocs(refItemsCollection)
            .then((snapshot) => {
                if (snapshot.empty) {
                    setError(true)
                } else {
                    const productsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                    setProducts(productsData)
                    console.log(productsData)
                }

                setTimeout(() => {
                    setLoading(false)
                }, 2000)
            })
            .catch(error => {
                console.error(error)
                setError(true)
            })

    }, [categoryId])

    if (loading) {
        return <h2>Cargando...</h2>
    }

    if (error) {
        return (
            <NotFound />
        )
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