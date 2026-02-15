import slika1 from "../../assets/ova4x.png";
import styles from "../Landing/Landing.module.css"

function Landing() {


  return (
      <div className={styles.container}>
        <img className= {styles.hero} src={slika1} alt="Slika1" />
      </div>
  )
}

export default Landing