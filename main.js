import { setInLocalStorage } from "./src/persistence/localstorage";
import { renderCategories } from "./src/service/categories";
import { handleSearchProductByName } from "./src/service/searchBar";
import { openModal } from "./src/views/modal";
import { handleGetProductsToStore } from "./src/views/store";
import "./style.css";

//*=====APLICACION======//
export let categoriaActiva = null;
export const setCategoriaActiva = (categoriaIn) => {
    categoriaActiva = categoriaIn;
};
export let productoActivo = null;
export const setProductoActivo = (productoIn) => {
    productoActivo = productoIn;
};

// Esperar a que el DOM esté completamente cargado antes de acceder a los elementos
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    handleGetProductsToStore();

    //* HEADER
    const buttonAdd = document.getElementById("buttonAddElement");
    if (buttonAdd) {
        buttonAdd.addEventListener('click', openModal);
    }

    //* ButtonSearch
    const ButtonSearch = document.getElementById("buttonSearch");
    if (ButtonSearch) {
        ButtonSearch.addEventListener('click', () => {
            handleSearchProductByName();
        });
    }
});


