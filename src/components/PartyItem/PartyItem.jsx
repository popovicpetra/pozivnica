import styles from '../PartyItem/PartyItem.module.css'
function PartyItem({slika, sat, min, tekst}){

    return (
        <>
        <div className={styles.container}>
            <img src={slika} className={styles.slika}></img>
            <div className={styles.info}>
                <p className={styles.sati}>{sat}.{min}h</p>
                <p className={styles.text}>{tekst}</p>
            </div>
        </div>
        <hr className={styles.divider}></hr>
        </>
    )
}

export default PartyItem