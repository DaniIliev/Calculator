import { useContext } from "react"
import { CalcContext } from "../../contexts/calcContext"

export default function OperatorBtns(){

    const {updateCalc, calculate} = useContext(CalcContext)

    return(
        <>  
                <div className="operatorsBtnWrapp">
                    <button className="operatorsBtn" onClick={() => updateCalc('(')}>{'('}</button> 
                    <button className="operatorsBtn" onClick={() => updateCalc(')')}>{')'}</button> 
                    <button className="operatorsBtn" onClick={() => updateCalc('+')}>+</button>
                    <button className="operatorsBtn" onClick={() => updateCalc('-')}>-</button>
                    <button className="operatorsBtn" onClick={() => updateCalc('*')}>x</button>
                    <button className="operatorsBtn" onClick={() => updateCalc('/')}>÷</button>
                    <button className="operatorsBtn result" onClick={() => calculate()}>=</button>
                </div>
  
        </>
    )
}