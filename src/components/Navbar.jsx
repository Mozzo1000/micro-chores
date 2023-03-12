import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const [showMobileNav, setShowMobileNav] = useState(false);

    const links = [
        {
            name: "Home",
            url: "/",
        },
        {
            name: "Settings",
            url: "/settings",
        },
    ];

    return (
        <nav className="flex items-center justify-between flex-wrap bg-transparent absolute p-8">
            <div className="flex items-center flex-shrink-0 text-white">
                <button className="px-3 py-2 rounded hover:text-slate-400" onClick={() => setShowMobileNav(!showMobileNav)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
            <div
                className={`top-0 left-0 bg-stone-900  md:w-1/5 w-screen text-white fixed h-full z-40 ease-in-out duration-300 ${showMobileNav ? "-translate-x-0" : "-translate-x-full"}`}>
                <div className="flex flex-col">
                    <button className="rounded hover:text-slate-400 p-5" onClick={() => setShowMobileNav(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <span className="uppercase font-bold underline">Micro Chores</span>
                </div>
                <ul>
                    {links.map((link) => (
                        <li className="text-lg mt-6 hover:underline hover:text-slate-400">
                            <Link to={link.url} onClick={() => setShowMobileNav(false)}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar