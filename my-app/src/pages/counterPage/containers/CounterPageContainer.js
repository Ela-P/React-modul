
import React, { useEffect, useCallback } from "react";

import { useDispatch, useSelector } from 'react-redux';
import { INCREMENT_COUNTER_VALUE, DECREMENT_COUNTER_VALUE, CHECK_PARITY_TYPE } from '../actions';

import Counter from '../components/Counter/index';


const CounterPageContainer = ({history}) => {
 

    const dispatch = useDispatch();

    const { countValue, isEven } = useSelector((state) => state.counterPage);
    
  

    const handleIncrement = useCallback( () => {
        dispatch(INCREMENT_COUNTER_VALUE());
    }, [dispatch]);

    const handleDecrement = useCallback( () => {
        dispatch(DECREMENT_COUNTER_VALUE());
    }, [dispatch]);

      useEffect( () => {
           dispatch(CHECK_PARITY_TYPE());
    }, [dispatch, countValue]);

    const handleGoBack = () => {
       history.pop();
    }

return (
        <Counter 
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        countValue={countValue}
        isEven={isEven}
        handleGoBack={handleGoBack}       
        />
    ); 
};

export default CounterPageContainer;  