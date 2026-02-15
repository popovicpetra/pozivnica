import slika1 from "../../assets/ova4x.png";
import styles from "../Landing/Landing.module.css"
import {motion} from "framer-motion";
function Landing() {


  return (
     <motion.section
      initial={{ opacity: 0,  y: 10, scale: 0.98 }}
      whileInView={{ opacity: 1,  y: 0, scale: 1  }}
      transition={{ duration: 1, ease: "easeOut"  }}
      viewport={{amount:"all", once: true }}
    >
      <div className={styles.container}>
        <img className= {styles.hero} src={slika1} alt="Slika1" />
      </div>
    </motion.section>
  )
}

export default Landing