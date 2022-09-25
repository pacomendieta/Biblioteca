import { useParams } from "react-router-dom"

//Componente ProductDetail
export const ProductDetail = ()=>{
let { id } = useParams();
return (
    <h2>Detalle de Producto id={id}</h2>
)

}