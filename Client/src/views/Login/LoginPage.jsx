/* eslint-disable react/prop-types */

import LoginForm from "../../components/Form/LoginForm";
import RegisterForm from "../../components/Form/RegisterFrorm";
import mainLogo from "../../assets/png/actionPortal.png";
import styles from "./login.module.css";

/**
 * This function represents the Login page
 *
 * @returns {React.JSX}
 */

const LoginPage = ({ registerFunction, loginFunction, loginOrRegister }) => {
  return (
    <section className={styles.loginPage}>
      <img className={styles.imgLogo} src={mainLogo} alt="" />

      <span className={styles.formCont}>
        <h1 className={styles.title}>Rick and Morty</h1>
        <p className={styles.title}>Dex</p>
        {loginOrRegister === "login" && (
          <LoginForm
            className={styles.loginForm}
            loginFunction={loginFunction}
          />
        )}
        {loginOrRegister === "register" && (
          <RegisterForm
            className={styles.loginForm}
            registerFunction={registerFunction}
          />
        )}
      </span>
    </section>
  );
};

export default LoginPage;
