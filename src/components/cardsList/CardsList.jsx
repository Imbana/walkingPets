import "./cardsList.css";
import { faCommentAlt, faDog, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useDispatch, useSelector } from "react-redux";
import { selectsearch, usersSearch } from "../../redux/slices/searchSlice";
import { useState } from "react";
import { useEffect } from "react";

const cardsListImg = require.context("../../assets/",true)


const CardsList = () => {
    const dispatch = useDispatch();
    const { users: valueSearchRedux } = useSelector(selectsearch);
    const [valueSearch, setvalueSearch] = useState("");
    const [valueUsers, setValueUsers] = useState(valueSearchRedux)

    const handleSearch = (e) => {
        setvalueSearch(e.target.value.toUpperCase())

      
    }
 
    useEffect(() => {
        const newArray = valueSearchRedux.filter((user) => user.name.toUpperCase().includes(valueSearch))
        setValueUsers(newArray)
        // dispatch(usersSearch(newArray));
    }, [valueSearch,valueSearchRedux,dispatch])
    

   return (
      <div className="cardsList">
          <div className="cardsListSearch">
              <div className="cardsListSearchContainer">
                  <input placeholder="Buscar por nombre" onChange= {handleSearch} className="cardsListInput" type="text" />
                  <FontAwesomeIcon
                         className="footerCopyIcon "
                         icon={faSearch}
                      />
              </div>
          </div>
         <div className="cardsListContain">
            {
            valueUsers.map((card) => ( 
                <div key={card.id} className="cardsListCard">
                <img className="cardsListImg" src={cardsListImg(`./${card.img}`)} alt="" />
                <h1 className="cardsListTitle">{card.name}</h1>
                {
                    card.active ? (<div className="cardListPoint"></div> ) :  (<div style={{background:"black",boxShadow:"0px 0px 15px 2px rgb(49, 49, 49)"}} className="cardListPoint"></div> )
                }
                <div className="cardsListInfo">
                   <div className="cardListInfoItem">
                      <FontAwesomeIcon
                         className="footerCopyIcon cardsListIconStart"
                         icon={faStar}
                      />
                      <span>8.5</span>
                   </div>
                   <div className="cardListInfoItem">
                      <FontAwesomeIcon
                         className="footerCopyIcon"
                         icon={faCommentAlt}
                      />
                      <span>80</span>
                   </div>
                   <div className="cardListInfoItem">
                      <FontAwesomeIcon className="footerCopyIcon" icon={faDog} />
                      <span>150</span>
                   </div>
                   <div className="cardListInfoItem">
                      <span>2pm - 6pm </span>
                   </div>
                </div>
             </div>
            ))

            }

    
         </div>
      </div>
   );
};

export default CardsList;
