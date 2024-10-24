//************PRODUCTOS****************/
import { handleGetProductLocalStorage, setInLocalStorage } from "../persistence/localstorage";
import { closeModal } from "../views/modal";
import { handleGetProductsToStore, handleRenderList } from "../views/store";
// IMPORTA productoActivo Y setProductoActivo DESDE main.js
import { productoActivo, setProductoActivo } from "../../main";
import Swal from "sweetalert2";

// GUARDAR O MODIFICAR ELEMENTOS
const acceptButton = document.getElementById("acceptButton");
if (acceptButton) {
    acceptButton.addEventListener('click', handleSaveorModifyElements);
}

function handleSaveorModifyElements() {
    const nombre = document.getElementById("nombre").value,
        imagen = document.getElementById("img").value,
        precio = document.getElementById("precio").value,
        categories = document.getElementById("categoria").value;

    let object = null;
    if (productoActivo) {
        object = {
            ...productoActivo,
            nombre,
            imagen,
            precio,
            categories,
        };
    } else {
        object = {
            id: new Date().toISOString(),
            nombre,
            imagen,
            precio,
            categories,
        };
    }
    Swal.fire({
        title: "Correcto!",
        text: "El Producto se Guardó correctamente!",
        icon: "success"
      });

    setInLocalStorage(object);
    handleGetProductsToStore();
    closeModal(); // Cierra el modal después de guardar.
}

// FUNCIÓN ELIMINAR ELEMENTO
export const handleDeleteProduct = () => {
    Swal.fire({
        title: "Desea Eliminar el elemento?",
        text: "Se eliminará permanentemente",
        icon: "Atención",
        showCancelButton: true,
        confirmButtonColor: "#b8f3af",
        cancelButtonColor: "#ff574d",
        confirmButtonText: "Si, eliminar!"
      }).then((result) => {
        if (result.isConfirmed) {
            const products = handleGetProductLocalStorage();
            const result = products.filter((el) => el.id !== productoActivo.id);
            localStorage.setItem("products", JSON.stringify(result));
            const newProducts = handleGetProductLocalStorage();
            handleRenderList(newProducts);
            closeModal();
        }else{
            closeModal();
        }
      });
       
 
};

