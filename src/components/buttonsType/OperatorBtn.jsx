import { useContext } from "react"
import { CalcContext } from "../../contexts/calcContext"

export default function OperatorBtns(){

    const {sayHi, updateCalc} = useContext(CalcContext)

    console.log(sayHi)
    return(
        <>
            <div className="operatorsBtnWrapp">
                <button className="operatorsBtn" onClick={() => updateCalc('-')}>-</button>
                <button className="operatorsBtn">+</button>
                <button className="operatorsBtn">x</button>
                <button className="operatorsBtn">÷</button>
                <button className="operatorsBtn">,</button>
                {/* <button className="operatorsBtn history">Ans<span>History</span></button> */}
                <button className="operatorsBtn">=</button>
            </div>
        </>
    )
}