import { useState } from 'react'
import WeekSelect from "./WeekSelect"
import Header from "./Header"
import TimeSelect from "./TimeSelect"
import Schedule from "./Schedule"
import './App.css'
import { useAuthentication } from "../services/authService"

function App() {
const [selectTime, setSelectTime] = useState(false)
const [massInfo, setMassInfo] = useState({Week: null, Time: null})
const user = useAuthentication()

console.log(massInfo)
  return (
    <>
    <div className="App">
    <Header />
    <WeekSelect setSelectTime={setSelectTime} selectTime={selectTime} setMassInfo={setMassInfo} />
    {selectTime && <TimeSelect setSelectTime={setSelectTime} selectTime={selectTime} massInfo={massInfo} setMassInfo={setMassInfo} />}
    {massInfo.Time && massInfo.Week && <Schedule massInfo={massInfo} user={user}/> }
    </div>
    </>
  )
}

export default App
