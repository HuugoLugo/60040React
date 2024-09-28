import { Link } from "react-router-dom";
import "./stylesNavBar.css";
import brandPana from "../../assets/logoPanaderiaNancy.png";
import CartWidget from "../CartWidget/CartWidget";


function NavBar() {
    return (
        <nav className="navBar">
            <div>
                <Link to={"/"}><img className="brandPana" src={brandPana} alt="Logo del negocio" /></Link>
            </div>
            <ul className="categoriesCont">
                <li className="categories">
                    <Link to={"/"}>Inicio</Link>
                </li>
                <li className="categories">
                    <Link to={"/category/Panaderia"}>Panadería</Link>
                </li>
                <li className="categories">
                    <Link to={"/category/Pasteleria"}>Pastelería</Link>
                </li>
                <li className="categories">
                    <Link to={"/category/Extras"}>Extras</Link>
                </li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar