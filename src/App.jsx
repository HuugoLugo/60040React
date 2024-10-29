import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/Context/CartContext";
import NotFound from "./components/NotExpected/NotFound";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import CheckoutOrder from "./components/CheckoutOrder/CheckoutOrder";


function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<ItemListContainer greeting={"Todos los productos"} />}>
            </Route>
            <Route path="/category/:categoryId" element={<ItemListContainer greeting={"Categoría de productos"} />}>
            </Route>
            <Route path="/item/:itemId" element={<ItemDetailContainer />}>
            </Route>
            <Route path="/cart" element={<Cart />}>
            </Route>
            <Route path="/checkout" element={<Checkout />}>
            </Route>
            <Route path="/order/:orderId" element={<CheckoutOrder />}>
            </Route>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App