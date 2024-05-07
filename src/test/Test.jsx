import React, { useState } from 'react'
import axios from 'axios'
import { apiConnector } from '../services/apiconnector';
const Test = () => {

  const t = async ()=>{
    try{
      const res = await apiConnector("POST" , "http://localhost:3000/food/createtable")
      console.log(res)
    }catch(err){
      console.log("Err")
    }
  }

  useState(()=>{
    t();
  },[])
  return (
    <div>
      TEST
    </div>
  )
}

export default Test
