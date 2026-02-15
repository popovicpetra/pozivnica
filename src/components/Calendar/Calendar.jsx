import slika from "../../assets/kalendar3x.png"
import styles from "../Calendar/Calendar.module.css"
import {motion} from "framer-motion"
function Calendar() {


  return (
     <motion.section
      initial={{ opacity: 0,  y: 10, scale: 0.98 }}
      whileInView={{ opacity: 1,  y: 0, scale: 1  }}
      transition={{ duration: 1, ease: "easeOut"  }}
      viewport={{amount:0.5, once: true }}
    >
    <div className={styles.container}>
      <p className={styles.text}>April</p>
      <img className={styles.slika} src={slika}></img>
    </div>
    </motion.section>
  )
}

export default Calendar