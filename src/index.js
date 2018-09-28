import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, compose } from 'redux'
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import firebase from 'firebase'

import './index.css'
import registerServiceWorker from './registerServiceWorker'

import { config as firebaseConfig } from './firebaseconfig.js'
import App from './containers/App'
import appReducers from './reducers'

// const store = createStore(appReducers)

const rrfConfig = {
    userProfile: 'users'
}

firebase.initializeApp(firebaseConfig)
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig)
)(createStore)

const initialState = {}
const store = createStoreWithFirebase(appReducers, initialState)

ReactDOM.render(<App store={store} />, document.getElementById('root'))
registerServiceWorker()
