export default function OperatorBtns(){



    return(
        <>
            <div className="operatorsBtnWrapp">
                <button className="operatorsBtn">-</button>
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