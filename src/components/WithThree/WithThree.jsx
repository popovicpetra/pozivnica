
import Calendar from '../Calendar/Calendar'
import CountSection from '../CountSection/CountSection'
import Invite from '../Invite/Invite'
import Landing from '../Landing/Landing'
import PartyProgram from '../PartyProgram/PartyProgram'
import Restaurant from '../Restaurant/Restaurant'
import AttendanceConfirmation from '../AttendanceConfirmation/AttendanceConfirmation'
function WithThree(){

    return (
        <>
            <Landing/>
            <Invite />
            <CountSection/>
            <Calendar/>
            <Restaurant/>
            <PartyProgram/>
            <AttendanceConfirmation/>
        </>
    )
}

export default WithThree