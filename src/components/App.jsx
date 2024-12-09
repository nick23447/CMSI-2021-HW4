import { useEffect, useState } from 'react'
import WeekSelect from "./WeekSelect"
import Header from "./Header"
import TimeSelect from "./TimeSelect"
import Schedule from "./Schedule"
import './App.css'
import { useAuthentication } from "../services/authService"
function App() {
const [selectTime, setSelectTime] = useState(false)
const [massInfo, setMassInfo] = useState({Week: null, Time: null})
const [mysteryType, setDailyMystery] = useState(null);
const user = useAuthentication()
const userManagers = new Set(["Lgrf94F3rLcogvxEMVhpw5mIMc83", "0"])
const API_URL = "https://the-rosary-api.vercel.app/v1/today";

useEffect(() => {
  fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return response.json();
    })
    .then((data) => {
      console.log("API Response:", data[0]);
      console.log("API ID:", data[0].id);
      console.log("API MP3 link:", data[0].mp3Link);

      if (data.length > 0 && data[0].mp3Link) {
        setDailyMystery(data[0].mystery);
      } else {
        console.error("No audio available today or mp3Link is missing.");
      }
    })
    .catch((err) => {
      console.error("Error fetching rosary data:", err);
    });
}, []);

useEffect(() => {
  console.log("audioLink state updated:", mysteryType);
}, [mysteryType]);


// Christian Ruiz: Lgrf94F3rLcogvxEMVhpw5mIMc83
console.log(massInfo)
  return (
    <>
    <div className="App">
    <Header  user={user}/>
    <WeekSelect setSelectTime={setSelectTime} selectTime={selectTime} setMassInfo={setMassInfo} />
    {selectTime && <TimeSelect setSelectTime={setSelectTime} selectTime={selectTime} massInfo={massInfo} setMassInfo={setMassInfo} />}
    {massInfo.Time && massInfo.Week && <Schedule massInfo={massInfo} user={user} managers={userManagers}/> }
    {mysteryType && (
      <div>
      <h2>Daily Rosary Prayer</h2>
      <audio controls>
        <source src={`/rosary_audio/audio-rosary-${mysteryType?.toLowerCase()}-mysteries.mp3`} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
    )}
    </div>
    </>
  )
}

export default App
