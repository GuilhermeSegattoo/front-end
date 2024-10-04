import React from 'react'

const Componente2 = () => {

    function Filme(props) {
        return <li>O nome do filme é {props.brand}</li>;
    }

    function NomeFilme(){
        const nomeFilmes = [
            {id: 1, brand: "interestelar"},
            {id: 2, brand: "O Diabo veste prada"},
            {id: 3, brand: "Senhor das Armas"}
        ]

        return (
            <div>
                <p>
                    {nomeFilmes.map((filme) => <Filme key={filme.id} brand={filme.brand} />)}
                </p>
            </div>
          )
        
    }

  return (
    <div>
        <NomeFilme/>
    </div>
)

}

export default Componente2