import React from 'react'
import styles from "./Button.module.css"
import { useState } from 'react';

const Button = (props) => {
  const { type, isShape, isColor, handlemouseenter, handlemouseleave, content } = props;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  if (isShape == "rect" && isColor == "red") {
    return (
      <button type={type} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={isHovered ? `${styles.btn_red_rect} ${styles.redrectHoverme}` : `${styles.btn_red_rect}`}>{content}</button>
    )
  }
  else if (isShape == "rect" && isColor == "white") {
    return (
      <button type={type} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={isHovered ? `${styles.btn_white_rect} ${styles.whiterectHoverme}` : `${styles.btn_white_rect}`} >{content}</button>
    )
  }
  else if (isShape == "oval" && isColor == "red") {
    return (
      <button type={type} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={isHovered ? `${styles.btn_red_oval} ${styles.redovalHoverme}` : `${styles.btn_red_oval}`}>{content}</button>
    )
  }
  else {
    return (
      <button type={type} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={isHovered ? `${styles.btn_white_oval} ${styles.whiteovalHoverme}` : `${styles.btn_white_oval}`}>{content}</button>
    )
  }
}

export default Button