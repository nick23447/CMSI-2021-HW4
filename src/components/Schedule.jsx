import Position from "./Position"
import {login} from "../services/authService"
export default function Schedule({ massInfo, user}){
    function submitForm(e){
        e.preventDefault()
        console.log(massInfo.Week, massInfo.Time)

    }
    return(
        <>
        <div classname="schedule">
            <h3> Sunday Mass for the {massInfo.Week} at {massInfo.Time}</h3>
            <section className="liturgy-positions">
                <Position massInfo={massInfo} />
                {user ? <button onClick={(e) => submitForm(e)}> Submit Position</button>: <p onClick={login}> pls login </p>}
            </section>

        </div>
        </>
    )
}