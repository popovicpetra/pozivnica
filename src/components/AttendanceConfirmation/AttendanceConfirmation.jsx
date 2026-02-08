import styles from '../AttendanceConfirmation/AttendanceConfirmation.module.css'
import Form from '../Form/Form'
function AttendanceConfirmation(){

    return (
        <div className={styles.container}>
            <p className={styles.potvrda}>Potvrda dolaska</p>
            <p className={styles.rok}>Molimo Vas da nam potvrdite dolazak najkasnije do 20. 3. 2026.</p>
            <Form/>
            <div className={styles.kraj}>
            <p className={styles.text}>Radujemo se Vašem dolasku!</p>
            <p className={styles.at}>Tamara&
                Andreja</p>
            </div>
        </div>
    )
}

export default AttendanceConfirmation