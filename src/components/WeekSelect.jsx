export default function WeekSelect({ setSelectTime, selectTime, setMassInfo, setDisplaySignUps, setIsAudioVisible}){
    function handleClick(e){
        e.preventDefault()
        setMassInfo({"Week": `${e.target.textContent}`, "Time": null })
        setSelectTime(!selectTime)
        setDisplaySignUps(false);
        setIsAudioVisible(false);
    }
    return (
        <>
        <nav>
            <button id="mass-date" onClick={(e) => handleClick(e)} >31 Sunday in Ordinary Time</button>
            <button id="mass-date" onClick={() => {
                setDisplaySignUps(true); 
                setIsAudioVisible(false);
                setMassInfo(false);
                setSelectTime(false);
            }}> 
              My Sign Ups 
            </button>
        </nav>
        </>
    )
}