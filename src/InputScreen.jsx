import React from 'react'
import  Styles from "./InputScreen.module.css"

function InputScreen({calval}) {
  return (
    <div>
        <input type='text' value={calval} readOnly unselectable className= {Styles.InputScreen}/>
    </div>
  )
}

export default InputScreen