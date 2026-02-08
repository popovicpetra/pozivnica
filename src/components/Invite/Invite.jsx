import styles from '../Invite/Invite.module.css'
function Invite() {


  return (
    <div className={styles.container}>
      <p className={styles.text}>Sa radošću Vas pozivamo da budete
        naši gosti i svojim prisustvom nam
        ulepšate najvažniji dan!</p>
       <p className={styles.at}>Tamara&
        Andreja</p> 
       <div className={styles.datum}>
        <p className={styles.dann}>  NEDELJA  </p>
        <p className={styles.d}>19</p>
        <p className={styles.dana}>  APRIL  </p>
       </div>

    </div>
  )
}

export default Invite