import { useContext } from "react"
import { CalcContext } from "../../contexts/calcContext"

export default function OperatorBtns(){

    const {updateCalc} = useContext(CalcContext)

    return(
        <>
            <div className="operatorsBtnWrapp">
                <button className="operatorsBtn" onClick={() => updateCalc('-')}>-</button>
                <button className="operatorsBtn" onClick={() => updateCalc('+')}>+</button>
                <button className="operatorsBtn" onClick={() => updateCalc('x')}>x</button>
                <button className="operatorsBtn" onClick={() => updateCalc('÷')}>÷</button>
                <button className="operatorsBtn" onClick={() => updateCalc(',')}>,</button>
                {/* <button className="operatorsBtn history">Ans<span>History</span></button> */}
                <button className="operatorsBtn" onClick={() => updateCalc('=')}>=</button>
            </div>
        </>
    )
}