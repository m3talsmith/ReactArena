import React from 'react'

const notImplemented = <div>Not Implemented</div>

export function CharacterList(props) {
    let { characters } = props
    let ids = Object.keys(characters)

    let renderedCharacters = ids.map(id => {
        let character = characters[id]
        return (
            <div key={id} className='character'>{character["name"]}</div>
        )
    })
    return <div>{renderedCharacters}</div>
}

export function CharacterView() { return notImplemented }
export function CharacterEdit() { return notImplemented }