import React from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import CharacterList from '../CharacterList'

export default function Routes(props) {
    return (
        <Router>
            <Route name="CharacterList" exact path="/" component={CharacterList} />
        </Router>
    )
}