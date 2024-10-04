import { useState } from 'react'
import './App.css'
import Componente1 from './components/Componente1'
import Componente2 from './components/Componente2'
import Componente3 from './components/Componente3'
import FormComponente1 from './components/FormComponent'
import FormComponente2 from './components/FormComponent2'
import FormComponente3 from './components/FormComponent3'
import FormComponente4 from './components/FormComponent4'
import FormComponente5 from './components/formComponent5'
import Formcomponente6 from './components/FormComponent6'
import FormComponente7 from './components/FormComponent7'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Componente1/>
      <Componente2/>
      <Componente3/>
      <FormComponente2/>
      <FormComponente3/>
      <FormComponente4/> 
      <FormComponente5/>
      <Formcomponente6/>
      <FormComponente7/>
    </div>
  )
}

export default App
