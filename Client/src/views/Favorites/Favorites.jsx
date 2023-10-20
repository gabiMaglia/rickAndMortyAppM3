import  { useState } from "react";
import { connect, useDispatch } from "react-redux";
import Card from "../../components/Card/Card";
import { filterCards, orderCards } from "../../redux/actions";
import StarBackground from "../../components/StarBackground/StarsBackground";

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
      
   

        <div className={styles.customSelect}>
       
          <label htmlFor='Order'>Id: </label>
            <select onChange={handleOrder} name="Order" id="">
              <option value="A">Ascendente</option>
              <option value="B">Descendente</option>
            </select>
         
          <label htmlFor="Filter"> Gender:  </label>
          <select onChange={handleFilter} name="Filter" id="">
            <option value="All">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </select>
         
        </div>
   


   
      </div>
      <div className={styles.cardBoard}>
        <StarBackground />
        {myFavorites.length == 0 ? (
          <p>Agrega al menos una carta a tus favoritos</p>
        ) : (
          myFavorites.map((e, key) => {
            return (
              <Card
                key={key}
                id={e.id}
                name={e.name}
                status={e.status}
                species={e.species}
                gender={e.gender}
                image={e.image}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
