import React from 'react'
import styles from "./Button2.module.css"

const Button2 = ({item , iteamHandler}) => {


  if (item.iteamType == "Veg") {
    return (
      <button onClick={()=>iteamHandler(item)} className={`${styles.btncont} ${styles.veg}`}>{item.iteamName}</button>
    )
  }
  else if (item.iteamType == "Nonveg") {
    return (
      <button onClick={()=>iteamHandler(item)} className={`${styles.btncont} ${styles.nonveg}`}>{item.iteamName}</button>
    )
  }
  else {
    return (
      <button  onClick={()=>iteamHandler(item)} className={`${styles.btncont} ${styles.semiveg}`}>{item.iteamName}</button>
    )
  }

  
}

export default Button2