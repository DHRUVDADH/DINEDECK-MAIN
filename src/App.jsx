import Navbar from "./components/Navbar/Navbar"
import Button from "./components/Button/Button"
import './App.css'
import Home from "./components/Home/Home"
import { Routes, Route } from "react-router-dom"
import Login from "./components/Login/Login"
import SignUp from "./components/SignUp/SignUp"
import Manager from "./components/Manager/Manager"
import Orders from "./components/Orders/Orders"
import OrderDeck from "./components/OrderDeck/OrderDeck"
import ResetPassword from "./components/ResetPassword/ResetPassword"
import CheckEmail from "./components/CheckEmail/CheckEmail"
import Settings from "./components/Settings/Settings"
import UserInfo from "./components/UserInfo/UserInfo"
import OrderItems from "./components/OrderItems/OrderItems"

function App() {
  return (
    <div className="parentDiv">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Manager" element={<Manager />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/OrderDeck" element={<OrderDeck />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/CheckEmail" element={<CheckEmail />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/UserInfo" element={<UserInfo />} />
        <Route path="/OrderItems" element={<OrderItems />} />
      </Routes >
    </div >
  )
}

export default App
