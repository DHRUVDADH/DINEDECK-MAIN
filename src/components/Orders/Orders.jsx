import React from 'react'
import styles from './Orders.module.css'
import OrderButton from '../OrderButton/OrderButton'
import Navbar2 from '../Navbar2/Navbar2'
import { Link } from 'react-router-dom'

const Orders = () => {
  const array=new Array(2).fill(null);
  return (
    <div className={styles.mainDiv4}>
      <Navbar2 ></Navbar2>
      <div className={styles.cont1}>
        <div className={styles.Line}></div>
        <div className={styles.Content}>
          <div className={styles.sub1}>
            <div className={styles.item1}>
              <div className={`${styles.circle1} ${styles.circle}`}></div>
              <div className={styles.text}>Blank Table</div>
            </div>
            <div className={styles.item2}>
              <div className={`${styles.circle2} ${styles.circle}`}></div>
              <div className={styles.text}>Running Table</div>
            </div>
            <div className={styles.item3}>
              <div className={`${styles.circle3} ${styles.circle}`}></div>
              <div className={styles.text}>Printed Table</div>
            </div>
            <div className={styles.item4}>
              <div className={`${styles.circle4} ${styles.circle}`}></div>
              <div className={styles.text}>Paid Table</div>
            </div>
            <div className={styles.item5}>
              <div className={`${styles.circle5} ${styles.circle}`}></div>
              <div className={styles.text}>Running KOT Table</div>
            </div>
          </div>
          <div className={styles.sub2}>
            <div className={styles.item1}>
              <div className={styles.text}>Hall name 1</div>
              <div className={styles.orderdiv}>
                <Link to="/OrderDeck" className={styles.Link}>
                  <OrderButton number="1" type="gray"></OrderButton>
                </Link>
                <OrderButton number="1" type="gray"></OrderButton>
                <OrderButton number="1" type="gray"></OrderButton>
                <OrderButton number="1" type="skin"></OrderButton>
                <OrderButton number="1" type="gray"></OrderButton>
                <OrderButton number="1" type="blue"></OrderButton>
                <OrderButton number="1" type="gray"></OrderButton>
                <OrderButton number="1" type="gray"></OrderButton>
                <OrderButton number="1" type="gray"></OrderButton>
                <OrderButton number="1" type="gray"></OrderButton>
              </div>
            </div>
            <div className={styles.item2}>
              <div className={styles.text}>Hall name 2</div>
              <div className={styles.orderdiv}>
                <OrderButton number="1" type="gray"></OrderButton>
                <OrderButton number="1" type="gray"></OrderButton>
                <OrderButton number="1" type="gray"></OrderButton>
                <OrderButton number="1" type="yellow"></OrderButton>
                <OrderButton number="1" type="gray"></OrderButton>
                <OrderButton number="1" type="gray"></OrderButton>
                <OrderButton number="1" type="gray"></OrderButton>
                <OrderButton number="1" type="gray"></OrderButton>
                <OrderButton number="1" type="gray"></OrderButton>
                <OrderButton number="1" type="gray"></OrderButton>
              </div>
            </div>
            <div className={styles.item3}>
              <div className={styles.text}>Hall name 3</div>
              <div className={styles.orderdiv}>
                <OrderButton number="1" type="gray"></OrderButton>
                <OrderButton number="1" type="gray"></OrderButton>
                <OrderButton number="1" type="green"></OrderButton>
                <OrderButton number="1" type="gray"></OrderButton>
                <OrderButton number="1" type="gray"></OrderButton>
                <OrderButton number="1" type="gray"></OrderButton>
                <OrderButton number="1" type="gray"></OrderButton>
                <OrderButton number="1" type="gray"></OrderButton>
                <OrderButton number="1" type="gray"></OrderButton>
                <OrderButton number="1" type="gray"></OrderButton> 

                {/* {array.map((_,index) => {
                  return <div key={index}>
                  <OrderButton number="1" type="green"></OrderButton>
                  </div>
                })} */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orders