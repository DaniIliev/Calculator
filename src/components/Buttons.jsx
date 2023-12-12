import NumbersBtn from "./buttonsType/Numbers";
import OperatorBtns from "./buttonsType/OperatorBtn";


export default function Buttons(){


    return(
    <>
        <div className="buttonsWrapp">
            <NumbersBtn/>
            <OperatorBtns/>
        </div>

    </>
        )
}
