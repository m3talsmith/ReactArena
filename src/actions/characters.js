import firebase from 'firebase'

export const CREATE_CHARACTER = "CREATE_CHARACTER"
export const CREATE_CHARACTER_COMPLETE = "CREATE_CHARACTER_COMPLETE"
export const UPDATE_CHARACTER = "UPDATE_CHARACTER"
export const DELETE_CHARACTER = "DELETE_CHARACTER"

export function createCharacter(character, dispatch) {
    console.log(dispatch)
    firebase.database().ref('characters').push(character, (error) => {
        if (error) {
            dispatch({
                type: CREATE_CHARACTER_COMPLETE,
                payload: character,
                error
            })
        } else {
            dispatch({
                type: CREATE_CHARACTER_COMPLETE,
                payload: character
            })
        }
    })
    return {
        type: CREATE_CHARACTER
    }
}
export function updateCharacter(id, character) { }
export function deleteCharacter(id) { }