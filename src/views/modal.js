//* =====POPUP===== *//

import { productoActivo, setProductoActivo } from "../../main";
import { handleDeleteProduct } from "../service/products";

// BOTÓN CANCELAR
const cancelButton = document.getElementById("cancelButton");
if (cancelButton) {
    cancelButton.addEventListener('click', closeModal);
}

// FUNCIONES ABRIR Y CERRAR MODAL
export function openModal() {
    const modal = document.getElementById('modalPopUp');
    if (modal) {
        modal.style.display = "flex";
    }
    const buttonDelete = document.getElementById("deleteButton");
    if(productoActivo){
        buttonDelete.style.display = "block";
    }else{
        buttonDelete.style.display = "none";
    }

    if (productoActivo) {
        const nombre = document.getElementById("nombre"),
            imagen = document.getElementById("img"),
            precio = document.getElementById("precio"),
            categories = document.getElementById("categoria");

        // Rellenar los campos del modal con los datos de productoActivo
        imagen.value = productoActivo.imagen;
        precio.value = productoActivo.precio;
        nombre.value = productoActivo.nombre;
        categories.value = productoActivo.categories;
    }
}

export function closeModal() {
    const modal = document.getElementById('modalPopUp');
    if (modal) {
        modal.style.display = "none";
    }
    setProductoActivo(null); // Resetea productoActivo al cerrar el modal
    resetModal();
}

// Función para resetear los inputs del modal
const resetModal = () => {
    const nombre = document.getElementById("nombre"),
        imagen = document.getElementById("img"),
        precio = document.getElementById("precio"),
        categories = document.getElementById("categoria");

    // Restablecer valores de los inputs
    imagen.value = "";
    precio.value = 0;
    nombre.value = "";
    categories.value = "Seleccione una categoria";
};

// BOTÓN ELIMINAR
const deleteButton = document.getElementById("deleteButton");
if (deleteButton) {
    deleteButton.addEventListener('click', () => {
        handlebuttonDelete();
    });
}

const handlebuttonDelete = () => {
    handleDeleteProduct();
};
