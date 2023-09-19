import React from 'react'
import styles from './cardDetail.module.css'
import Detail from '../../components/Detail/Detail'
  /**
 * This function represents the CA page
 * 
 * @returns {React.JSX}
 */
const CardDetail = () => {
    
  return (
    <section className={styles.detailCard}>
        <article>
            <Detail/>
        </article>
    </section>
  )
}

export default CardDetail