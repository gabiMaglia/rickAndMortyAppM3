import { useState, useEffect } from "react";
import { validateUser } from "./validate.js";
import GoBtn from "../common/GoBtn";
import styles from "./form.module.css";
// eslint-disable-next-line react/prop-types
const LoginForm = ({ loginFunction  }) => {
  /**
   * This function represents the contact form
   *
   * @returns {React.JSX}
   */
  // eslint-disable-next-line no-unused-vars
  const [errorFlag, setErrorFlag] = useState(false);

  const errorFlagHandler = (errorWillBe) => {
    setErrorFlag(errorWillBe);
  };

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
// submit errors

  
  useEffect(() => {
    if (errors.username !== 0 || errors.password !== 0) {
      errorFlagHandler(true);
    } else {
      errorFlagHandler(false);
    }
  }, [errors]);


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
 
    
    if (errors.username !== 0 || errors.password !== 0) {
      errorFlagHandler(true);
    } else {
      errorFlagHandler(false);
    }
  };

  const handleFormSubmit =  (e) => {
    /**
     * This function handles reaction of submiting the imputs
     * writes the states and check the errores
     *
     */
    e.preventDefault();
    setUserData({
      username: "",
      password: "",
    })
    loginFunction(userData);

  };

  return (
    <div className={styles.loginCard}>
      <div>
        <div className={styles.loginBackground}></div>
        <span className={styles.titleCont}>
          <strong className={styles.mainTitle}>Enter your credentials please.</strong>
        </span>
      </div>
      <form
        className={styles.loginForm}
        onSubmit={handleFormSubmit}
  
      >
        <label htmlFor="user">Username</label>
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

        <label htmlFor="password">Password</label>
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
        <div>
          <GoBtn type="submit" content={"Go!"} />
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

export default LoginForm;
