import { createContext, useContext, useState } from "react";



export const CalcContext = createContext()


export const CalcProvider = ({children}) => {
    const [calc, setCalc] = useState("")

    const ops = ['/', '*', '+', '-', '.', '(', ')'];

    const updateCalc = (value) => {
        if(ops.includes(value) && calc == "" ||
         ops.includes(value) && ops.includes(calc.slice(-1))
         ) {
            console.log('in')
            return
         }
         setCalc(state => state + value)
    }

    const calculate = () => {
        setCalc(eval(calc).toString())
    }

    const contextValues = {
        updateCalc,
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