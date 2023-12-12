import DisplayComponent from "./components/DisplayComponent"
import Buttons from "./components/Buttons"
import { CalcProvider } from "./contexts/calcContext"


function App() {

  return (
      <>
      <CalcProvider>
          <div className="main">
            <DisplayComponent/>
            <Buttons/>
          </div>
      </CalcProvider>
      </>
  )
}

export default App
