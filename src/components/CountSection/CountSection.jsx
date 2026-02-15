import picture from '../../assets/druga4x.png'
import styles from '../CountSection/CountSection.module.css'
import Countdown from 'react-countdown';
const renderer =({days, hours, minutes, seconds})=>{
    return(

        <div className={styles.timer}>
            <div className={styles.timeBox}>
                <span className={styles.number}>{days}</span>
                <span className={styles.label}>DAN</span>
            </div>

            <span className={styles.separator}>|</span>

            <div className={styles.timeBox}>
                <span className={styles.number}>{hours}</span>
                <span className={styles.label}>SAT</span>
            </div>

            <span className={styles.separator}>|</span>

            <div className={styles.timeBox}>
                <span className={styles.number}>{minutes}</span>
                <span className={styles.label}>MIN</span>
            </div>

            <span className={styles.separator}>|</span>

            <div className={styles.timeBox}>
                <span className={styles.number}>{seconds}</span>
                <span className={styles.label}>SEK</span>
            </div>
        </div>
    )
}
const now = new Date();

const dstSwitch = new Date(2026, 2, 29, 2, 0, 0);

const targetHour = now < dstSwitch ? 1 : 0;

const targetDate = new Date(2026, 3, 19, targetHour, 0, 0);

function CountSection(){
    return(
       
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <img src={picture} className={styles.image}/>
                {/*<Countdown date={new Date('2026-04-19T00:00:00')}/>*/}
                <Countdown
                    date={targetDate}
                    renderer={renderer}
                />
            </div>
       
        </div>
      
    )
}

export default CountSection;
