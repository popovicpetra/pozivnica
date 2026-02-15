import styles from '../Invite/Invite.module.css'
import {motion} from "framer-motion"
function Invite() {


  return (
   
    <div className={styles.container}>
       <motion.section
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      whileInView={{ opacity: 1,  y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut"  }}
      viewport={{amount:0.5, once: true }}
      >
      <p className={styles.text}>Sa radošću Vas pozivamo da budete
        naši gosti i svojim prisustvom nam
        ulepšate najvažniji dan!</p>
        </motion.section>
         <motion.section
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      whileInView={{ opacity: 1,  y: 0, scale: 1  }}
      transition={{ duration: 1, ease: "easeOut"  }}
      viewport={{amount:0.5, once: true }}
    >
       <p className={styles.at}>Tamara&
        Andreja</p> 
        </motion.section>
            <motion.section
      initial={{ opacity: 0,  y: 10, scale: 0.98 }}
      whileInView={{ opacity: 1,  y: 0, scale: 1  }}
      transition={{ duration: 1, ease: "easeOut"  }}
      viewport={{amount:0.5, once: true }}
    >
       <div className={styles.datum}>
        <p className={styles.dann}>  NEDELJA  </p>
        <p className={styles.d}>19</p>
        <p className={styles.dana}>  APRIL  </p>
       </div>
       </motion.section>

    </div>
    
  )
}

export default Invite