import { useState, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import NavBtn from "../common/NavBtn.jsx";
import BurguerButton from "../common/BurgerButton.jsx";
import ROUTES from "../../helpers/routes.helper.js";
import logo from "../../assets/logo/logo.png";
import rickFace from "../../assets/png/devilRick.png";
import styles from "./NavBar.module.css";

// eslint-disable-next-line react/prop-types
const NavBar = ({ logoutFunction }) => {
  /**
   * This function represents the NavBar
   *
   * @returns {React.JSX}
   */
  const [clicked, setClicked] = useState(false);
  const location = useLocation();
  const windowWidth = useRef(window.innerWidth);

  const handleLogOut = () => {
    logoutFunction();
  };
  const handleClick = () => {
  
    if (windowWidth.current < 767){
      setClicked(!clicked);
   
  }
  };
  
  return (
    <NavContainer className={styles.navBar}>
      <span className={styles.brand}>
        <img src={logo} />
        <img src={rickFace} alt="Rick"></img>
      </span>
      <div className={`links ${clicked ? "active" : ""}`}>
        {location.pathname !== "/" ? (
          <ul className={styles.navLink}>
            <li className={styles.listItem}>
              <NavLink
                onClick={handleLogOut}
                className={styles.navLink}
                activeclassname={styles.active}
              >
                <NavBtn onClick={handleClick} content="Log out" />
              </NavLink>
            </li>
            <li className={styles.listItem}>
              <NavLink
              onClick={handleClick}
                to={ROUTES.HOME}
                className={styles.navLink}
                activeclassname={styles.active}
              >
                <NavBtn content="Card Board" />
              </NavLink>
            </li>
            <li className={styles.listItem}>
              <NavLink
              onClick={handleClick}
                to={ROUTES.FAVORITE}
                className={styles.navLink}
                activeclassname={styles.active}
              >
                <NavBtn content="Favorites" />
              </NavLink>
            </li>
            <li className={styles.listItem}>
              <NavLink
              onClick={handleClick}
                to={ROUTES.ABOUT}
                className={styles.navLink}
                activeclassname={styles.active}
              >
                <NavBtn content="About Me" />
              </NavLink>
            </li>
          </ul>
        ) : (
          <NavBtn onClick={handleClick} content={"Log In"} />
        )}
      </div>
      <div className="burguer">
        <BurguerButton clicked={clicked} handleClick={handleClick} />
      </div>
      <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
    </NavContainer>
  );
};

export default NavBar;

const NavContainer = styled.nav`
 
 h2 {
    color: white;
    font-weight: 400;
    span {
      font-weight: bold;
    }
  }

 
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links {
    position: absolute;
    top: -100px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.5s ease;
    a {
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 280%;
    left: 0;
    right: 0;
    text-align: center;
    a {
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

const BgDiv = styled.div`
  background-color: #3a3838;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.6s ease;

  &.active {
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 1500%;
    background-color: #000000;
  }
`;
