import React from 'react'
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
    const navStyles = `text-primary-light font-bold text-2xl`;

    return (
        <nav>
            <ul className='flex justify-center gap-10 py-6'>
                <li><NavLink to="/" className={navStyles}>Agents</NavLink></li>
                <li><NavLink to="/bundles" className={navStyles}>Bundles</NavLink></li>
                <li><NavLink to="/kits" className={navStyles}>Kits</NavLink></li>
            </ul >
        </nav>
    )
}
