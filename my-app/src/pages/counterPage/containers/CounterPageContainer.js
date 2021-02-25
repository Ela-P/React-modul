import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from "react";


import Counter from '../components/Counter/index';


const CounterPageContainer = () => {
   const history = useHistory();

    const [counterState, setCounterState] = useState({
        countValue: 0,
        isEven: true,
    });

    useEffect( () => {
        const isEven = counterState.countValue % 2 === 0;


        setCounterState(state => {
            return {
                ...state,
                isEven,
            };
        });
    }, [counterState.countValue]);

    const handleIncrement = () => {
        setCounterState((state) => {
            return { 
                countValue: state.countValue  + 1,
        };
    });
};
    const handleDecrement = () => {
        setCounterState((state) => {
            return { 
                countValue: state.countValue  - 1,
        };
    });
};

    const handleGoBack = () => {
        history.pop();
    }


return (
        <Counter handleGoBack={handleGoBack}
        handleDecrement={handleDecrement}
        countValue={counterState.countValue}
        handleIncrement={handleIncrement}
        isEven={counterState.isEven} />
    ); 
};

export default CounterPageContainer;      