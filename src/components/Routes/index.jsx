import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import { Provider } from 'react-redux'

import Header from '../Header'
import Sidebar from '../Sidebar'
import Home from '../Home'
import {
    CharacterList,
    CharacterView
} from '../Character'
import CharacterCreate from '../Character/create'

import {
    BattleList
} from '../Battle'

export default function Routes(props) {
    let { store, characterReducer, characterActions } = props
    let { isSaved } = characterReducer
    console.log(props)
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Header />
                    <Sidebar />
                    <div id='body'>
                        <Switch>
                            <Route path='/' exact component={Home} />
                            <Route path='/characters' exact render={() => <CharacterList {...characterReducer} />} />
                            <Route path='/characters/create' render={() => <CharacterCreate {...characterActions} isSaved={isSaved} />} />
                            <Route path='/characters/:id' component={CharacterView} />
                            <Route path='/battles' exact component={BattleList} />
                        </Switch>
                    </div>
                </div>
            </Router>
        </Provider >
    )
}