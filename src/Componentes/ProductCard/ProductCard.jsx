//Componente ProductCard
//Ficha de datos de producto
import { Link } from "react-router-dom";  //para enlace <a> sin recargar pagina
import "../../css/productcard.css";
export const ProductCard = ({titulo, precio, imagen, id})=>{
    return (
        <div key={id}>
            <Link className="tituloProducto" to={`/producto/${id}`}>{titulo}</Link>
            <img className="imagenProducto" src={imagen} alt="Imagen de producto."></img>
            <p>Precio:{precio}</p>
        </div>
    )
}