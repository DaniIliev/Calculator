import NumbersBtn from "./buttonsType/Numbers";
import OperatorBtns from "./buttonsType/OperatorBtn";
import SymbolBtn from "./buttonsType/SymbolBtn";
import TrigonometricBtns from "./buttonsType/TrigonometricBtn";



export default function Buttons(){


    return(
    <>
    <div className="allButtonsWrapp">
    <SymbolBtn/>
        <TrigonometricBtns/>
        <div className="buttonsWrapp">
            <NumbersBtn/>
            <OperatorBtns/>
        </div>
    </div>
    </>
        )
}
