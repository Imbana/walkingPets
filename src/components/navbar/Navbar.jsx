import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
   return (
      <nav className="navbar">
         <div className="navbarLeft">
            <Link to="/">
               <span className="navbarLogo">WalPets</span>
            </Link>
         </div>
         <div className="navbarRight">
            <ul className="navbarMenu">
               <li className="navbarItemMenu">
                  <NavLink
                     to="/"
                     className={({ isActive }) =>
                        isActive ? "linkMenu active" : "linkMenu"
                     }
                  >
                     Inicio
                  </NavLink>
               </li>
               <li className="navbarItemMenu">
                  <NavLink
                     to="/cards"
                     className={({ isActive }) =>
                        isActive ? "linkMenu active" : "linkMenu"
                     }
                  >
                     Candidatos
                  </NavLink>
               </li>
            </ul>
            <Link to="/login">
               <button className="  buttonNavbarSession">LogIn</button>
            </Link>
         </div>
      </nav>
   );
};

export default Navbar;
