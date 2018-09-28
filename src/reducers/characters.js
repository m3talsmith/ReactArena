import {
    CREATE_CHARACTER,
    CREATE_CHARACTER_COMPLETE
} from '../actions/characters'

const defaultState = {
    characters: {
        "fwefg2t3qfs": {
            "name": "bludgener",
            "abilities": {
                "defense": 3,
                "attack": 30
            }
        },
        "fwefg2tdsad": {
            "name": "the wall",
            "abilities": {
                "defense": 35,
                "attack": 4
            }
        }
    }
}

export default function characterReducer(currentState = defaultState, action) {
    switch (action.type) {
        case (CREATE_CHARACTER_COMPLETE):
            let character = action.payload
            let characters = currentState.characters || {}
            characters[`${Date.now()}`] = character
            return { ...currentState, characters, isSaved: true }
        default:
            return currentState
    }
}