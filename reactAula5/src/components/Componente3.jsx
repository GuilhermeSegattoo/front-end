import React from 'react'

const Componente3 = () => {

    function Jogos(props) {
        return <li>O nome do jogo é {props.brand}</li>;
    }

    function NomeJogo(){
        const nomeJogos = [
            {id: 1, brand: "GTA"},
            {id: 2, brand: "Valorant"},
            {id: 3, brand: "Fifa"}
        ]

        return (
            <div>
                <p>
                    {nomeJogos.map((jogo) => <Jogos key={jogo.id} brand={jogo.brand} />)}
                </p>
            </div>
          )
        
    }

  return (
    <div>
        <NomeJogo/>
    </div>
)

}

export default Componente3