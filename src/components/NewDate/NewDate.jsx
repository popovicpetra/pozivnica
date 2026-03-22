import { useEffect, useState } from "react";
import Calendar from '../Calendar/Calendar'
import CountSection from '../CountSection/CountSection'
import Invite from '../Invite/Invite'
import Landing from '../Landing/Landing'
import PartyProgram from '../PartyProgram/PartyProgram'
import Restaurant from '../Restaurant/Restaurant'
import styles from '../WithThree/WithThree.module.css'
import NewConfirmation from "../NewConfirmation/NewConfirmation"

function NewDate({maxGuests}){

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
            <NewConfirmation maxGuests = {maxGuests}/>
        </div>
        </>
    )
}

export default NewDate