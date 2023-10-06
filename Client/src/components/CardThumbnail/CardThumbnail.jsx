import { useEffect, useState } from "react";
import styles from "./CardThumbnail.module.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";

/**
 * Represents a card.
 * @param {number} id -
 * @param {string} name -
 * @param {string} status -
 * @param {string} species -
 * @param {string} gender -
 * @param {string} origin -
 * @param {string} image -
 * @returns {React.JSX}
 */

const CardThumbnail = (props) => {
  let { name } = props;
  const regEx = /^[^\s]+\s+[^\s]+[^\s]/;
  const result = name?.match(regEx);
  if (result) name = name.split(" ").slice(0, 2).join(" ") + "...";

  const { id, status, image, addToFav, removeFromFav, myFavorites, onClose  } = props;

  const [isFav, setIsfav] = useState(false);

  const handleFavBtn = () => {
    isFav ? removeFromFav(id) : addToFav(props);
    setIsfav(!isFav);
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsfav(true);
      }
    });
  }, [myFavorites]);


  const handleClose = () => {
    
    onClose(id);
  };


  if(!props) return <p>Loading...</p>

  return (
   
      <article className={styles.card}>
        <div className={styles.header}>
            {isFav ? (
          <span  className={styles.favIconOn}>
              <i  className={styles.link} onClick={handleFavBtn}>
                ❤️
              </i>
          </span>
            ) : ( 
            <span className={styles.favIconOff}>
              <i className={styles.link} onClick={handleFavBtn}>
                🤍
              </i>
            </span>
            )}
              <CloseButton className={styles.closeTab} onClick={handleClose}></CloseButton>
            
          <div className={styles.detail}> {`#${id}`} </div>

        </div>
        <div className={styles.mainDiv}>
          <div className={styles.imgCont}>
            <img className={styles.img} src={image} alt={name} />
            <div className={styles.status}>{status}</div>
          </div>
          <div className={styles.infoDiv}></div>
          <Link className={styles.link} to={`/details/${id}`}>
            <div className={styles.footer}>
              <em className={styles.footer_text}>{name}</em>
            </div>
          </Link>
        </div>
      </article>
   
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToFav: (character) => {
      dispatch(addFav(character));
    },

    removeFromFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const CloseButton = styled.i`
  width: 30px;
  color: black;
  background-color: black;
  position: relative;
  outline: none !important;
  /* border: 0.1px solid grey; */
  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 80%;
    height: 2px;
    background-color: #fff;
    transition: 0.3s ease-out;
    left: 50%;
    top: 50%;
  }
  &:after {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:before {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  &:hover,
  &:focus {
    &:before,
    &:after {
      transform: translate(-50%, -50%) rotate(180deg);
    }
  }
`;

export default connect(mapStateToProps, mapDispatchToProps)(CardThumbnail);
