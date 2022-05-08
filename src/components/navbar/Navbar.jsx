import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
   return (
      <nav className="navbar">
         <div className="navbarLeft">
            <span className="navbarLogo">WalPets</span>
         </div>
         <div className="navbarRight">
            <ul className="navbarMenu">
               <li className="navbarItemMenu">Inicio</li>
               <li className="navbarItemMenu">Servicios</li>
               <li className="navbarItemMenu">Informacion</li>
            </ul>
            <Link to="/login">
               <button className="  buttonNavbarSession">LogIn</button>
            </Link>
         </div>
      </nav>
   );
};

export default Navbar;
