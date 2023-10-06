/* eslint-disable react/prop-types */

import Form from "../../components/Form/Form";
import mainLogo from "../../assets/png/actionPortal.png"
import styles from './login.module.css'



  /**
 * This function represents the Login page
 * 
 * @returns {React.JSX}
 */

const Login = ({loginFunction}) => {
  return (
    
    <section className={styles.loginPage}>
      <img className={styles.imgLogo} src={mainLogo} alt="" />
      
      <span className={styles.formCont}>
        <h1 className={styles.title}>Rick and Morty</h1>
        <p className={styles.title}>Dex</p>
        <Form className={styles.loginForm} loginFunction= {loginFunction} />
      </span>
      
    </section>
    
  );
};

export default Login;
