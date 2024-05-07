import React, { useState } from 'react'
import styles from './Orders.module.css'
import OrderButton from '../OrderButton/OrderButton'
import Navbar2 from '../Navbar2/Navbar2'
import { Link } from 'react-router-dom'
import { apiConnector } from '../../services/apiconnector'

const Orders = () => {
  const array = new Array(2).fill(null);
  const [table, setTables] = useState([]);
  const [loading, setLoading] = useState(false);

  const findData = async () => {
    setLoading(true);
    try {
      const res = await apiConnector("GET", "http://localhost:3000/food/findtable");
      setTables(res.data.data);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }

  useState(() => {
    findData();
  }, [])

  return (
    <div className={styles.mainDiv4}>
      {
        loading ? (<>Loading</>) : (
          <>
            <Navbar2 ></Navbar2>
            <div className={styles.cont1}>
              <div className={styles.Line}></div>
              <div className={styles.Content}>
                <div className={styles.sub2}>
                  <div className={styles.item1}>
                    <div className={styles.text}>Hall name 1</div>
                    <div className={styles.orderdiv}>
                      {
                        table == null ? (<>Table Not Found</>) : (<>

                          {
                            table.map((data, index) => (
                              <Link to={`/OrderItems/${data._id}`} className={styles.Link}>
                                <OrderButton number={index+1} type="gray"></OrderButton>
                              </Link>
                            )
                            )
                          }
                        </>)
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>

        )
      }
    </div>
  )
}

export default Orders