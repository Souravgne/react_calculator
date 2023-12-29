import InputScreen from "./InputScreen"
import "./App.css"
import ButtonsContainer from "./ButtonsContainer"
import { useState } from "react";
function App() {

  let [calval , setCalval] = useState(""); 

  const handleOnClick = (ButtonName )=> {
    if(ButtonName === 'Del'){
      let newCalVal = calval.slice(0, -1); 
      setCalval(newCalVal)
    }
     else if(ButtonName === 'C'){
      setCalval("");
    }
    else if(ButtonName === '='){
      setCalval(eval(calval))
    }
    else {
      let newCalVal = calval+ButtonName; 
      setCalval(newCalVal) 
    }
    
  }

  return (
    <div className="calculator">
   
    <div className='wrapper'>
      <h1>Calculator</h1>
      <InputScreen
      calval= {calval}
      ></InputScreen>


      <ButtonsContainer
     
      handleOnClick={handleOnClick}></ButtonsContainer>

    </div>
    </div>
  )
}

export default App
