import { useState } from "react";

const useCounter=( valor =0 )=>{
    const [contador,setContador]=useState(valor);
    const increase=()=>{ setContador(contador+1)}
    const decrease=()=>{ setContador(contador-1)}
    const reset=()=>   { setContador(0)}
    return {contador, increase, decrease, reset}
}



export const PaginaEstados = ()=>{
//const [ cont, setCont] = useState( 0);
const contador1 = useCounter(0);
const contador2 = useCounter(100);

    return (
        <div className="paginaEstados">
            <div>
                <button onClick={ contador1.increase }>+</button>
                <button onClick={ contador1.decrease }>-</button>
                <button onClick={ contador1.reset }>Reset</button>
                <p>Cont 1: {contador1.contador }</p>
            </div>
            <div>
                <button onClick={ contador2.increase }>+</button>
                <button onClick={ contador2.decrease }>-</button>
                <button onClick={ contador2.reset }>Reset</button>
                <p>Cont 2: {contador2.contador }</p>
            </div>

        </div>
    )
}