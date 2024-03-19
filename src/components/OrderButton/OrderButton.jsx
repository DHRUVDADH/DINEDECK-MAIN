import React, { useState, useEffect } from 'react';
import styles from './OrderButton.module.css';

const OrderButton = (props) => {
  const { number, type } = props;

  const [className, setClassName] = useState("gray");

  if (type === "gray") {
    return (
      <button className={`${styles.orderbtn} ${styles.grayorderbtncolor}`}>{number}</button>
    );
  } else if (type === "blue") {
    return (
      <button className={ `${styles.orderbtn} ${styles.blueorderbtncolor}`}>{number}</button>
    );
  } else if (type === "green") {
    return (
      <button className={`${styles.orderbtn} ${styles.greenorderbtncolor}`}>{number}</button>
    );
  } else if (type === "yellow") {
    return (
      <button className={`${styles.orderbtn} ${styles.yelloworderbtncolor}`}>{number}</button>
    );
  } else if (type === "skin") {
    return (
      <button className={`${styles.orderbtn} ${styles.skinorderbtncolor}`}>{number}</button>
    );
  }
};

export default OrderButton;
