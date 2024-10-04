import React from 'react'



const FormComponente1 = () => {

    function MyForm() {
        return (
          <form>
            <label>Enter your name:
              <input type="text" />
            </label>
          </form>
        )
      }

  return (
    <div><MyForm/></div>
  )
}

export default FormComponente1