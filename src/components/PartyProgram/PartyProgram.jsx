import kalendarcic from '../../assets/kalendarmali3x.png'
import burme from '../../assets/burme3x.png'
import martini from '../../assets/martini3x.png'
import torta from '../../assets/torta3x.png'
import pozadina from '../../assets/krempozadina3x.png'
import PartyItem from '../PartyItem/PartyItem'
import styles from '../PartyProgram/PartyProgram.module.css'

function PartyProgram(){

    return(
        <div className={styles.container}>
            <img src={pozadina} className={styles.slika}></img>
            <div className={styles.content}>

            <p className={styles.text}>Program dana</p>
            <div className={styles.items}>
            <PartyItem slika = {kalendarcic} sat="15" min= "30" tekst= "Skup zvanica u restoranu"/>
            <PartyItem slika = {burme} sat="16" min= "00" tekst= "Građansko venčanje"/>
            <PartyItem slika = {martini} sat="17" min= "30" tekst= "Žurka"/>
            <PartyItem slika = {torta} sat="21" min= "00" tekst= "Torta"/>
            </div>
            </div>

        </div>
    )
}

export default PartyProgram