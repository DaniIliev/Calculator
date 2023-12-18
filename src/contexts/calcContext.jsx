import { createContext, useContext, useState } from "react";



export const CalcContext = createContext()


export const CalcProvider = ({children}) => {
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState(0);

    const ops = ['/', '*', '+', '-', '.'];

    const updateCalc = (value) => {
        if(ops.includes(value) && calc == "" ||
         ops.includes(value) && ops.includes(calc.slice(-1))
         ) {
            return
         }
         setCalc(state => state + value)
    }

    const calculate = () => {
        setResult(eval(calc).toString())
    }

    const contextValues = {
        updateCalc,
        calculate,
        setCalc,
        result: result || undefined,
        calc: calc || "0",
        ops,
    }
    return(
    <>
    <CalcContext.Provider value={contextValues}>
        {children}
    </CalcContext.Provider>
    </>
    )
}

export const useCalcContext = () => {
    const context = useContext(CalcContext)
    return context
}