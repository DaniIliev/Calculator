import { useContext, useEffect, useState } from "react"
import { CalcContext } from "../contexts/calcContext"

export default function DisplayComponent(){
    
    const [calcResult, setCalcResult] = useState("")
    const {calc, ops, result, displayValues} = useContext(CalcContext)
    
    useEffect(() => {
        if(!ops.includes(calc?.slice(-1))){
            console.log(calc)
            setCalcResult(eval(calc.replace('(', '')))
           }
    }, [calc])

    return(
        <>
           <div className="display">
                {result ? result : (
                    <>
                    <span>({calcResult})</span> {displayValues || 0} 
                    </>
                )}
            </div> 
        </>
    )
}