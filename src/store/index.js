// Crear store (Redux state)
import {configureStore} from  '@reduxjs/toolkit';
import {createStore} from 'redux';
import productsReducer from './productos'
import { composeWithDevTools } from 'redux-devtools-extension'; //Para que funcionen las devtools de redux

// Crear Redux Store
//const store = configureStore();

const store = createStore ( productsReducer, composeWithDevTools() ); 
//let store = createStore ( productsReducer  );
//let store = configureStore ( productsReducer  );

export default store;
