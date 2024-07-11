// import { useState } from 'react'
import './App.css'
import { GetRequests } from './Componenrs/GetRequests'

function App() {

  return (
    <>
    <GetRequests url='http://localhost:7071/data'/>
    <GetRequests url='http://localhost:7071/error'/>
    <GetRequests url='http://localhost:7071/loading'/>
    </>
  )
}

export default App
