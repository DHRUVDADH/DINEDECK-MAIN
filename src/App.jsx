import Navbar from "./components/Navbar/Navbar"
import Button from "./components/Button/Button"
import './App.css'
import Home from "./components/Home/Home"
import { Routes, Route } from "react-router-dom"
import Login from "./components/Login/Login"
import SignUp from "./components/SignUp/SignUp"

function App() {
  return (
    <div className="parentDiv">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
