import "./servicePage.css";
import dogService from "../../assets/dogSErvice.png";
import serviceHuellaImg from "../../assets/huella.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faClinicMedical,
   faMapMarkedAlt,
   faSackDollar,
   faUserCheck,
} from "@fortawesome/free-solid-svg-icons";

const ServicePage = ({setShowModal}) => {
   return (
      <section className="servicePage">
         <div className="serviceLeft">
            <img className="serviceDogImg" src={dogService} alt="dogImg" />
            <button onClick={() => setShowModal(active => !active)}  className='buttonFirst '>Empieza ya !</button>
  
         </div>
         <div className="serviceRight">
            <div className="serviceRightTop sectionTitleTop">
               <h2 className="serviceRightTitle sectionTitle">
                  Nuestros Servicios
               </h2>
               <img
                  className="serviceRightHuella sectionTitleImg"
                  src={serviceHuellaImg}
                  alt="huella"
               />
            </div>

            <div className="serviceContainerGrid">
               <div className="serviceItemGrid">
                  <FontAwesomeIcon
                     className="serviceIconCard"
                     icon={faSackDollar}
                  />
                  <h3 className="serviceTitleCard">Mejores precios</h3>
                  <p className="serviceTextCard">
                     Contamos con diferentes precios que se adapten a tu
                     bolsillo
                  </p>
               </div>
               <div className="serviceItemGrid">
                  <FontAwesomeIcon
                     className="serviceIconCard"
                     icon={faMapMarkedAlt}
                  />

                  <h3 className="serviceTitleCard">GPS</h3>
                  <p className="serviceTextCard">
                     Tendras a tu disposicion, por medio de la aplicacion la
                     ubicacion exacta y el recorrido de tu mascota
                  </p>
               </div>
               <div className="serviceItemGrid">
                  <FontAwesomeIcon
                     className="serviceIconCard"
                     icon={faClinicMedical}
                  />

                  <h3 className="serviceTitleCard">Veterinario</h3>
                  <p className="serviceTextCard">
                     Contamos con centros de atencion inmediata en cualquier
                     tipo de emergencia para tu mascot
                  </p>
               </div>
               <div className="serviceItemGrid">
                  <FontAwesomeIcon
                     className="serviceIconCard"
                     icon={faUserCheck}
                  />

                  <h3 className="serviceTitleCard">Personal</h3>
                  <p className="serviceTextCard">
                     Todo nuestro personal es capacitado para ofrecerte una
                     mejor atencion y servicio
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ServicePage;
