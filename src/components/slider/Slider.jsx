import { Swiper, SwiperSlide } from "swiper/react";
import card1Img from "../../assets/card1.png";
import card2Img from "../../assets/card2.png";
import card3Img from "../../assets/car3.png";
import card4Img from "../../assets/card4.png";

import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";
import { Pagination } from "swiper";

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
               <div className="SliderCard" style={{ background: "#D1CFE2" }}>
                  <img src={card1Img} alt="primeraImg" />
                  <p className="sliderText">
                     Te ofrecemos el mejor servicio en seguridad, precio,
                     personal y todo lo que buscas para tu tranquilidad y la
                     diversion de tus mascotas
                  </p>
                  <span className="sliderOmitir">omitir</span>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="SliderCard" style={{ background: "#6982B5" }}>
                  <img src={card2Img} alt="card2Img" />
                  <p className="sliderText">
                     Contamos con seguimiento por gps, asi siempre podras ver el
                     recorrido y ubicacion de tu mascota
                  </p>
                  <span className="sliderOmitir">omitir</span>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="SliderCard" style={{ background: "#7EC4CF" }}>
                  <img src={card3Img} alt="primeraImg" />
                  <p className="sliderText">
                     Contamos con centro y personal de atencion inmediata en
                     caso de cualquier emergencia
                  </p>
                  <span className="sliderOmitir">omitir</span>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="SliderCard" style={{ background: "#F1EEE3" }}>
                  <img src={card4Img} alt="primeraImg" />
                  <p className="sliderText">
                     Todo nuestro personal pasa por un curso de capacitacion
                     para mejorar el mejor servicio a las necesidades de tus
                     mascotas.
                  </p>
                  <button className="SliderBottonLogin">LogIn</button>
                  <span className="sliderOmitir">omitir</span>
               </div>
            </SwiperSlide>
         </Swiper>
      </>
   );
};

export default Slider;
