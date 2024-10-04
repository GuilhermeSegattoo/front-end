import React from 'react'
import { useState } from 'react';

const FormComponent6 = () => {

    function MyForm() {
        const [myCar, setMyCar] = useState("Volvo");
      
        const handleChange = (event) => {
          setMyCar(event.target.value)
        }
      
        return (
          <form>
            <select value={myCar} onChange={handleChange}>
              <option value="Ford">Mobi</option>
              <option value="Volvo">Volvo</option>
              <option value="Fiat">Hillux</option>
            </select>
          </form>
        )
      }
      
      
    
    return (
    <div><MyForm/></div>
  )
}

export default FormComponent6