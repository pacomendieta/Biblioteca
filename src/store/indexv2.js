// Crear store (Redux state)
import {configureStore, combineReducers} from  '@reduxjs/toolkit';
import {createStore} from 'redux';
import {productosReducer} from './productosReducerv2'
import { composeWithDevTools } from 'redux-devtools-extension'; //Para que funcionen las devtools de redux


const reducers = combineReducers( {estadoProductos: productosReducer } );
const store = configureStore ( reducers, composeWithDevTools() ); 


export default store;
