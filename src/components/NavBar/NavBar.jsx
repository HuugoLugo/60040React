import "./stylesNavBar.css";
import brandPana from "../../assets/logoPanaderiaNancy.png";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
    return (
        <nav className="navBar">
            <div>
                <img className="brandPana" src={brandPana} alt="Logo del negocio" />
            </div>
            <ul className="categoriesCont">
                <li className="categories">
                    <a href="#">Inicio</a>
                </li>
                <li className="categories">
                    <a href="#">Panadería</a>
                </li>
                <li className="categories">
                    <a href="#">Pastelería</a>
                </li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar