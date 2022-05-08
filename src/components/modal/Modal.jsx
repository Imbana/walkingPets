import { faTimes, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDOM from "react-dom";
import "./modal.css";
const Modal = ({ children, active, setShowModal }) => {
   return (
      <>
         {active && (
            <div className="modal">
               <div className="modalWindow">
               <FontAwesomeIcon onClick={() => setShowModal(active => !active)}  className="madalClose" icon={faTimes} />


                  <div>{children}</div>
               </div>
                  <div className="modalWindowClose" onClick={() => setShowModal(active => !active)} ></div>
            </div>
         )}
      </>
   );
};

export default function ModalPortal({ children, active, setShowModal }) {
   return ReactDOM.createPortal(
      <Modal setShowModal={setShowModal} active={active}>
         {children}
      </Modal>,
      document.getElementById("modal-root")
   );
}
