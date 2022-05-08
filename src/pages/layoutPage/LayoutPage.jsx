import { Outlet } from "react-router-dom"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import "./layoutPage.css"
const LayoutPage = () => {
  return (
    <div className="layout">
    <Navbar />
    <div className="layoutContainer">
       <Outlet />  
    </div>
    <Footer />
 </div>
  )
}

export default LayoutPage