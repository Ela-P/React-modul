import { useHistory } from 'react-router-dom';
import { useState, useCallback } from "react";


import Counter from '../components/Counter/index';


const CounterPageContainer = () => {
    const history = useHistory();

    const [countValue, setValue] = useState(0);

    const handleIncrement = useCallback( () => {
        setValue((state) => state + 1);
    }, []);

    const handleDecrement = useCallback( () => {
        setValue((state) => state - 1);
    }, []);

    const handleGoBack = () => {
        history.pop();
    }

return (
        <Counter handleGoBack={handleGoBack} countValue={countValue} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
    ); 
};

export default CounterPageContainer;      