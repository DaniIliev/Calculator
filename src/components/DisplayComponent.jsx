import { useContext, useEffect, useState } from "react"
import { CalcContext } from "../contexts/calcContext"

export default function DisplayComponent(){
    
    const [calcResult, setCalcResult] = useState("")
    const {calc, ops, setResult, setCalc, result,setDisplayValues, displayValues} = useContext(CalcContext)
    
    useEffect(() => {
        if(result && ops.includes(calc?.slice(-1))){
            setCalc(result)
            setResult(0)
        }
        if(!ops.includes(calc?.slice(-1))){
            setCalcResult(eval(calc.replace('(', '').replace(')', '')))
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