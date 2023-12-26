import { useContext } from "react"
import { CalcContext } from "../../contexts/calcContext"


export default function SymbolBtn(){

    const {calc, setCalc, setResult} = useContext(CalcContext)

    const reset = () => {
        setCalc("")
    }

    const deleteLastChar = () => {
        setCalc(state => state.toString()?.slice(0, -1));
    }

    const mathSqrt = () => {
        const sqrt = Math.sqrt(calc).toString()
        setResult(sqrt)
    }

    const secondDegree = () => {
        console.log(String.fromCharCode(94))
    }

    return(
        <>
            <div className="symbolButtons">
                    <button className="symbolBtn" onClick={reset}>CLR</button> 
                    <button className="symbolBtn deleteSingleEl" onClick={deleteLastChar}><img src="/images/backspace.svg" alt="delete" className="delElement"/>BS</button> 
                    <button className="symbolBtn">{"%"}</button>
                    <button className="symbolBtn" onClick={mathSqrt}>√x</button>
                    <button className="symbolBtn" onClick={secondDegree}><img src="/images/xna2.png" alt="xna2" className="xna2" /></button>
            </div>
        </>
    )
}