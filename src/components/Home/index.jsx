import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <div>
                <Link to='/characters/create'>Create a Character</Link>
            </div>
            <div>
                <Link to='/battles/start'>Start a Battle</Link>
            </div>
            <div>
                <Link to='/battles/join'>Join a Battle</Link>
            </div>
        </div>
    )
}