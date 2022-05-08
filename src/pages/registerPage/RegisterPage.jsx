import "./registerPage.css"
import RegisterHuella from "../../assets/huella.png"
import catRegister from "../../assets/cat.png"
import huellasRegister from "../../assets/huellaFooter.png"


const RegisterPage = ({setShowModal}) => {
   return (
      <div className="registerPage">
         <div className="infoPageTop sectionTitleTop">
            <h2 className="infoPageTitle sectionTitle">Inscribe a tu mascota</h2>
            <img
               className="infoPageHuella sectionTitleImg"
               src={RegisterHuella}
               alt=""
            />
         </div>
         <p className="registerPageText">
         Agrega a tu mascota a nuestra base y te daremos un paseo a mitad de precio, asi podras comproba nuestro compromiso en el cuidado de tu mascota.
        </p>

        <button onClick={() => setShowModal(active => !active)}  className='buttonFirst registerButton '>Empieza ya !</button>
  
        <img className="registerCatImg" src={catRegister} alt="" />
        <img className="registerHuellasImg" src={huellasRegister} alt="" />
      </div>
   );
};

export default RegisterPage;
