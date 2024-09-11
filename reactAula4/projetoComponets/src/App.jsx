import { useState } from 'react'
import './App.css'
import FocusBlurExample from './componets/FocusBlurExample'
import Functions from './componets/functions'
import EventExamples from './componets/EventsExamples'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <FocusBlurExample></FocusBlurExample>
    <hr />
    <Functions></Functions>
    <hr />
    <EventExamples></EventExamples>
    </>
  )
}

export default App
