import React from 'react'

const Componente1 = () => {
    function Car(props) {
        return <li>Eu sou um {props.brand}</li>;
    }

    function Garage() {
        const cars = [
            { id: 1, brand: 'Volvo' },
            { id: 2, brand: 'Mobi' },
            { id: 3, brand: 'Hillux' }
        ];
        return (
            <>
                <h1>Quem vive na minha garagem?</h1>
                <ul>
                    {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
                </ul>
            </>
        );
    }

    return (
        <div>
            <Garage/>
        </div>
    )
}



export default Componente1