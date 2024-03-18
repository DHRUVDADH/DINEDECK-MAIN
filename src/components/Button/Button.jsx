import React from 'react'
import styles from "./Button.module.css"
import { useState } from 'react';

const Button = (props) => {
  const { type, isShape, isColor, handlemouseenter, handlemouseleave, content } = props;

  if (isShape == "rect" && isColor == "red") {
    return (
      <button className={styles.btn_red_rect} type={type}>{content}</button>
    )
  }
  else if (isShape == "rect" && isColor == "white") {
    return (
      <button className={styles.btn_white_rect} type={type} >{content}</button>
    )
  }
  else if (isShape == "oval" && isColor == "red") {
    return (
      <button className={styles.btn_red_oval} type={type}>{content}</button>
    )
  }
  else {
    return (
      <button className={styles.btn_white_oval} type={type}>{content}</button>
    )
  }
}

export default Button