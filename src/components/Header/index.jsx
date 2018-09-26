import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <div id='brand'>
                <Link to='/'>Arena</Link>
            </div>
            <div id='persona'></div>
        </div>
    )
}