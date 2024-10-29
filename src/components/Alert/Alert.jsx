import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Swal from "sweetalert2";


export const toastAdd = () => {
    toast.success("Se ha añadido al carrito", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    })
}

export const sweetRemove = () => {
    Swal.fire({
        icon: "error",
        title: "Producto eliminado del carrito",
        toast: true,
        position: "center-end",
        showConfirmButton: false,
        background: "#99582a",
        iconColor: "#4f000b",
        color: "#f9f7f3",
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    })
}

export const sweetClear = () => {
    Swal.fire({
        title: "Carrito vacio",
        text: "Se ha vaciado el carrito de compra.",
        icon: "success",
        background: "#242424",
        color: "#f9f7f3",
        confirmButtonColor: "#9BEC00",
        timer: 6000
    })
}

export const sweetNoStock = () => {
    Swal.fire({
        title: "No hay suficiente stock",
        text: "Lo sentimos, ese producto ya fue agregado y nuestro stock no es suficiente",
        icon: "warning",
        background: "#242424",
        color: "#f9f7f3",
        confirmButtonColor: "#9BEC00",
        confirmButtonText: "Entendido",
        timer: 6000
    })
}

export const sweetThankful = () => {
    Swal.fire({
        title: "Muchas gracias por su preferencia",
        text: "Le deseamos un excelente día",
        imageUrl: "https://unsplash.it/400/200",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Imagen aleatoria",
        timer: 6000
    })
}
