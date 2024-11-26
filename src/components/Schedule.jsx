import Position from "./Position"
import { useEffect, useState } from "react"
import { fetchPositions } from "../services/positionService"
export default function Schedule({ massInfo, user}){
    const [positions, setPositions] = useState(null)
    function submitForm(e){
        e.preventDefault()
        console.log(massInfo.Week, massInfo.Time)

    }

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
                {positions && positions.map((position, index) =>(
                    <li key={index}>
                    <Position title={position.id} slots={position.slots} user={user} massInfo={massInfo}/>
                    </li>
                ))}
                </ul>
            </section>

        </div>
        </>
    )
}