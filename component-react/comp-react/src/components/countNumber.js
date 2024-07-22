import { useState } from "react"
export default function CountNumber(){
    const [number, setNumber] = useState(0)
    return(
        <>
            <h1>{number}</h1>
            <button onClick={()=>setNumber(number-1)}>-</button>
            <button onClick={()=>setNumber(number+1)}>+</button>
        </>
    )
}