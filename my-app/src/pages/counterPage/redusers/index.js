import { handleActions } from 'redux-actions';

import * as actions from '../actions';

const defaultState = {
    countValue: 0,
    isEven: true
};

const counterReducer = handleActions({
    [actions.INCREMENT_COUNTER_VALUE]: (state) => {
        const incrementValue = state.countValue + 1;
        return {
            ...state,
            countValue: incrementValue
        }
    },
    [actions.DECREMENT_COUNTER_VALUE]: (state) => {
        const decrementValue = state.countValue - 1;
        return {
            ...state,
            countValue: decrementValue
        }
    },
}, defaultState);

export default counterReducer;