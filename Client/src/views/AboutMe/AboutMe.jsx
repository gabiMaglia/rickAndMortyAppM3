import Detail from '../../components/Detail/Detail'
import style from './about.module.css'



export const AboutMe = () => {
  /**
  * This function represents the About page
  * 
  * @returns {React.JSX}
  */
  


  return (
  
  <section className={style.aboutMe}>
    <article >
        <Detail type='personal'></Detail>
      </article>
  </section>
    
  )
}
