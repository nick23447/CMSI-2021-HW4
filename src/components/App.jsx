import { useState } from 'react'
import Nav from "./Nav"
import Header from "./Header"
import Scheduler from "./Scheduler"
import './App.css'

function App() {

  return (
    <>
    <div className="App">
    <Header />
    <Nav />
    <Scheduler />

    </div>
    </>
  )
}

export default App
