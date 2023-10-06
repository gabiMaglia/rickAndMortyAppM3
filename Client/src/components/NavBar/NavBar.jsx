import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import NavBtn from "../common/NavBtn.jsx";

import ROUTES from "../../helpers/routes.helper.js";
import logo from "../../assets/logo/logo.png";
import rickFace from "../../assets/png/devilRick.png"
import styles from "./NavBar.module.css";
// eslint-disable-next-line react/prop-types
const NavBar = ({ logoutFunction }) => {

  /**
  * This function represents the NavBar
  * 
  * @returns {React.JSX}
  */
  const location = useLocation()

  const handleLogOut = () => {
    logoutFunction()
  }

  return (

    <nav className={styles.navBar}>
      <span className={styles.brand} >
        <img src={logo} />
        <img src={rickFace}  alt='Rick'></img>
      </span>
      {location.pathname !== '/' ?
        <ul className={styles.navLink}>
          <li className={styles.listItem}>
            <NavLink
              onClick={handleLogOut}

              className={styles.navLink}
              activeclassname={styles.active}
            >
              <NavBtn content='Log out' />
            </NavLink>
          </li>
          <li className={styles.listItem}>
            <NavLink
              to={ROUTES.HOME}
              className={styles.navLink}
              activeclassname={styles.active}
            >
              <NavBtn content='Card Board' />
            </NavLink>
          </li>
          <li className={styles.listItem}>
            <NavLink
              to={ROUTES.FAVORITE}
              className={styles.navLink}
              activeclassname={styles.active}
            >
              <NavBtn content='Favorites' />
            </NavLink>
          </li>
          <li className={styles.listItem}>
            <NavLink
              to={ROUTES.ABOUT}
              className={styles.navLink}
              activeclassname={styles.active}
            >
              <NavBtn content='About Me' />
            </NavLink>
          </li>
        </ul>
        :
        <NavBtn content={'Log In'} />
      }
    </nav>
  );
};

export default NavBar;
