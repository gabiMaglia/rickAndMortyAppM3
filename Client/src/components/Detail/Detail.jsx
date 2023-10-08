import React, { useEffect, useState } from "react";
import styles from "./detail.module.css";
import { useParams } from "react-router-dom";
import InfoBox from "../Card/CardParts/InfoBox";
import { fetchCharacterById } from "../../services/apiCall";
import deadLogo from '../../assets/png/dead.png'
import liveLogo from '../../assets/png/live1.png'
/**
 * This function represents the Detail Page for
 * cards and about
 * @returns {React.JSX}
 */

const Detail = ({ type }) => {
  const { id } = useParams();

  const me = {
    name: "Gabriel Maglia",
    image:
      "https://res.cloudinary.com/atlasair/image/upload/v1694291114/gabi_ifiqza.png",
    status: "Alive",
    species: "Humanoid",
    skills: "Javascript, HTML, CSS ",
    origin: "Argentina -- Earth ",
  };

  const [character, setCharacter] = useState();

  /**
   * UseEffect to load the corresponding data for the selected card
   */

  // if (id)
    useEffect(() => {
      try {
        fetchCharacterById(id).then((data) => {
          setCharacter(data);
        });
      } catch (error) {
        console.log(error);
      }
    }, [id]);
    
    
  return (
    <section className={styles.detailCont} >
      {type === "personal" ? (
        <div className={styles.detailCard}>
          <div className={styles.detailBackground}></div>
          <div className={styles.character}>
              
            <span className={styles.mainImgCont}>
              <img className={styles.mainImg} src={me.image} alt={me.name} />
              <img className={styles.statusImg} src={liveLogo} alt="Alive"/>
            </span>
            
            <div className={styles.chracterInfo}>
              <InfoBox title="Name" info={me.name} />
              <InfoBox title="Species" info={me.species} />
              <InfoBox title="Skills" info={me.skills} />
              <InfoBox title="Origin" info={me.origin} />
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.detailCard}>
          <div className={styles.detailBackground}></div>
          <div className={styles.character}>
          <span className={styles.mainImgCont}>
            <img className={styles.mainImg} src={character?.image} alt={character?.name} />
            {character?.status === "Alive"
              ? <img className={styles.statusImg} src={liveLogo} alt="Alive"/>
              : character?.status === "Dead"
              ? <img className={styles.statusImg}  src={deadLogo} alt="Dead"/>
              : null
              }
            </span> 
            <div className={styles.chracterInfo}>
              <InfoBox title="Name" info={character?.name} />
              <InfoBox title="Species" info={character?.species} />
              <InfoBox title="Gender" info={character?.gender} />
              <InfoBox title="Origin" info={character?.origin} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Detail;
