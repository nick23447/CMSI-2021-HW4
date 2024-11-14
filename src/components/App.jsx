import { useState } from 'react'
import WeekSelect from "./WeekSelect"
import Header from "./Header"
import TimeSelect from "./TimeSelect"
import Schedule from "./Schedule"
import './App.css'

function App() {
const [selectTime, setSelectTime] = useState(false)
const [massInfo, setMassInfo] = useState({Week: null, Time: null})
console.log(massInfo)
  return (
    <>
    <div className="App">
    <Header />
    <WeekSelect setSelectTime={setSelectTime} selectTime={selectTime} setMassInfo={setMassInfo} />
    {selectTime && <TimeSelect setSelectTime={setSelectTime} selectTime={selectTime} massInfo={massInfo} setMassInfo={setMassInfo} />}
    {massInfo.Time && massInfo.Week && <Schedule massInfo={massInfo} /> }
    </div>
    </>
  )
}

export default App
