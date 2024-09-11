import React, { useState } from 'react';

const FocusBlurExample = () => {
  // Estado para controlar se o input está focado
  const [isFocused, setIsFocused] = useState(false);
  
  // Estado para controlar o valor digitado no input
  const [inputValue, setInputValue] = useState('');

  // Função chamada quando o input ganha foco
  const handleFocus = () => {
    setIsFocused(true); // Atualiza o estado indicando que o input está focado
  };

  // Função chamada quando o input perde o foco
  const handleBlur = () => {
    setIsFocused(false); // Atualiza o estado indicando que o input perdeu o foco
  };

  // Função chamada quando o valor do input é alterado
  const handleChange = (e) => {
    setInputValue(e.target.value); // Atualiza o estado com o novo valor digitado
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Exemplo de onFocus e onBlur no React</h2>
      
      {/* Campo de texto com eventos de foco (onFocus) e perda de foco (onBlur) */}
      <input
        type="text"
        value={inputValue} // O valor do input é controlado pelo estado inputValue
        onFocus={handleFocus} // Quando o input ganha foco, handleFocus é chamado
        onBlur={handleBlur} // Quando o input perde o foco, handleBlur é chamado
        onChange={handleChange} // Quando o valor do input muda, handleChange é chamado
        placeholder="Clique ou use tab para focar"
        style={{
          padding: '10px',
          fontSize: '16px',
          border: isFocused ? '2px solid green' : '1px solid gray', // Altera a borda com base no estado de foco
        }}
      />

      <div style={{ marginTop: '20px' }}>
        {/* Mensagem condicional exibida com base no estado isFocused */}
        {isFocused ? <p>O input está focado!</p> : <p>O input não está focado.</p>}
      </div>

      {/* Exibe o valor atual digitado no input */}
      <p>Valor do input: {inputValue}</p>
    </div>
  );
};

export default FocusBlurExample;
