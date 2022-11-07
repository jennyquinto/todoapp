import React, { useState } from 'react';
import './style.scss'

const Counter = () => {
     const [number, setNumber] = useState(0);

     const handleNumber = (operation) => {
        if (operation === 'minus') {
            if (number > 0) {
                setNumber(number - 1)

            }
        }else {
            setNumber(number + 1)
        }

     }
    return (
        <>
            <h3>Contador</h3>
            <div className='div__contador'>
                <button onClick={() => {handleNumber('minus')}}>-</button>
                <span>{number}</span>
                <button onClick={() => {handleNumber('plus')}}>+</button>
            </div>
        </>
    )
};

export default Counter;