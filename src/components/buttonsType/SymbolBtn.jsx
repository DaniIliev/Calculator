import { useContext } from "react"
import { CalcContext, ops } from "../../contexts/calcContext"


export default function SymbolBtn(){

    const {calc, setCalc, setResult, setDisplayValues} = useContext(CalcContext)

    const reset = () => {
        setCalc("");
        setDisplayValues('');
        setResult(calc);
    }

    const deleteLastChar = () => {
        setCalc(state => state?.toString()?.slice(0, -1));
        setDisplayValues(state => state?.toString()?.slice(0, -1))
    }

    const mathSqrt = () => {
        const sqrt = calc != 0 && Math.sqrt(calc).toString()
        setResult(sqrt)
    }

    const secondDegree = () => {
        const lastNum =  calc.length != 0 && calc.includes(ops) ? calc.toString().slice(-1) : calc.toString();
        console.log(calc.toString())
        console.log(lastNum)
        console.log(Math.pow(calc, 2))
        // const pow = calc?.toString()?.slice(0, -1)
        // setCalc(Math.pow(pow, 2))
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