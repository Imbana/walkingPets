import { useState } from "react"
import Header from "../../components/header/Header"
import ModalPortal from "../../components/modal/Modal"
import Slider from "../../components/slider/Slider"
import InfoPage from "../infoPage/InfoPage"
import RegisterPage from "../registerPage/RegisterPage"
import ServicePage from "../servicePage/ServicePage"
// import "./homepage.css"

const HomePage = () => {

    const [showModal, setShowModal] = useState(false)

  return (
    <div className="homePage">
        <Header setShowModal={setShowModal}/>
        <ServicePage setShowModal={setShowModal}/>
        <InfoPage  /> 
        <RegisterPage setShowModal={setShowModal}/>
        <ModalPortal active={showModal} setShowModal={setShowModal}>
                <Slider />
        </ModalPortal>
    
    </div>
  )
}

export default HomePage