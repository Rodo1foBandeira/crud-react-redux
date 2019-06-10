import {createStore, combineReducers} from 'redux';
import usuario from './usuario'

const store = createStore(
    combineReducers({
        usuario
    })
);

export default store;