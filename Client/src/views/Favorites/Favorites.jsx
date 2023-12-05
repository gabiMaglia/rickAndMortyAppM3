import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import Card from "../../components/Card/Card";
import { filterCards, orderCards } from "../../redux/actions";
import StarBackground from "../../components/StarBackground/StarsBackground";
import peackeRick from "../../assets/png/PickleRick.png";
import styles from "./favorites.module.css";

const Favorites = ({ myFavorites }) => {
  const dispatch = useDispatch();

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  };
  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
    setAux(!aux);
  };

  const [aux, setAux] = useState(false);

  return (
    <div className={styles.favoritesCont}>
      <div className={styles.cardBoard}>
        <StarBackground />
        {myFavorites.length === 0 ? (
          <div
            style={{
              display: "grid",
              placeContent: "center",
              gap: "2rem",
              height: "50vh", // Ajusté el estilo para utilizar "vh" en lugar de "dvh"
            }}
          >
            <img
              src={peackeRick}
              alt="Nothing here"
              style={{ width: "30%", marginInline: "auto" }}
            />
            <p>Add at least one card to the board</p>
          </div>
        ) : (
          <>
            <div className={styles.customSelect}>
              <label htmlFor="Order">Id: </label>
              <select onChange={handleOrder} name="Order" id="">
                <option value="A">Ascendente</option>
                <option value="B">Descendente</option>
              </select>
  
              <label htmlFor="Filter"> Gender: </label>
              <select onChange={handleFilter} name="Filter" id="">
                <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
              </select>
            </div>
  
            {myFavorites.map((e, key) => (
              <Card
                key={key}
                id={e.id}
                name={e.name}
                status={e.status}
                species={e.species}
                gender={e.gender}
                image={e.image}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
            }

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
