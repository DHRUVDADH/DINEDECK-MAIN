import React, { useState, useEffect } from 'react'
import styles from './OrderItems.module.css'
import Navbar2 from '../Navbar2/Navbar2'
import search from '/Svg/search.svg'
import Button2 from '../Button2/Button2'
import { FaPlus, FaMinus } from "react-icons/fa6";
import { apiConnector } from '../../services/apiconnector'
const OrderItems = () => {


  const [iteams, setIteams] = useState(null);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

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



  useEffect(() => {

    console.log("Count changed:", count);
  }, [count]); // Dependency array with `count`

  const handleAddClick = (id) => {
    setCount(prevCount => prevCount + 1);
  };
  const handleSubtractClick = (id) => {
    setCount(prevCount => prevCount - 1);
  };

  


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
            <div className={styles.sub} >
              <div className={styles.name}>Mohjan</div>
              <div className={styles.quanBtn}>
                <div className={styles.subtract}><FaMinus /></div>
                <div className={styles.count}>0</div>
                <div className={styles.add} ><FaPlus /></div>
              </div>
              <div className={styles.cost}>10</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderItems






{/* {
              menuItems.map((item) => {
                const [cost, setCost] = useState(item.cost);
                const updateValueminus = () => {
                  setCost(prevCount => prevCount + (item.cost));
                }
                const updateValueplus = () => {
                  setCost(prevCount => prevCount - (item.cost));
                }
                useEffect(() => {

                  console.log("Cost changed:", cost);
                }, [cost]);
                return (
                  <div className={styles.sub} key={item.id}>
                    <div className={styles.name}>{item.name}</div>
                    <div className={styles.quanBtn}>
                      <div className={styles.subtract} onClick={`${handleSubtractClick(item.id)} ${updateValueminus}`}><FaMinus /></div>
                      <div className={styles.count}>{count}</div>
                      <div className={styles.add} onClick={`${handleAddClick(item.id)} ${updateValueplus}`}><FaPlus /></div>
                    </div>
                    <div className={styles.cost}>{cost}</div>
                  </div>
                )
              })
            } */}