import React from 'react'
import { Link } from 'react-router-dom'

import Stream from '../Stream'

export default function Sidebar() {
    return (
        <div id='sidebar'>
            <ul id='links'>
                <li><Link to='/characters'>Characters</Link></li>
                <li><Link to='/battles'>Battles</Link></li>
            </ul>
            <Stream />
        </div>
    )
}