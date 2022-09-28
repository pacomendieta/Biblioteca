// Crear store (Redux state)
import {configureStore} from  '@reduxjs/toolkit';

// Crear Redux Store
//const store = configureStore();


store = createStore( librosReducer,  initialState );

export default store;
