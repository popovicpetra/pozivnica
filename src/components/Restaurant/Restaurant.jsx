import lokacija from '../../assets/location3x.png'
import mesecev from '../../assets/restoran3x.png'
import styles from '../Restaurant/Restaurant.module.css'
import {motion} from "framer-motion"
function Restaurant() {


  return (
   <motion.section
      initial={{ opacity: 0,  y: 10, scale: 0.98 }}
      whileInView={{ opacity: 1,  y: 0, scale: 1  }}
      transition={{ duration: 1, ease: "easeOut"  }}
      viewport={{amount:0.5, once: true }}
    >
    <div className={styles.container}>
        <div className={styles.info}>
            <img className={styles.lokacija} src={lokacija}></img>
            <p className={styles.restoran}>Restoran</p>
            <p className={styles.mesecev}>Mesečev konak</p>
            <a href='https://www.google.com/maps/search/?api=1&query=Mesecev+konak' target="_blank" className={styles.mapa}>Prikaži lokaciju na mapi</a>
        </div>
        <img className={styles.mesecevslika} src={mesecev}></img>
    </div>
    </motion.section>
  )
}

export default Restaurant