import SignUpPosition from "./SignUpPosition"
import ApprovePosition from "./ApprovePosition"
import { useEffect, useState } from "react"
import { fetchPositions } from "../services/positionService"
import { loggedInUserId } from "../services/authService"
export default function Schedule({ massInfo, user, managers}){
    const [positions, setPositions] = useState(null)
    const isManager = (managers.has(loggedInUserId().toString()) )

    useEffect(() => {
        fetchPositions(massInfo).then(setPositions)
    },[massInfo])
    return(
        <>
        <div className={`schedule ${isManager ? "manager-view" : "user-view"}`}>
            <h3> Sunday Mass for the {massInfo.Week} at {massInfo.Time}</h3>
            <section className="liturgy-positions">
                <ul>
                {!isManager && positions && positions.map((position, index) =>(
                    <li key={index}>
                        <SignUpPosition title={position.id} slots={position.slots} massInfo={massInfo}/>
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