import { useContext } from "react"
import { CalcContext } from "../contexts/calcContext"

export default function DisplayComponent(){

    const {calc} = useContext(CalcContext)
    return(
        <>
           <div className="display">
                {/* <span>(0)</span> 0 */}
                {calc || 0}
            </div> 
        </>
    )
}