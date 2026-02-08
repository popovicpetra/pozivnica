import pozadina from '../../assets/krempozadina3x.png'
import styles from '../Timetable/Timetable.module.css'
function Timetable() {


  return (
    <div>
        <img src={pozadina} className={styles.pozadina}></img>
    </div>
  )
}

export default Timetable