import { signUpPosition } from "../services/positionService"
import { loggedInUserDisplayName } from "../services/authService"
export default function ApprovePosition({ title, slots, user, massInfo}){
    function approve(){

    }
    const maxSpots = {"Acolytes": 4, "Eucharistic Ministers": 3, "Lectors": 3}

    return(
    
        <>
        <div className="approve-position">
            <h3> {title} </h3>
            <h4> There are currently {slots.length}/{maxSpots[title]} Positions Filed</h4>
            <ul>
            {slots.map((name, index) => (
                <li key={index}>
                    <p className="name"> {name} </p>
                </li>
            ))}
            </ul>
        </div>
        
        </>
    )
}