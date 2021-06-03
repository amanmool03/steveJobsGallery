import React from 'react';
import '../navbar/navbar.scss'

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='logo'>Apple</div>
            <div className='nav'>
                <ul>
                    <li>Intro</li>
                    <li>About</li>
                    <li>Feature</li>
                </ul>
            </div>
        </div>
    )
}
