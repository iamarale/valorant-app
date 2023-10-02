import React from 'react'

export const Navigation = () => {
    const navStyles = `font-bold text-2xl text-primary opacity-50`;

    return (
        <nav>
            <ul className='flex justify-center gap-10'>
                <li><a className={`${navStyles}`} href="/">Agents</a></li>
                <li><a className={`${navStyles}`} href="/">Bundles</a></li>
                <li><a className={`${navStyles}`} href="/">Kits</a></li >
            </ul >
        </nav >
    )
}
