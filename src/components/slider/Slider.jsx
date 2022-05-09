import { Swiper, SwiperSlide } from "swiper/react";
import card1Img from "../../assets/card1fondo.png";
import card2Img from "../../assets/card2fondo.png";
import card3Img from "../../assets/card3fondo.png";
import card4Img from "../../assets/card4fondo.png";

import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";

const Slider = () => {
   return (
      <>
         <Swiper
            pagination={{
               dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
         >
            <SwiperSlide>
               <div className="SliderCard">
                  <img
                     className="sliderImgTop"
                     src={card1Img}
                     alt="primeraImg"
                  />
                  <p className="sliderText">
                     Te ofrecemos el mejor servicio en seguridad, precio,
                     personal y todo lo que buscas para tu tranquilidad y la
                     diversión de tus mascotas.
                  </p>

                  <Link to="/cards">
                     <button className="SliderBottonLogin">Iniciar</button>
                  </Link>
                  <Link to="/cards">
                     <span className="sliderOmitir">omitir</span>
                  </Link>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="SliderCard">
                  <img className="sliderImgTop" src={card2Img} alt="card2Img" />
                  <p className="sliderText">
                     Contamos con seguimiento por gps, así siempre podrás ver el
                     recorrido y ubicación de tu mascota.
                  </p>

                  <Link to="/cards">
                     <button className="SliderBottonLogin">Iniciar</button>
                  </Link>
                  <Link to="/cards">
                     <span className="sliderOmitir">omitir</span>
                  </Link>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="SliderCard">
                  <img
                     className="sliderImgTop"
                     src={card3Img}
                     alt="primeraImg"
                  />
                  <p className="sliderText">
                     Contamos con centro y personal de atención inmediata en
                     caso de cualquier emergencia.
                  </p>

                  <Link to="/cards">
                     <button className="SliderBottonLogin">Iniciar</button>
                  </Link>
                  <Link to="/cards">
                     <span className="sliderOmitir">omitir</span>
                  </Link>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="SliderCard">
                  <img
                     className="sliderImgTop"
                     src={card4Img}
                     alt="primeraImg"
                  />
                  <p className="sliderText">
                     Todo nuestro personal pasa por un curso de capacitación
                     para mejorar el mejor servicio a las necesidades de tus
                     mascotas.
                  </p>

                  <Link to="/cards">
                     <button className="SliderBottonLogin">Iniciar</button>
                  </Link>
               </div>
            </SwiperSlide>
         </Swiper>
      </>
   );
};

export default Slider;
