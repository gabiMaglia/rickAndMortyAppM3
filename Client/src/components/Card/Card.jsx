import { useEffect, useState } from "react";
import styles from "./Card.module.css";
import CardHeader from "./CardParts/CardHeader";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import InfoBox from "./CardParts/InfoBox";
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

function Card(props) {
  const {
    id,
    name,
    status,
    species,
    gender,
    image,
    addToFav,
    removeFromFav,
    myFavorites,
  } = props;

  const [isFav, setIsfav] = useState(false);

  const handleFavBtn = () => {
    console.log('favhandleworks')
    isFav ? removeFromFav(id) : addToFav( props );
    setIsfav(!isFav);
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsfav(true);
      }
    });
  }, [myFavorites]);


  return (
    <article className={styles.card}>
      <CardHeader id={id} event={props.onClose} name={name} />
      <div className={styles.mainDiv}>
        <div className={styles.imgCont}>
          <img className={styles.img} src={image} alt={name} />
          <div className={styles.status}>{status}</div>
        </div>
        <div className={styles.infoDiv}>
          <InfoBox title="Species" info={species} />
          <InfoBox title="Gender" info={gender} />
        </div>
      </div>

      <div className={styles.footer}>
        <i>
          {isFav ? (
            <i className={styles.link} onClick={handleFavBtn}>
              ❤️
            </i>
          ) : (
            <i className={styles.link} onClick={handleFavBtn}>
              🤍
            </i>
          )}
        </i>
        <NavLink className={styles.link} to={`/details/${id}`}>
          <div className={styles.detail}> Details... </div>
        </NavLink>
      </div>
    </article>
  );
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Card);
