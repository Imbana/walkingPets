import { faQuoteLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./infoPage.css";
import infoHuella from "../../assets/huella.png";
import womenDog from "../../assets/women.jpg";
const InfoPage = () => {
   return (
      <div className="infoPage">
         <div className="infoPageTop sectionTitleTop">
            <h2 className="infoPageTitle sectionTitle">Tu eliges</h2>
            <img
               className="infoPageHuella sectionTitleImg"
               src={infoHuella}
               alt=""
            />
         </div>
         <div className="infoPageContainer">
            <p className="infoPageText">
               Si lo deseas puede elegir el lugar, la hora e incluso la persona
               que se encargara de tu mascota, esto gracias a que todos nuestros
               colaboradores cuentas con unas estrellas y comentarios de los
               servicios prestados anteriormente.
            </p>
            <div className="infoPageCard">
               <img className="infoPageCardImg" src={womenDog} alt="" />
               <div className="infoPageCardInfo">
                  <h2>Juliana Camila</h2>
                  <p className="infoPageCardText">
                     <FontAwesomeIcon
                        className="InfoPageIconQuote"
                        icon={faQuoteLeft}
                     />
                     Persona muy amable, responsable y atenta, super recomendada
                  </p>
                  <div className="infoPageCardScore">
                     <FontAwesomeIcon
                        className="InfoPageIconCards"
                        icon={faStar}
                     />
                     <span>8.5</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default InfoPage;
