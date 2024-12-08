export default function WeekSelect({ setSelectTime, selectTime, setMassInfo, setDisplaySignUps}){
    function handleClick(e){
        e.preventDefault()
        setMassInfo({"Week": `${e.target.textContent}`, "Time": null })
        setSelectTime(!selectTime)

    }
    return (
        <>
        <nav>
            <button id="mass-date" onClick={(e) => handleClick(e)} >31 Sunday in Ordinary Time</button>
            <button id="mass-date" onClick={() => setDisplaySignUps(true)}> My Sign Ups </button>
        </nav>
        </>
    )
}