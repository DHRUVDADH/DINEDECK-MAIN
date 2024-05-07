import React, { useState, useEffect } from 'react'
import styles from './OrderItems.module.css'
import Navbar2 from '../Navbar2/Navbar2'
import search from '/Svg/search.svg'
import Button2 from '../Button2/Button2'
import Button from '../Button/Button'
import { FaPlus, FaMinus } from "react-icons/fa6";
import { apiConnector } from '../../services/apiconnector'
import { useNavigate, useParams } from 'react-router-dom'
import {toast} from 'react-toastify'


const OrderItems = () => {

  
const navigate = useNavigate();
const {tableID} = useParams();
  const [order, setOrder] = useState([]);
  const [count, setCount] = useState(0);
  const [iteams, setIteams] = useState(null);
  const [loading, setLoading] = useState(false);
  const [totalValue, setTotalValue] = useState(0);
  const addOrder = async ()=>{
    try{
      const response = await apiConnector("POST", "http://localhost:3000/food/addOrder",{order , totalValue,tableID });
      console.log(response)
    }catch(err){
      console.log(err)
    }
  }

  useState(async () => {
    setLoading(true);
    try {
      const data = await apiConnector("GET", "http://localhost:3000/food/getiteam");
      const data2 = await apiConnector("GET",`http://localhost:3000/food/findorder?tableID=${tableID}`)
      setIteams(data.data.data);
      setOrder(data2.data.data.OrderItems);
    } catch (err) {
      console.log(err)
    }
    setLoading(false);
  }, [])



  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);



  const handleIncrement = (id, cost) => {
    cost = Number(cost);
    setOrder(prevItems => {
      const updatedItems = prevItems.map(item => {
        if (item._id === id) {
          setTotalValue(totalValue+cost);
          return { ...item, quantity: item.quantity + 1 };
        }
        setTotalValue(totalValue+cost);
        return item;
      });
      return updatedItems;
    });
    addOrder();
  };
  

  
  const handleDecrement = (id, coast) => {
    coast = Number(coast);
    setOrder(prevItems => {
      const updatedOrder = prevItems.map(item => {
        if (item._id === id) {
          if (item.quantity === 1) {
            setTotalValue(totalValue - coast);
            return null;
          } 
          setTotalValue(totalValue - coast);
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    
      const filteredOrder = updatedOrder.filter(item => item !== null); // or item !== undefined
      console.log(filteredOrder);
      return filteredOrder;
    });
    addOrder();
  };
  

  const iteamHandler = (item,cost) => {
      
      const existingItemIndex = order.findIndex((existingItem) => existingItem._id === item._id);
    
      if (existingItemIndex !== -1) {
        // If the item exists, update its quantity
        const updatedOrder = [...order];
        updatedOrder[existingItemIndex].quantity += 1;
        setOrder(updatedOrder);
        setTotalValue(totalValue+item.iteamPrice);
      } else {
        setTotalValue(totalValue+item.iteamPrice);
        setOrder([...order, { ...item, quantity: 1 }]);
      }
      addOrder();
  }

  async function payHandler(){
    try{
      const response = await apiConnector("POST", "http://localhost:3000/food/paid",{tableID});
      console.log(response)
      toast.success("Payment Done")
      navigate('/orders')
    }catch(err){
      console.log(err)
    }
  }

  
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
            loading ? (<>Loading</>) : (

              iteams === null ? (<>No Data</>) : (
                <>
                  <div className={styles.item2}>
                    <div className={styles.gridContainer}>
                      {iteams.map((item) => {
                        return (
                          <Button2 key={item.id} item={item} iteamHandler={iteamHandler} ></Button2>
                        )
                      })}
                    </div>
                  </div>

                </>)

            )
          }
        </div>
        {
          loading ? (<>Loading</>) : (

            <>

              {
                order.length == 0 ? (<>No Data Found</>) : (

                  <>
                    {
                      console.log(order.length == 0)
                    }
                    <div className={styles.cont3}>
                      <div className={styles.item1}>
                        <div className={styles.items}>Items</div>
                        <div className={styles.quantity}>QTY.</div>
                        <div className={styles.price}>Price</div>
                      </div>
                      <div className={styles.item2}>
                        {
                          order.map((item) => {
                            
                              {
                                addOrder()
                              }
                            
                            return (
                              <div className={styles.sub} key={item._id}>
                                <div className={styles.name}>{item.iteamName}</div>
                                {
                                  console.log(order.totalPrice)
                                }
                                <div className={styles.quanBtn}>
                                  <div className={styles.subtract} onClick={() => handleDecrement(item._id, item.iteamPrice)}><FaMinus /></div>
                                  <div className={styles.count}>{item.quantity}</div>
                                  <div className={styles.add} onClick={() => handleIncrement(item._id, item.iteamPrice)}><FaPlus /></div>
                                </div>
                                <div className={styles.cost}>{item.quantity * item.iteamPrice}</div>
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
                            <Button className={styles.mainBtn1}  onclick={payHandler} isColor="red" isShape="rect" content="Settles & Save" ></Button>
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
                  </>
                )
              }
            </>)
        }
      </div>
    </div >
  )
}


export default OrderItems