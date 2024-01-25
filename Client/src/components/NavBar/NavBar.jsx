import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import NavBtn from "../common/NavBtn.jsx";
import BurguerButton from "../common/BurgerButton.jsx";
import ROUTES from "../../helpers/routes.helper.js";
import logo from "../../assets/logo/logo.png";
import rickFace from "../../assets/png/devilRick.png";
import styles from "./NavBar.module.css";
import StarsBackground from "../StarBackground/StarsBackground.jsx";

// eslint-disable-next-line react/prop-types
const NavBar = ({ logoutFunction, formHandler, loginOrRegister }) => {
  const [clicked, setClicked] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();

  const handleLogOut = () => {
    logoutFunction();
  };

  const handleTypeOfForm = (e) => {
    formHandler(e);
  };

  const handleClick = () => {
    if (window.innerWidth > 767) {
      setClicked(false);
    } else setClicked(!clicked);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <NavContainer className={styles.navBar}>

      <span className={styles.brand}>
        <img src={logo} />
        <img src={rickFace} alt="Rick"></img>
      </span>
      <StarsBackground />
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
          <ul className={styles.navLink}>
            <li className={styles.listItem}>
              <span
                onClick={(e) => handleTypeOfForm(e)}
                className={styles.navLink}
              >
                <NavLink onClick={handleClick}>
                  <NavBtn
                    color={loginOrRegister !== "register" && "grey"}
                    content={"Sing in"}
                  />
                </NavLink>
              </span>
            </li>
            <li className={styles.listItem}>
              <span
                onClick={(e) => handleTypeOfForm(e)}
                className={styles.navLink}
              >
                <NavLink onClick={handleClick}>
                  <NavBtn
                    color={loginOrRegister !== "login" && "grey"}
                    content={"Log in"}
                  />
                </NavLink>
              </span>
            </li>
          </ul>
        )}
      </div>
      <div className="burguer">
        <BurguerButton clicked={clicked} handleClick={handleClick} />
      </div>
      <BgDiv className={`initial ${clicked ? " active" : ""}`}></BgDiv>
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
    background-color: black;
    position: absolute;
    top: -100px;
    left: -2000px;
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
    top: 170%;
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
  background: #000000;
  position: absolute;
  top: -1000px;
  left: -1000px;
  z-index: -1;
  transition: all 0.6s ease;

  &.active {
    position: fixed;
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;
