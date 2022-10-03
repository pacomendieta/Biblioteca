// Crear store (Redux state)
import {configureStore, combineReducers} from  '@reduxjs/toolkit';
import {createStore} from 'redux';
import {productosReducer} from './productosReducerv2';
import {frontendReducer}  from './frontendReducer';

//Para que funcionen las devtools de redux con la opcion createStore (deprecated)
import { composeWithDevTools } from 'redux-devtools-extension'; 


const reducers = combineReducers( 
    {
     estadoProductos: productosReducer,
     frontend: frontendReducer
    } );
const store = configureStore ( {reducer:reducers } ); //coge el composewithdevgtools ???  es necesario con configureStore ???
//const store = createStore ( reducers, composeWithDevTools() );  // Esta OK

export default store;
