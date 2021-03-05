import { handleActions } from 'redux-actions';

import * as actions from '../actions';

const defaultState = {
    countValue: 0,
    isEven: true
};

const counterPage = handleActions({

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

    [actions.CHECK_PARITY_TYPE]: (state) => {
        const isEven = state.countValue % 2 === 0;
        return {
            ...state,
           isEven
        }
    },
}, defaultState);

export default counterPage;