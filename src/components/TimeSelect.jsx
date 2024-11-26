export default function Scheduler({ selectTime, setSelectTime, massInfo, setMassInfo }){
    console.log(selectTime)
    function handleClick(e){
        e.preventDefault()
        setMassInfo({Week: massInfo.Week, Time: `${e.target.textContent}`})
        setSelectTime(!selectTime)

    }
    return(
        <>
        <div className="time-select">      
            <section id="mass-times"> 
                <h3>{massInfo.Week}</h3>
                <h3> Select a Mass Time</h3>
                <button onClick={(e) => handleClick(e)}>10AM</button>
                <button onClick={(e) => handleClick(e)}>8PM</button>
                <button onClick={(e) => handleClick(e)}>9:30PM</button>
            </section>
        </div>
        </>
    )
}