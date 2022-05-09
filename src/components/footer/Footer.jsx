import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";
import facebookIcon from "../../assets/facebook-brands.svg";
import twiterIcon from "../../assets/twitter-brands.svg";
import instagramIcon from "../../assets/instagram-brands.svg";
import youtubeIcon from "../../assets/youtube-brands.svg";
import { Link } from "react-router-dom";
const Footer = () => {
   return (
      <div className="footer">
         <div className="footerTop">
            <ul className="footerMenu">
               <li className="footerMenuItem">
                  {" "}
                  <Link className="linkMenu" to="/">
                     Inicio{" "}
                  </Link>
               </li>

               <li className="footerMenuItem">
                  <Link className="linkMenu" to="/cards">
                     Candidatos
                  </Link>
               </li>
            </ul>
            <Link to="/login">
               <button className="buttonFirst">LogIn</button>
            </Link>
         </div>
         <hr />
         <div className="footerMenuIcons">
            <img
               className="footerItemIcon"
               src={facebookIcon}
               alt="facebookicon"
            />
            <img className="footerItemIcon" src={twiterIcon} alt="twitericon" />
            <img
               className="footerItemIcon"
               src={instagramIcon}
               alt="instagranicon"
            />
            <img
               className="footerItemIcon"
               src={youtubeIcon}
               alt="youtubeicon"
            />
         </div>
         <div className="footerBy">
            <FontAwesomeIcon className="footerCopyIcon" icon={faCopyright} />
            <span>2020 - JeisonImbana </span>
         </div>
      </div>
   );
};

export default Footer;
