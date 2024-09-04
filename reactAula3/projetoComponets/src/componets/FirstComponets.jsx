import React from 'react'

const FirstComponets = () => {
    const dados = {
      nome: "Guilherme Segatto",
      matricula: 2314290094,
      professor: "Felipe Batista da Silva",
      materia: "Front-end"
    }
  return (
    <div>
        <h2>Sobre mim</h2>
        <p>Olá meu nome é {dados.nome} e minha matricula é {dados.matricula}</p>
        <p>Aluno do professor {dados.professor} da disciplina {dados.materia}.</p>
    </div>
  )
}

export default FirstComponets;
