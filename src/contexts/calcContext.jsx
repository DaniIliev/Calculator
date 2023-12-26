import { createContext, useContext, useState } from "react";



export const CalcContext = createContext()


export const CalcProvider = ({children}) => {
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState(0);

    const [displayValues, setDisplayValues] = useState("");

    const ops = ['/', '*', '+', '-', '.'];
    const trigonometric = ['cos', 'sin', 'tan', 'log', 'in'];

    const updateCalc = (value) => {
        // if(trigonometric.includes(value)){
        //     console.log()
        //     return setDisplayValues(state => state + value)
        // }

        if(ops.includes(value) && calc == "" ||
         ops.includes(value) && ops.includes(calc.slice(-1))
         ) {
            return
         }
         setDisplayValues(state => state + value)
         setCalc(state => state + value)
    }

    const calculate = () => {
        setResult(eval(calc).toString())
    }

    const contextValues = {
        updateCalc,
        calculate,
        setCalc,
        setResult,
        result: result || undefined,
        calc: calc || "0",
        displayValues: displayValues || "0",
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