/////////////LOCALSTORAGE////////////////

//Traer productos localStorage
export const handleGetProductLocalStorage = ()=>{
    const products = JSON.parse(localStorage.getItem("products"));
    if(products){
        return products
    }else{
        return[];
    }

};

//guardar en localStorage
export const setInLocalStorage = (productIn) =>{

    if(productIn){
    let productInLocal = handleGetProductLocalStorage();
    console.log(productIn);
    const existingIndex = productInLocal.findIndex((productsLocal)=>
        productsLocal.id === productIn.id
    );

    if(existingIndex !== -1){
            productInLocal[existingIndex] = productIn;
    }else{
            productInLocal.push(productIn);
    }   

    localStorage.setItem("products", JSON.stringify(productInLocal));
    }
}