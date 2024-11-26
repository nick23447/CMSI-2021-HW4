import { signUpPosition } from "../services/positionService"
import { loggedInUserDisplayName } from "../services/authService"
export default function Position({ title, slots, user, massInfo}){
    function signUp(){
        console.log(`${loggedInUserDisplayName()}`,"user wants to sign up!")
        signUpPosition(`${loggedInUserDisplayName()}`, user, massInfo, title, slots)
    }
    const maxSpots = {"Acolytes": 4, "EucharisticMinisters": 3, "Lectors": 3}
    return(
    
        <>
        <div className="position">
            <h3> {title} </h3>
            <h4> There are currently {slots.length}/{maxSpots[title]} Positions Filed</h4>
            <button onClick={() => signUp()} id="sign-up"> Sign up for this position</button>

            

        </div>
        
        </>
    )
}