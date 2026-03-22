import styles from '../AttendanceConfirmation/AttendanceConfirmation.module.css'
import Form from '../Form/Form'
function NewConfirmation({maxGuests}){

    return (
             
        <div className={styles.container}>
        
            <p className={styles.potvrda}>Potvrda dolaska</p>
       

            <p className={styles.rok}>Molimo Vas da nam potvrdite dolazak najkasnije do 3. 4. 2026.</p>
    
        
        
            <Form maxGuests = {maxGuests}/>
     
            <div className={styles.kraj}>
            

            <p className={styles.text}>Radujemo se Vašem dolasku!</p>
            <p className={styles.at}>Tamara&
                Andreja</p>
            </div>
        </div>
    )
}

export default NewConfirmation