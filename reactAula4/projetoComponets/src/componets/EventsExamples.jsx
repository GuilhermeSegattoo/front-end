import React, { useState } from 'react';

const EventExamples = () => {
  // Estados para os valores e controles de eventos
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Função chamada quando o botão é clicado
  const handleClick = () => {
    alert("Botão clicado!");
  };

  // Função chamada quando o valor do input muda
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // Função chamada quando uma tecla é pressionada no input
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      alert("Enter foi pressionado");
    }
  };

  // Função chamada quando o input ganha foco
  const handleFocus = () => {
    setIsFocused(true);
  };

  // Função chamada quando o input perde o foco
  const handleBlur = () => {
    setIsFocused(false);
  };

  // Função chamada quando o formulário é enviado
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão de envio do formulário
    setSubmitMessage("Formulário enviado com sucesso!");
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Exemplo de Eventos no React</h2>
      
      {/* onClick */}
      <button onClick={handleClick}>
        Clique Aqui (onClick)
      </button>
      
      {/* onChange, onKeyDown, onFocus, onBlur */}
      <div style={{ marginTop: '20px' }}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Digite algo ou pressione Enter"
          style={{
            padding: '10px',
            border: isFocused ? '2px solid blue' : '1px solid gray',
          }}
        />
      </div>
      <p>Valor do input: {inputValue}</p>
      <p>{isFocused ? "O input está focado" : "O input não está focado"}</p>

      {/* onSubmit */}
      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <button type="submit">Enviar Formulário (onSubmit)</button>
      </form>
      {submitMessage && <p>{submitMessage}</p>}
    </div>
  );
}

export default EventExamples;
