import {combineReducers} from 'redux';
import LoginReducer from '../screens/login/redux/reducer';
import RegisterReducer from '../screens/register/redux/reducer';
import reducerGlobal from './reducerGlobal'

export const allReducers = combineReducers({
    login: LoginReducer,
    register: RegisterReducer,
    // reducer: reducerGlobal,
});