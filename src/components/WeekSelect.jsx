export default function WeekSelect({ setSelectTime, selectTime, setMassInfo}){
    function handleClick(e){
        setMassInfo({"Week": `${e.target.textContent}`, "Time": null })
        setSelectTime(!selectTime)

    }
    return (
        <>
        <nav>
            <button id="mass-date" onClick={(e) => handleClick(e)} > 4th Week of Novemeber</button>
        </nav>
        </>
    )
}