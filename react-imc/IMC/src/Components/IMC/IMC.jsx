import './IMC.css';
import React, { useState } from 'react';

const IMC = () => {
    const [altura, setAltura] = useState("");
    const [peso, setPeso] = useState("");
    const [resultadoIMC, setResultadoIMC] = useState(null);
    const [classificacao, setClassificacao] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const imc = (peso / ((altura / 100) ** 2)).toFixed(2);
        setResultadoIMC(imc);
        classificarIMC(imc);
    };

    const classificarIMC = (imc) => {
        if (imc < 18.5) {
            setClassificacao("Abaixo do peso");
        } else if (imc >= 18.5 && imc < 24.9) {
            setClassificacao("Peso normal");
        } else if (imc >= 25 && imc < 29.9) {
            setClassificacao("Sobrepeso");
        } else if (imc >= 30 && imc < 34.9) {
            setClassificacao("Obesidade Grau I");
        } else if (imc >= 35 && imc < 39.9) {
            setClassificacao("Obesidade Grau II");
        } else if (imc >= 40) {
            setClassificacao("Obesidade Grau III");
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Calcule o seu IMC</h1>
                <div className='input-field'>
                    <h3>Altura:</h3>
                    <input
                        onChange={(e) => setAltura(e.target.value)}
                        type="Number"
                        placeholder='Digite sua altura em (cm)'
                        required
                    ></input>
                </div>
                <div className='input-field'>
                    <h3>Peso:</h3>
                    <input
                        onChange={(e) => setPeso(e.target.value)}
                        type="Number"
                        placeholder='Digite seu peso (Kg)'
                        required
                    ></input>
                </div>

                <button type="submit">Calcular</button>
            </form>

            {resultadoIMC && (
                <div className="resultado">
                    <h2>Seu IMC é: {resultadoIMC}</h2>
                    <h3>Classificação: <p className='classificacao'>{classificacao}</p></h3>
                </div>
            )}
        </div>
    );
}

export default IMC;
