import styles from '../AttendanceConfirmation/AttendanceConfirmation.module.css'
import Form from '../Form/Form'
import {motion} from "framer-motion"
function AttendanceConfirmation({maxGuests}){

    return (
             <motion.section
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      whileInView={{ opacity: 1,  y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut"  }}
      viewport={{amount:0.3, once: true }}
      >
        <div className={styles.container}>
        
            <p className={styles.potvrda}>Potvrda dolaska</p>
       

            <p className={styles.rok}>Molimo Vas da nam potvrdite dolazak najkasnije do 20. 3. 2026.</p>
    
        
        
            <Form maxGuests = {maxGuests}/>
     
            <div className={styles.kraj}>
            

            <p className={styles.text}>Radujemo se Vašem dolasku!</p>
            <p className={styles.at}>Tamara&
                Andreja</p>
            </div>
        </div>
      </motion.section>
    )
}

export default AttendanceConfirmation