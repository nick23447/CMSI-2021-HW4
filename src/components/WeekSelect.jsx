export default function WeekSelect({ setSelectTime, selectTime, setMassInfo, setDisplaySignUps, setIsAudioVisible}){
    function handleClick(e){
        e.preventDefault()
        setMassInfo({"Week": `${e.target.textContent}`, "Time": null })
        setSelectTime(!selectTime)
        setIsAudioVisible((prev) => !prev);
        setDisplaySignUps(false);
    }
    return (
        <>
        <nav>
            <button id="mass-date" onClick={(e) => handleClick(e)} >31 Sunday in Ordinary Time</button>
            <button id="mass-date" onClick={() => 
                {setDisplaySignUps(true); 
                setIsAudioVisible((prev) => !prev);
            }}> 
              My Sign Ups 
            </button>
        </nav>
        </>
    )
}