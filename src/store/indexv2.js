// Crear store (Redux state)
import {configureStore, combineReducers} from  '@reduxjs/toolkit';
import {applyMiddleware} from 'redux';
import {productosReducer} from './productosReducerv2';  //sub-estado de los productos
import {frontendReducer}  from './frontendReducer';     //sub-estado manejar el app front-end
// middleware que habilita que los ActionCreator puedan retornar una funcion asíncrona
import  thunk  from 'redux-thunk';

//Para que funcionen las devtools de redux con la opcion createStore (deprecated)
// import { composeWithDevTools } from 'redux-devtools-extension'; 


const reducers = combineReducers( 
    {
     estadoProductos: productosReducer,
     frontend: frontendReducer
    } );
const store = configureStore ( {reducer:reducers }, applyMiddleware(thunk)  ); 

//const store = createStore ( reducers, composeWithDevTools() );  // Esta OK

export default store;
