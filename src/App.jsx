import Navbar from "./components/Navbar/Navbar"
import Button from "./components/Button/Button"
import './App.css'
import Home from "./components/Home/Home"
import { Routes, Route } from "react-router-dom"
import Login from "./components/Login/Login"
import SignUp from "./components/SignUp/SignUp"
import Manager from "./components/Manager/Manager"
import Orders from "./components/Orders/Orders"


function App() {
  return (
    <div className="parentDiv">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Manager" element={<Manager />} />
        <Route path="/Orders" element={<Orders />} />
      </Routes>
    </div>
  )
}

export default App
