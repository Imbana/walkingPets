import "./header.css"
import ImgHeader1 from "../../assets/Group 1.svg"

const Header = ({setShowModal}) => {
  return (
    <heaer className="header">
        <div className="headerLeft">
            <h1 className='headerLeftTitle'>La mejor forma <br/>de cuidar tus seres mas amados</h1>
            <p className='headerLeftSentence'>Cuidamos y paseamos a tus mascotas poniendo a tu 
            disposicion personal calidicado y tecnologia de putan para el mejor cuidado.</p>
       
            <button onClick={() => setShowModal(active => !active)}  className='buttonFirst '>Empieza ya !</button>
            {/* <button className='buttonFirst headerbutton' style={{background:"#9CADCE"}}>Servicios</button> */}

        </div>
        <div className="headerRight">
            <img className="headerRightImg" src={ImgHeader1} alt="imagen" />
        </div>
    </heaer>
  )
}

export default Header