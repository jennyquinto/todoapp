import React from 'react';
import Counter from './counter/Counter';
import Header from './header/Header'

const App = () => {
    const fruitList = ['Papalla', 'Guayaba Agria'];
    const userList = [
        {
            name: 'Jenny Quinto',
            age: 31
        },
        {
            name: 'Vanessa Córdoba',
            age: 19
        }
    ]
    return (
        <>
            <h1>Hola Mundo</h1>
            <Header
                fruitList={fruitList}
                userList={userList}
            />
            <Counter />
        </>
    )

}

export default App;
