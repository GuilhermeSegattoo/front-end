import React from 'react';

const SecondComponents = () => {
    const dados = [
        {
            titulo: "Profissão, Linguagens e Frameworks",
            items: [
                "Profissão: Desenvolvedor Full-Stack",
                "Linguagem: JavaScript e TypeScript",
                "Framework: ReactJS e NextJS"
            ]
        },
        {
            titulo: "Hobbies",
            items: [
                "Programar",
                "Cozinhar",
                "Assistir corrida de F1"
            ]
        },
        {
            titulo: "Times",
            items: [
                "Time do Brasil: Vasco",
                "Time da Europa: Hala Madrid",
                "Time de Games: Fúria"
            ]
        },
        {
            titulo: "Pets",
            items: [
                "American Staffordshire Terrier chamado Zeus",
                "Sharpei chamada Zara",
                "American Bully chamado Zion",
                "Husky Siberiano chamada Zury"
            ]
        },
        {
            titulo: "Livros",
            items: [
                "Incrível Mundo de Sofia",
                "Albert Einstein - Como Vejo o Mundo",
                "Código Limpo - Habilidades Práticas do Agile Software"
            ]
        }
    ];

    return (
        <div>
            {dados.map((categoria, index) => (
                <div key={index}>
                    <h2>{categoria.titulo}</h2>
                    <ol>
                        {categoria.items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ol>
                </div>
            ))}
        </div>
    );
};

export default SecondComponents;
