import React, { useState, useEffect } from 'react'
import styles from './OrderItems.module.css'
import Navbar2 from '../Navbar2/Navbar2'
import search from '/Svg/search.svg'
import Button2 from '../Button2/Button2'
import Button from '../Button/Button'
import { FaPlus, FaMinus } from "react-icons/fa6";
import { apiConnector } from '../../services/apiconnector'
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
  ];

  const [iteams, setIteams] = useState(null);
  const [loading, setLoading] = useState(false);
  useState(async () => {
    setLoading(true);
    try {
      const data = await apiConnector("GET", "http://localhost:3000/food/getiteam");
      setIteams(data.data.data);
    } catch (err) {
      console.log(err)
    }
    setLoading(false);
  }, [])


  const [count, setCount] = useState(0);

  useEffect(() => {

    console.log("Count changed:", count);
  }, [count]); // Dependency array with `count`

  const handleAddClick = (id) => {
    setCount(prevCount => prevCount + 1);
  };
  const handleSubtractClick = (id) => {
    setCount(prevCount => prevCount - 1);
  };

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
          {
            loading ? (<>Loadinhg</>) : (

              iteams === null ? (<>No Data</>) : (
                <>
                  <div className={styles.item2}>
                    <div className={styles.gridContainer}>
                      {iteams.map((item) => {
                        return (
                          <Button2 key={item.id} item={item}></Button2>
                        )
                      })}
                    </div>
                  </div>

                </>)

            )
          }
        </div>
        <div className={styles.cont3}>
          <div className={styles.item1}>
            <div className={styles.items}>Items</div>
            <div className={styles.quantity}>QTY.</div>
            <div className={styles.price}>Price</div>
          </div>
          <div className={styles.item2}>
            {/* {
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
            } */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderItems