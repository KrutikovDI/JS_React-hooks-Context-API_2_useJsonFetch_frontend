// import { useState } from 'react'
import './App.css'
import { GetRequests } from './Componenrs/GetRequests'

function App() {

  return (
    <>
    <GetRequests url='https://localhost:7070/data'/>
    {/* <GetRequests url='http://localhost:7070/error'/>
    <GetRequests url='http://localhost:7070/loading'/> */}
    </>
  )
}

export default App
