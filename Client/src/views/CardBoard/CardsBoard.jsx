/* eslint-disable react/prop-types */
import style from "./CardBoard.module.css";
import CardThumbnail from "../../components/CardThumbnail/CardThumbnail";
import peackeRick from '../../assets/png/PickleRick.png'

export default function Cards(props) {
  /**
   * This function represents the Card Board page
   *
   * @returns {React.JSX}
   */

  return (
    <div className={style.cardboardCont}>
      <h2 className={style.title}>Character Board</h2>
      <div className={style.cardBoard}>
        {props.characters.length == 0 ? (
          <div style={{display:"grid", placeContent: "center", gap: '2rem' , height: '50dvh' }}>
             <img src={peackeRick} alt="Nothing here" style={{width: '10%', marginInline: 'auto' }} />
             <p >Add at least one card to the board</p>
          </div>
        ) : (
          props.characters.map((e, key) => {
            return (
              <CardThumbnail
                key={key}
                id={e.id}
                name={e.name}
                origin={e.origin}
                status={e.status}
                species={e.species}
                gender={e.gender}
                image={e.image}
                onClose={props.close}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
