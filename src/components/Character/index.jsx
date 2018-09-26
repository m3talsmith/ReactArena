import React, { Component } from 'react'

const notImplemented = <div>Not Implemented</div>
export function CharacterList() { return notImplemented }
export function CharacterView() { return notImplemented }
export function CharacterEdit() { return notImplemented }

export class CharacterCreate extends Component {
    render() {
        console.log('char create')
        return (
            <div>
                <form>
                    <input type='text' ref='name' />
                </form>
            </div >
        )
    }
}