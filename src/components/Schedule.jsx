import SignUpPosition from "./SignUpPosition"
import ApprovePosition from "./ApprovePosition"
import { useEffect, useState } from "react"
import { fetchPositions } from "../services/positionService"
import { loggedInUserId } from "../services/authService"
export default function Schedule({ massInfo, user, managers}){
    const [positions, setPositions] = useState(null)
    const isManager = (managers.has(loggedInUserId().toString()) )
    console.log(isManager, `${loggedInUserId()}` )

    useEffect(() => {
        fetchPositions(massInfo).then(setPositions)
    },[massInfo])
    console.log(positions)
    return(
        <>
        <div className="schedule">
            <h3> Sunday Mass for the {massInfo.Week} at {massInfo.Time}</h3>
            <section className="liturgy-positions">
                <ul>
                {!isManager && positions && positions.map((position, index) =>(
                    <li key={index}>
                        <SignUpPosition title={position.id} slots={position.slots} user={user} massInfo={massInfo}/>
                    </li>
                ))}

                {isManager && positions && positions.map((position, index) =>(
                    <li key={index}>
                        <ApprovePosition title={position.id} slots={position.slots} user={user} massInfo={massInfo}/>
                    </li>
                ))
                }
                </ul>
            {isManager && <p> you are a manager ! :D</p>}
            </section>

        </div>
        </>
    )
}