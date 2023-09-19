import React, { useState } from "react";
import NavBtn from "../common/NavBtn";
import styles from "./form.module.css";
import { validateUser } from "./validate.js";
import GoBtn from "../common/GoBtn";

const Form = ({ loginFunction }) => {
  /**
   * This function represents the contact form
   *
   * @returns {React.JSX}
   */

  // userName & Pass state
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  // userName & Pass state errors
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleFormChange = (e) => {
    /**
     * This function handles reaction of typing code in the imputs
     * writes the states and check the errores
     *
     */
    const input = e.target.name;
    const value = e.target.value;

    setErrors(validateUser({ ...userData, [input]: value }));
    setUserData({ ...userData, [input]: value });
  };

  const handleFormSubmit = (e) => {
    /**
     * This function handles reaction of submiting the imputs
     * writes the states and check the errores
     *
     */
    e.preventDefault();
    loginFunction(userData);
  };
  
  return (
    <div className={styles.loginCard}>
      <div className={styles.loginBackground}></div>
      <span className={styles.titleCont}>
        <strong className={styles.title}>Enter your credentials please.</strong>
      <p className={styles.title}>You can keep calm nothing here will affect you directly or indirecly neither in this universe or others... </p>
      </span>
      <form
        className={styles.loginForm}
        onSubmit={handleFormSubmit}
        action=""
        method="get"
      >
        <label htmlFor="user">Username:</label>
        <input
          type="text"
          value={userData.username}
          name="username"
          onChange={handleFormChange}
          className={
            errors.username === "error"
              ? styles.error
              : errors.username === "succes"
              ? styles.succes
              : styles.none
          }
        />

        <label htmlFor="password">Password:</label>
        <input
          onChange={handleFormChange}
          type="password"
          name="password"
          value={userData.password}
          className={
            errors.password === "error"
              ? styles.error
              : errors.password === "succes"
              ? styles.succes
              : styles.none
          }
        />
        <div >
          <GoBtn  className="page_404__link" type="submit" content={"Go!"} />
        </div>
        <span className={styles.errorChart}>
          <span className={styles.loginErrors}>
            {errors.e1 !== "" ? (
              <i>{errors.e1}</i>
            ) : errors.e2 !== "" ? (
              <i>{errors.e2}</i>
            ) : errors.e3 !== "" ? (
              <i>{errors.e3}</i>
            ) : (
              <i></i>
            )}
          </span>

          <span className={styles.passErrors}>
            {errors.p1 !== "" ? (
              <i>{errors.p1}</i>
            ) : errors.p2 !== "" ? (
              <i>{errors.p2}</i>
            ) : (
              <i></i>
            )}
          </span>
        </span>
        
      </form>
    </div>
  );
};

export default Form;
