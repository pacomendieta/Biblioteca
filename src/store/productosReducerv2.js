import {   createAsyncThunk, createSlice } from '@reduxjs/toolkit'; 
import Axios from 'axios';
import { startTransition } from 'react';
import { getProductos } from '../Servicios/Productos';
//import productos from './productos';

const urlapi = 'http://localhost:3001/productos';

// Crear el estado inicial
let estadoInicial = {
    total:1,
    productos:  [{id:1, titulo:"Producto1 de ProductReducer"}]
};

// Cargar Productos desde el API
export var productos=[]; //Array contenedor productos carga inicial desde api
//productos = getProductos();
console.log("Productos cargados desde API en store/productosReducer:", productos);

// ********************** VERSION SIMPLIFICADA ***********
const estadoinicial = {total:1,productos:[{id:1,titulo:'tituloUNO'}]};
export const productosReducer=(state=estadoinicial, action)=>{
    let newsta = JSON.parse( JSON.stringify( state ));

    switch (action.type) {
        case 'productos/reset':    // action: borrar productos del state.estadoProductos
            newsta.total=0;
            newsta.productos=[];
            break;
        case 'productos/init':    // action: cargar en state los productos del action.payload
            console.log("productos/init, action:", action);
            console.log("global productos:", productos);
            newsta.total=action.payload.length;
            newsta.productos=action.payload;
            break;
        case 'productos/add':   // action: añadir un nuevo producto del action.payload
            newsta.total++;
            newsta.productos.push(action.payload);
            break;
        case 'productos/del':  // action: borrar ultimo producto del state.estadoProductos
            if (newsta.total) {
                newsta.total--;
                newsta.productos.pop();  
            }
            break;
        default:
            return state;
    }
    return newsta;
    
}

// initProductos retorna la action productos/init con payload=todos los productos del api
// puede ser llamada desde dispatcher ( initProductos() ) para la carga inicial
export const initProductos= (prods )=>{
    //console.log("prods=", prods);
    //console.log("stringify prods=", JSON.stringify (prods));

    //productos = JSON.parse(JSON.stringify(prods) );
    //console.log("productos=",productos);
    productos = [];
    prods.map (prod=>productos.push({id:prod.id, titulo:prod.title}));
    console.log('...retorna action=',{ type:"productos/init", payload: productos } );
    return { type:"productos/init", payload: productos };
}