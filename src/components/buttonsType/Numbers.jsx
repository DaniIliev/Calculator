import { useContext, useEffect, useState } from "react"
import { CalcContext } from "../../contexts/calcContext"
export default function NumbersBtn(){
    const {updateCalc} = useContext(CalcContext)
    const [numbers, setNumbers] = useState([])

    let numbersArray = []

    useEffect(() => {
        for(let i = 1; i <= 9; i++){
            numbersArray.push(
                <button 
                className="numbtn" 
                key={i}
                onClick={() => updateCalc(i.toString())}
                >{i}
                </button>
            )
        }

        setNumbers(numbersArray)
    },[])

    return(
        <>
            <div className="numbers">
                {numbers}
            </div>
        </>
    )
}