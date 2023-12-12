import { createContext, useContext, useState } from "react";



export const CalcContext = createContext()


export const CalcProvider = ({children}) => {
    const [calc, setCalc] = useState()

    const updateCalc = value => {
        setCalc(calc + value)
    }

    const contextValues = {
        sayHi: 'Hello world',
        updateCalc,
        calc: calc || "0",
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