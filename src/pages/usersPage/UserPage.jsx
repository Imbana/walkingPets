import CardsList from "../../components/cardsList/CardsList";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

import "./userPage.css";

const UserPage = () => {



   return (
      <div className="layout">
         <Navbar />
         <div className="layoutContainer">
            <div className="userPage">
               <CardsList />
               {/* <ModalPortal active={showModal} setShowModal={setShowModal}>
            <Slider />
         </ModalPortal> */}
            </div>
         </div>
         <Footer />
      </div>
   );
};

export default UserPage;
