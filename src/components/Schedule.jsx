import Position from "./Position"
export default function Schedule({ massInfo }){
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
                <button onClick={(e) => submitForm(e)}> Submit Position</button>
            </section>

        </div>
        </>
    )
}