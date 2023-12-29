import React from 'react'
import styles from './ButtonsContainer.module.css'

function Buttons({handleOnClick}) {
    const ButtonName = ['C' , '1' ,'2' , '+' , '3' , '4' , '-' , '5' ,'6' , '*' ,'7' , '8' , '/' , '=' ,'9' ,'0' ,'.' , 'Del']
  return (
    <div className= {styles.buttonContainer}>
        {ButtonName.map(
          ButtonName => <button className={styles.button}
          onClick={()=>handleOnClick(ButtonName)}>
          {ButtonName}
          </button>)}
    </div>
  )
}

export default Buttons