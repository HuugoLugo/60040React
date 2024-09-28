import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Todos los productos"} />}>
          </Route>
          <Route path="/category/:categoryId" element={<ItemListContainer greeting={"Categoría de productos"} />}>
          </Route>
          <Route path="/item/:itemId" element={<ItemDetailContainer />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App