import React from 'react'
import styles from "./HomePageComponent.module.css"

const HomePageComponent = ({ myProp }) => {

  const { keys, spanElement, spanBefore, spanAfter, description } = myProp;
  return (
    myProp.map((obj, keys) => (
      <div key={keys} className={styles.mainDiv1}>
        <div className={styles.sub1}></div>
        <div className={styles.sub2}>
          <div className={styles.item1}>{obj.spanBefore} <span> {obj.spanElement}  </span>{obj.spanAfter}</div>
          <div className={styles.item2}>{obj.description}</div>
        </div>
      </div>
    ))
  )
}

export default HomePageComponent