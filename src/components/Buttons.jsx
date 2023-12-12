import NumbersBtn from "./buttonsType/Numbers";
import OperatorBtns from "./buttonsType/OperatorBtn";


export default function Buttons(){


    return(
    <>
        <div className="buttons">
            <NumbersBtn/>
            <OperatorBtns/>
        </div>

    </>
        )
}
