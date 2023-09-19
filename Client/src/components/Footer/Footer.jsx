import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./footer.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import NavBtn from "../common/NavBtn";
import { connect } from "react-redux";
import { clearFav } from "../../redux/actions";

/**
 * This function represents the Footer
 * @returns {React.JSX}
 */
const Footer = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    /**
     * This function takes you back home
     */
    navigate("/home");
  };

  const handleClear = () => {
    /**
     * This function clear favorites from global state
     */
    props.clearFav();
  };

  return (
    <footer className={style.footer}>
      {location.pathname === "/favorite" ? (
        <span style={{ cursor: "pointer" }} onClick={handleClear}>
          <NavBtn content={"clear"} />
        </span>
      ) : location.pathname.startsWith("/details/") ? (
        <span style={{ cursor: "pointer" }} onClick={handleGoBack}>
          <NavBtn content={"Go Back"} />
        </span>
      ) : location.pathname === "/home" ? (
        <SearchBar
          maxChar={props.maxChar}
          addNew={props.addCharacter}
          clearBoard={props.clear}
        />
      ) : (
        <p>Proyecto integrador Henry M2 / &copy; Gabriel Maglia 2023</p>
      )}
    </footer>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearFav: () => {
      dispatch(clearFav());
    },
  };
};

export default connect(null, mapDispatchToProps)(Footer);
