import React from 'react'
import MenuDropdown from './MenuDropdown'

export default function NavBar() {
    return (
        <div className='navDiv'>
            <span>Alex Kalinins</span>
            <span>Portfolio `21</span>
            <MenuDropdown/>
        </div>
    )
}
