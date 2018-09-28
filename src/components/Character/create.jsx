import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { withFirebase } from 'react-redux-firebase'

class CharacterCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            attributes: {
                attack: this.roll(),
                defense: this.roll()
            }
        }
    }
    roll() {
        return Math.floor((Math.random() * (20 - 11)) + 12)
    }
    generateAttributes() {
        let attributes = {
            attack: this.roll(),
            defense: this.roll()
        }
        this.setState({ ...this.state, attributes })
    }
    changeNameHandler(event) {
        let name = event.target.value
        this.setState({ ...this.state, name })
    }
    render() {
        let { createCharacterHandler, isSaved } = this.props
        let generateHandler = this.generateAttributes.bind(this)

        if (isSaved) {
            return <Redirect to='/characters' />
        } else {
            return (
                <div>
                    <form>
                        <fieldset name='Who are you'>
                            <label htmlFor='name' >Name</label>
                            <input id='name' type='text' ref='name' onChange={this.changeNameHandler.bind(this)} value={this.state.name} />
                        </fieldset>
                        <fieldset name='attributes'>
                            <div>
                                <label>Attack</label>
                                <span>{this.state.attributes.attack}</span>
                            </div>
                            <div>
                                <label>Defense</label>
                                <span>{this.state.attributes.defense}</span>
                            </div>
                        </fieldset>
                    </form>
                    <button onClick={generateHandler}>Generate Attributes</button>
                    <button onClick={() => createCharacterHandler(this.state)}>Create Character</button>
                    {/* <button onClick={() => firebase.push('characters', this.state)}>Create Character</button> */}
                </div >
            )
        }
    }
}
export default withFirebase(CharacterCreate)