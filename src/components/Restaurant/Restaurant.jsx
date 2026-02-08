import lokacija from '../../assets/location3x.png'
import mesecev from '../../assets/restoran3x.png'
import styles from '../Restaurant/Restaurant.module.css'
function Restaurant() {


  return (
    <div className={styles.container}>
        <div className={styles.info}>
            <img className={styles.lokacija} src={lokacija}></img>
            <p className={styles.restoran}>Restoran</p>
            <p className={styles.mesecev}>Mesečev konak</p>
            <a href='https://google.com/maps/place/Месечев+конак/data=!4m2!3m1!1s0x0:0xb8810a1043e45c6b?sa=X&ved=1t:2428&ictx=111' target="_blank" className={styles.mapa}>Prikaži lokaciju na mapi</a>
        </div>
        <img className={styles.mesecevslika} src={mesecev}></img>
    </div>
  )
}

export default Restaurant