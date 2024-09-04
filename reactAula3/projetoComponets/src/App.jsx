import { useState } from 'react'
import './App.css'
import FirstComponets from './componets/FirstComponets'
import ThirdComponents from './componets/ThirdComponents'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="App"></div>
     <h1>Informações pessoais</h1>
    <ThirdComponents></ThirdComponents>
    </>
  )
}

export default App
