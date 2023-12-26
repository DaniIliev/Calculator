import { useContext } from "react"
import { CalcContext } from "../../contexts/calcContext"

export default function TrigonometricBtns(){

    const {updateCalc} = useContext(CalcContext)
    // Math.sin(5/180*Math.PI)
    return(

        <div className="trigonometricButtons">
                <button className="trigonometricBtn" onClick={() => updateCalc('cos')}>cos</button> 
                <button className="trigonometricBtn">sin</button> 
                <button className="trigonometricBtn">tan</button>
                <button className="trigonometricBtn">log</button>
                <button className="trigonometricBtn">In</button>
        </div>
    )
}