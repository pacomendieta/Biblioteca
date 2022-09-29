import {   createAsyncThunk, createSlice } from '@reduxjs/toolkit'; 
import Axios from 'axios';

// Crear Reducer de Productos
let estadoInicial = {
    total:1,
    productos:  [{id:1, titulo:"Producto1"}]
};

//funciones REDUCER ------------------------------------------------------
let addReducer=(state, action)=> {
    //console.log("..addReducer..");
    let newstate = state;
    newstate.total++;
    newstate.productos.push({id:action.producto.id, titulo:action.producto.titulo});
    return newstate;
}
let delReducer=(state, action)=> {
        //console.log("..delReducer..");
        let newstate = state;
        newstate.total = newstate.total ? newstate.total-1: 0;
        newstate.productos.pop();
        return newstate;
    
    return state;
}

//--Reducer asincrono listado
export const listado = createAsyncThunk ('productos/listado', async ({})=>{
    // SignIn asincrono
    //console.log("Dentro de signIn Action. Credenciales:", credenciales);
    let respuesta=await Axios.post(``,{});
    //console.log("Respuesta servicio web"+`Config.servicioVideoapi/users/singIn en .data.user`, respuesta.data.user );
    return respuesta ? respuesta.data : null;
})



let listado1=(state, action) => { 
    return state;
}
let listado2=(state, action) => { 
    return state;
}
let listado3=(state, action) => { 
    return state;
}

//CREAR EL ESTADO DE PRODUCTOS:   productSlice ---------------------------
let productSlice = createSlice({
    name: 'productos',                  // nombre del slice en el debugger
    initialState: estadoInicial,        // estado inicial
    reducers: {                         // reducers 'normales' es decir síncronos: 
        add: addReducer,
        del: delReducer
    },
    extraReducers: {                   // reducers que son de tipo asincrono. Un reducer por cada estado de la promise retornada por createAsyncThunk
        [listado.pending]:  listado1,
        [listado.fulfilled]:listado2,
        [listado.rejected]: listado3,

    }
})
console.log("productSlice Creado: ", productSlice);
console.log("Estado Inicial:", productSlice.getInitialState());

//Exportar los reducers del Slice 
export default productSlice.reducer;
