import React from 'react'

export const Navigation = () => {
    return (
        <nav>
            <ul className='flex justify-center gap-10'>
                <li><a className='font-bold uppercase text-dm-primary nav-active' href="/">Agents</a></li>
                <li><a className='font-bold uppercase text-dm-primary' href="/">Bundles</a></li>
                <li><a className='font-bold uppercase text-dm-primary' href="/">Kits</a></li>
            </ul>
        </nav>
    )
}
