
import React, {useContext} from 'react'
import ContextoProductos from '../Hooks/ContextoProductos.js'

export const ListadoContext = ()=>{
    const contextoProductos=useContext( ContextoProductos)
    console.log("ContextoProductos:",contextoProductos)
    return (
        <div>
            <h3>Lista de Productos</h3>
            <p>aqui está disponible contextoProductos.productos 
                y contextoProductos( contexto usado en ContextoProductos.js ) 
                tiene en sus propiedades el state propago:
                contextoProductos.Productos y contextoProductos.setProductos()
              
            </p>
        </div>
    )
}