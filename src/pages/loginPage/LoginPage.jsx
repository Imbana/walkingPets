import "./loginPage.css";
import loginPets from "../../assets/loginPets.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const LoginPage = () => {
   return (
      <div className="loginPage">
         <img className="loginPageImg" src={loginPets} alt="" />
        <Link to="/">
         <FontAwesomeIcon  className="footerCloseIcon" icon={faWindowClose} />
        </Link>
               
         <form className="loginPageForm">
            <h2 className="loginPageTitle"> Iniciar Sesion</h2>
            <div className="loginPageItem">
               <div className="loginPageItemLabels">
                  <FontAwesomeIcon className="loginPageIcon" icon={faUser} />
               </div>
               <input
                  type="text"
                  className="loginPageInput"
                  placeholder="Usuario"
               />
            </div>
            <div className="loginPageItem">
               <FontAwesomeIcon className="loginPageIcon" icon={faLock} />

               <input
                  type="password"
                  className="loginPageInput"
                  placeholder="Contraseña"
               />
            </div>
            <Link to="/cards"> <button className="buttonFirst">Iniciar sesion</button></Link>
           
            <div className="loginPageRegister">

            <span className="">Registrarse</span>
            </div>
         </form>
      </div>
   );
};

export default LoginPage;
