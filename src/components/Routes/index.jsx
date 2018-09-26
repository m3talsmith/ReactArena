import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import Header from '../Header'
import Sidebar from '../Sidebar'
import Home from '../Home'
import {
    CharacterList,
    CharacterCreate,
    CharacterView
} from '../Character'
import {
    BattleList
} from '../Battle'
// import Battle from '../Battle'

export default function Routes(props) {
    return (
        <Router>
            <div>
                <Header />
                <Sidebar />
                <div id='body'>
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/characters' exact component={CharacterList} />
                        <Route path='/characters/create' component={CharacterCreate} />
                        <Route path='/characters/:id' component={CharacterView} />
                        <Route path='/battles' exact component={BattleList} />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}