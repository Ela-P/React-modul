import { combineReducers } from 'redux';

import counterReducer from "../pages/counterPage/redusers";






const rootReducer = combineReducers({counterReducer});

export default rootReducer;