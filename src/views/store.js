//==========STORE=============//

import { setProductoActivo } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localstorage"
import { openModal } from "./modal";

//Funcion que se encarga de traer los elementos y llamar al render
export const handleGetProductsToStore = ()=>{
    const products = handleGetProductLocalStorage();
    handleRenderList(products);

}

//Se encarga de filtrar y renderizar la seccion con todos sus respectivos elementos
export const handleRenderList = (productosIn) =>{
    //Filtrado de Arrays por categoria
    const burguers = productosIn.filter((el)=> 
        el.categories === "Hamburguesas");

    const papas = productosIn.filter((el)=> 
        el.categories === "Papas");

    const gaseosas = productosIn.filter((el)=> 
        el.categories === "Gaseosas");

//Renderiza los elementos de la seccion    
    const renderProductGroup = (productos, title)=>{
        
        if(productos.length > 0){
            const productosHTML = productos.map((producto, index)=>{
                return`<div class= "containerTargetItem" id = 'product-${producto.categories}-${index}'>
                    <div>
                        <img src="${producto.imagen}" />
                    <div>
                        <h2>${producto.nombre}</h2>
                    </div>
                    <div class= "targetProps">
                        <p><b>Precio: </b>$${producto.precio}</p>
                    </div>
                </div>

                </div>`;
            });
            //Retorna la seccion con todos los elementos dentro
            return `<section class= "sectionStore">
                    <div class = "containerTitleSection">
                    <h3>${title}</h3>
                    </div>
                    <div class = "containerProductStore">
                    ${productosHTML.join("")}
                    </div>
                </section>`;
        }else{
            return "";
        }
    };
// Renderiza cada uno de los productos dentro de su categoria
    const appContainer = document.getElementById("storeContainer");
    appContainer.innerHTML = 
        `${renderProductGroup(burguers, "Hamburguesas")}
        ${renderProductGroup(papas, "Papas")}
        ${renderProductGroup(gaseosas, "Gaseosas")}`;


//Eventos dinamicos
    const addEvents = (productsIn)=>{
        productsIn.forEach((element, index) => {
        const productContainer = document.getElementById(`product-${element.categories}-${index}`);
        if (productContainer) {
            productContainer.addEventListener('click', () => {
                setProductoActivo(element);
                openModal();
            });
        }
    });

    };
    addEvents(burguers);
    addEvents(papas);
    addEvents(gaseosas);
};