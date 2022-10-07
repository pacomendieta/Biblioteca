//Interfaz con api externo de productos
import axios from 'axios';

let apiurl = 'http://localhost:3001/productos';

export const getProductos= async ()=>{
    const res = await axios.get(apiurl)
    return res.data;
}

export const addProducto = async ( producto )=>{
    let res={};
    try {
        res = await axios.post(apiurl, producto);
    }catch(e) {
        console.log("ERROR:", e);
    }

    return res.data;
}

export const searchProductos=  async ({id,titulo})=>{
    console.log("   ini searchProductos() busca id,titulo:", id,titulo)
    let prods=[];
    if ( !id && !titulo) return [] ; 
    let url, res;
    if ( id ) {
        if (id=='*')  { //  id=*  buscar todos
            url = apiurl;
            try {   
                res = await axios.get(url); 
                if ( res) prods = res.data; 
            } 
            catch {  
                prods=[]
            }
        } else {       // id = id   buscar uno
            url = apiurl + `/${id}`;
            try {   
                res = await axios.get(url); 
                if ( res) prods.push(res.data); 
            } 
            catch {  
                prods=[]
            }
       }
    }  
    else  { // id vacio, buscar por titulo
        titulo? url = apiurl + `?title=${titulo}` : url=apiurl;
        console.log("axios busca en: ", url);
        res = await axios.get(url);
        if ( res) prods = res.data; 
        console.log("... axios en searcProductos retorna:", res.data)
    }
    return prods;
}