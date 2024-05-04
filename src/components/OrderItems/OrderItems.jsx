import React, { useState, useEffect } from 'react'
import styles from './OrderItems.module.css'
import Navbar2 from '../Navbar2/Navbar2'
import search from '/Svg/search.svg'
import Button2 from '../Button2/Button2'
import Button from '../Button/Button'
import { FaPlus, FaMinus } from "react-icons/fa6";

const OrderItems = () => {

  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: "Item name 1",
      cost: 200,
      type: "veg",
      quantity: 0
    },
    {
      id: 2,
      name: "Item name 2",
      cost: 300,
      type: "nonveg",
      quantity: 0
    },
    {
      id: 3,
      name: "Item name 3",
      cost: 100,
      type: "semiveg",
      quantity: 0
    },
    {
      id: 4,
      name: "Item name 4",
      cost: 200,
      type: "veg",
      quantity: 0
    },
    {
      id: 5,
      name: "Item name 5",
      cost: 250,
      type: "veg",
      quantity: 0
    }
  ]);
  const [totalCost, setTotalCost] = useState(0);

  const handleIncrement = (id, cost) => {
    setMenuItems(prevItems => prevItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    }));
    setTotalCost(prevTotalCost => prevTotalCost + cost);
  };
  const handleDecrement = (id, cost) => {
    setMenuItems(prevItems => prevItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    }));
    // const item = menuItems.find(item => item.id === id);
    // if (item && item.count > 0) {
    //   setTotalCost(prevTotalCost => prevTotalCost - item.cost);
    // }
  };
  const totalValue = menuItems.reduce((total, item) => total + (item.quantity * item.cost), 0);

  return (
    <div className={styles.mainDiv10}>
      <Navbar2 button="no"></Navbar2>
      <div className={styles.container}>
        <div className={styles.cont1}>
          <ul className={styles.sub}>
            <li className={styles.item}><div className={styles.sub1}>Fast Food</div></li>
            <li className={styles.item}><div className={styles.sub1}>Beverages</div></li>
            <li className={styles.item}><div className={styles.sub1}>Burger</div></li>
            <li className={styles.item}><div className={styles.sub1}>Pizza</div></li>
            <li className={styles.item}><div className={styles.sub1}>Garlic Bread</div></li>
            <li className={styles.item}><div className={styles.sub1}>French Fries</div></li>
            <li className={styles.item}><div className={styles.sub1}>Nachos</div></li>
            <li className={styles.item}><div className={styles.sub1}>Sandwiches</div></li>
            <li className={styles.item}><div className={styles.sub1}>Cold Drinks</div></li>
          </ul>
        </div>
        <div className={styles.cont2}>
          <div className={styles.item1}>
            <div className={styles.searchBar}>
              <div className={styles.sub1}><img src={search} alt="" /></div>
              <input className={styles.sub2} type='text' placeholder='Search...' autoComplete='asdasd' />
            </div>
            <div className={styles.table}>
              <input className={styles.sub1} type='text' autoComplete='asdada' placeholder='Table Name' />
            </div>
          </div>
          <div className={styles.item2}>
            <div className={styles.gridContainer}>
              {menuItems.map((item) => {
                return (
                  <Button2 key={item.id} isType={item.type} isName={item.name}></Button2>
                )
              })}
            </div>
          </div>
        </div>
        <div className={styles.cont3}>
          <div className={styles.item1}>
            <div className={styles.items}>Items</div>
            <div className={styles.quantity}>QTY.</div>
            <div className={styles.price}>Price</div>
          </div>
          <div className={styles.item2}>
            {
              menuItems.map((item) => {

                return (
                  <div className={styles.sub} key={item.id}>
                    <div className={styles.name}>{item.name}</div>
                    <div className={styles.quanBtn}>
                      <div className={styles.subtract} onClick={() => handleDecrement(item.id, item.cost)}><FaMinus /></div>
                      <div className={styles.count}>{item.quantity}</div>
                      <div className={styles.add} onClick={() => handleIncrement(item.id, item.cost)}><FaPlus /></div>
                    </div>
                    <div className={styles.cost}>{item.quantity * item.cost}</div>
                  </div>
                )
              })
            }
          </div>
          <div className={styles.item3}>
            <div className={styles.subitem1}>Total:</div>
            <div className={styles.subitem2}>{totalValue}</div>
          </div>
          <div className={styles.item4}>
            <div className={styles.sub}>
              <input type='checkbox' className={styles.input}></input>
              <div className={styles.text}>Cash</div>
            </div>
            <div className={styles.sub}>
              <input type='checkbox' className={styles.input}></input>
              <div className={styles.text}>Card</div>
            </div>
            <div className={styles.sub}>
              <input type='checkbox' className={styles.input}></input>
              <div className={styles.text}>Wallet</div>
            </div>
            <div className={styles.sub}>
              <input type='checkbox' className={styles.input}></input>
              <div className={styles.text}>Other</div>
            </div>
            <div className={styles.sub}>
              <input type='checkbox' className={styles.input}></input>
              <div className={styles.text}>Part</div>
            </div>
          </div>
          <div className={styles.item5}>
            <div className={styles.sub1}>
              <input className={`${styles.input} nav-link`} placeholder='Settlement Amt'></input>
              <div className={styles.btn}>
                <Button className={styles.mainBtn1} isColor="red" isShape="rect" content="Settles & Save" ></Button>
              </div>
            </div>
            <div className={styles.sub2}>
              <input type='number' className={styles.input} placeholder='Discount(%)'></input>
              <div className={styles.btn}>
                <button className={styles.mainBtn2} isColor="white" isShape="oval" content="69"></button>
              </div>
            </div>
            <div className={styles.sub3}></div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default OrderItems