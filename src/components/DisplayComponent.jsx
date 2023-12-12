import { useContext, useEffect, useState } from "react"
import { CalcContext } from "../contexts/calcContext"

export default function DisplayComponent(){
    
    const [calcResult, setCalcResult] = useState("")
    const {calc, ops} = useContext(CalcContext)
    
    useEffect(() => {
        if(!ops.includes(calc.slice(-1))){
            setCalcResult(eval(calc))
           }
    }, [calc])

    return(
        <>
           <div className="display">
                <span>({calcResult})</span>  {calc || 0}
            </div> 
        </>
    )
}