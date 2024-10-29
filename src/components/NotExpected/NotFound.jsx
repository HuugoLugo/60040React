import gifLost from "../../assets/lostTravolta.gif";
import "./stylesNotExpected.css";


function NotFound() {

    return (
        <div>
            <h2>No sabemos por que busca eso, pero aquí no está.</h2>
            <img className="gifLost" src={gifLost} alt="Gif persona perdida" />
        </div>
    )
}

export default NotFound