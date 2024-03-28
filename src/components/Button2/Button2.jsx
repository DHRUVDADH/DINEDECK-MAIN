import React from 'react'
import styles from "./Button2.module.css"

const Button2 = ({ isType , isName }) => {


  if (isType == "veg") {
    return (
      <button className={`${styles.btncont} ${styles.veg}`}>{isName}</button>
    )
  }
  else if (isType == "nonveg") {
    return (
      <button className={`${styles.btncont} ${styles.nonveg}`}>{isName}</button>
    )
  }
  else {
    return (
      <button className={`${styles.btncont} ${styles.semiveg}`}>{isName}</button>
    )
  }
}

export default Button2