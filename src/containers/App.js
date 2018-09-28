import { connect } from 'react-redux'

import Routes from '../components/Routes'

import { createCharacter } from '../actions/characters'

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => {
    return {
        characterActions: {
            createCharacterHandler: character => dispatch(createCharacter(character, dispatch))
        }
    }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Routes)
export default App