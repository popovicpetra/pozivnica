import slika from "../../assets/kalendar3x.png"
import styles from "../Calendar/Calendar.module.css"
function Calendar() {


  return (
    <div className={styles.container}>
      <p className={styles.text}>April</p>
      <img className={styles.slika} src={slika}></img>
    </div>
  )
}

export default Calendar