import { useState, useEffect } from "react";
import styles from "./form.module.css";
import { validateUser } from "./validate.js";
import GoBtn from "../common/GoBtn";

// eslint-disable-next-line react/prop-types
const RegisterForm = ({ registerFunction  }) => {
  /**
   * This function represents the contact form
   *
   * @returns {React.JSX}
   */
  const [errorFlag, setErrorFlag] = useState(false);

  const errorFlagHandler = (errorWillBe) => {
    setErrorFlag(errorWillBe);
  };

  // userName & Pass state
  const [userData, setUserData] = useState({
      first_name: "",
      last_name: "",
      user_email: "",
      user_handle: "",
      user_password: "",
  });
  // userName & Pass state errors
  const [errors, setErrors] = useState({
    user_handle: "",
    user_password: "",
  });

  
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

  const handleFormSubmit = (e) => {
    /**
     * This function handles reaction of submiting the imputs
     * writes the states and check the errores
     *
     */
    e.preventDefault();
    registerFunction(userData);
  };

  return (
    <div className={styles.loginCard}>
      <div>
        <div className={styles.loginBackground}></div>
        <span className={styles.titleCont}>
          <strong className={styles.mainTitle}>Create a new user</strong>
        </span>
      </div>
      <form
        className={styles.loginForm}
        onSubmit={handleFormSubmit}
  
      >
        <label htmlFor="user">First Name:</label>
        <input
          type="text"
          value={userData.username}
          name="first_name"
          onChange={handleFormChange}
         
        />
        <label htmlFor="user">Last Name:</label>
        <input
          type="text"
          value={userData.username}
          name="last_name"
          onChange={handleFormChange}
        
        />
        <label htmlFor="user">Email:</label>
        <input
          type="text"
          value={userData.username}
          name="user_email"
          onChange={handleFormChange}
         
        />
        <label htmlFor="user">Username:</label>
        <input
          type="text"
          value={userData.username}
          name="user_handle"
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
          type="text"
          name="user_password"
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
          <GoBtn type="submit" content={"Create!"} />
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
        {/* <p className={`  ${errorFlag ? styles.hide : styles.subtitle}`}>
          You can keep calm nothing here will affect you directly or indirecly
          neither in this universe or others...{" "}
        </p> */}
      </form>
    </div>
  );
};

export default RegisterForm;
