import { useParams } from "react-router-dom";
import { useEffect, useState} from "react";
import axios from "axios";
import { ProductCard } from "../ProductCard/ProductCard";
import '../../css/productdetail.css';

//Componente ProductDetail
export const ProductDetail = ()=>{
    let { id } = useParams();
    //console.log("Parámetro id = ", id);
    var [product, setProduct] = useState({});
    useEffect( ()=>{
        if (product == {}) return;
        //console.log("Invocando api ",`https://fakestoreapi.com/products/${id}` );
        axios.get( `https://fakestoreapi.com/products/${id}`)
        .then((result)=>{
                //console.log("---Resultado del api:", result.data);
                setProduct(result.data);
               })
        }
    , [] );

return (
    <div className="productDetail">
        <h2>Detalle de Producto id={id}</h2>
        <ProductCard
            titulo={product.title}
            imagen={product.image} 
            precio={product.price}
            descripcion = {product.description}
        />
    </div>
)
}
