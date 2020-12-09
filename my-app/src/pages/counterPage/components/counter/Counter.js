import React from 'react';

const Counter = ({ counterValue, type , handleAdd, handleRemove}) => {
    return (
        <div className='counter'>
            <div > {counterValue}</div>
            <div> {type}</div>
            <div>
            <button onClick={handleRemove}>-</button>
            <button>Rest</button>
            <button onClick={handleAdd}>+</button>
            </div>
        </div>
     );
};

export default Counter;