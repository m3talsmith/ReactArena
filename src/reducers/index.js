import { combineReducers } from 'redux'
import characterReducer from './characters'
import battleReducer from './battles'
import { firebaseReducer } from 'react-redux-firebase'

const appReducers = combineReducers({
    characterReducer,
    battleReducer,
    firebase: firebaseReducer
})

export default appReducers