// Comp ContextoProductos
// usa el hook de Context:  React.createContext() / useContext()
// para crear una estado global de Productos, similar a Redux
import React, {useState} from "react";


const Contexto = React.createContext();
export default Contexto; // el contexto original en default

//El provider (wrapper) se exporta con nombre y propaga el state
//productos a sus hijos:
export const ContextoProductosProvider=( {children} )=>{
    const { productos, setProductos} = useState( []);

    return (
        <Contexto.Provider value={{productos, setProductos}}>
            { children }
        </Contexto.Provider> 
     )
}