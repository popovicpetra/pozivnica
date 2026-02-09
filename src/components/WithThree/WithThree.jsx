import { useEffect, useState } from "react";
import Calendar from '../Calendar/Calendar'
import CountSection from '../CountSection/CountSection'
import Invite from '../Invite/Invite'
import Landing from '../Landing/Landing'
import PartyProgram from '../PartyProgram/PartyProgram'
import Restaurant from '../Restaurant/Restaurant'
import AttendanceConfirmation from '../AttendanceConfirmation/AttendanceConfirmation'
import styles from '../WithThree/WithThree.module.css'
function WithThree({maxGuests}){
//  const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const media = window.matchMedia("(max-width: 600px)");
//     setIsMobile(media.matches); // inicijalna provera

//     const listener = () => setIsMobile(media.matches);
//     media.addEventListener("change", listener);

//     return () => media.removeEventListener("change", listener);
//   }, []);

  // DESKTOP MESSAGE
//   if (!isMobile) {
//     return (
//       <div style={{
//         height: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         fontSize: "32px",
//         fontWeight: "bold",
//         textAlign: "center"
//       }}>
//         OTVORITE POZIVNICU NA TELEFONU
//       </div>
//     );
//   }
    return (
        <>
        <div className={styles.desktopOnly}> OTVORITE POZIVNICU NA TELEFONU</div>
        <div className={styles.mobile}>
            <Landing/>
            <Invite />
            <CountSection/>
            <Calendar/>
            <Restaurant/>
            <PartyProgram/>
            <AttendanceConfirmation maxGuests = {maxGuests}/>
        </div>
        </>
    )
}

export default WithThree