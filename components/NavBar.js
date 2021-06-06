import React from 'react'
import MenuDropdown from './MenuDropdown'
import Link from 'next/link'

export default function NavBar({pageTitle}) {
    return (
        <div className='navDiv'>
            <Link href="/"><span className="growLink">Alex Kalinins</span></Link>
            <span>{pageTitle}</span>
            <MenuDropdown/>
        </div>
    )
}
