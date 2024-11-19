export default function WeekSelect({ setSelectTime, selectTime, setMassInfo}){
    function handleClick(e){
        setMassInfo({"Week": `${e.target.textContent}`, "Time": null })
        setSelectTime(!selectTime)

    }
    return (
        <>
        <nav>
            <button id="mass-date" onClick={(e) => handleClick(e)} > 31st Sunday in Ordinary Time</button>
        </nav>
        </>
    )
}