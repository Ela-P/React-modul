import React from 'react';
import '../counter/Style.css';

const Counter = ({ counterValue, type , handleAdd, handleRemove}) => {
    return (
        <div className='counter'>
            <div className='counterView'>
                <div className='counterValue'> {counterValue}</div>
                <div className='counterType'> Введено {type} число</div>
                </div>
                 <div className='counterBut'>
            <button onClick={handleRemove}>-</button>
            <button>Rest</button>
            <button onClick={handleAdd}>+</button>
            </div>
        </div>
     );
};

export default Counter;