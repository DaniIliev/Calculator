import { useEffect, useState } from "react"

export default function NumberButtons(){
    const [numbers, setNumbers] = useState([])

    let numbersArray = []

    useEffect(() => {
        for(let i = 1; i <= 9; i++){
            console.log(i)
            numbersArray.push(i)
        }

        setNumbers(numbersArray)
    },[])

    return(
    <>
    <div className="numbers">
        {numbers.map((num, index) => <button className="numbtn" key={index}>{num}</button>)}
    </div>
    </>
        )
}
