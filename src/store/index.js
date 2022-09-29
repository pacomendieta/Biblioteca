// Crear store (Redux state)
import {configureStore} from  '@reduxjs/toolkit';
import {createStore} from 'redux';
import productsReducer from './productos'

// Crear Redux Store
//const store = configureStore();


let store = createStore ( productsReducer  );
//let store = configureStore ( productsReducer  );

export default store;
