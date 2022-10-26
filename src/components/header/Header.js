import React from "react";
import Link from 'next/link'

const Header = () => {
    const [showSidebar, setShowSidebar] = React.useState(false)
    return (
        <>
            <header id="top" className="px-4 mx-auto max-w-container sm:px-10 3xl:px-0">
                <div className="flex h-19 items-center justify-between px-2 md:h-22.5 md:px-0">
                    <div className="flex items-center gap-10 md:w-full md:justify-between">

                        <Link href='/'>
                            <a
                                className="relative z-50 pt-10 flex flex-col items-center gap-2 whitespace-nowrap sm:flex-row md:gap-4"
                                title={"Arcade Chain"}>
                                <picture>
                                    <img className="pt-10" src={"/images/arcade_chain.svg"} width="256" height="256"
                                         alt="arcade chain"/>
                                </picture>
                            </a>
                        </Link>
                        <nav id="primary-nav"
                             className={`fixed inset-0 flex flex-col items-center text-xl duration-200 ease-in-out ${showSidebar ? 'translate-x-0' : 'translate-x-full'} z-90 gap-7 bg-slate-900/80 pt-28 backdrop-blur md:left-1/2 xl:static xl:translate-x-0 xl:flex-row xl:items-center xl:gap-6 xl:bg-transparent xl:px-0 xl:pt-0 xl:text-base`}>
                            <Link className='font-bold text-white text-lg' href='/slot'><a target='_self'
                                                                                           rel='noreferrer'
                                                                                           className='font-bold text-white text-lg'>Play
                                Slot (Beta)</a></Link>
                            <Link className='font-bold text-white text-lg' href='/faucet'><a target='_self'
                                                                                             rel='noreferrer'
                                                                                             className='font-bold text-white text-lg'>TUSD
                                faucet</a></Link>
                            <Link href='/arcade_chain_whitepaper.pdf'><a target='_blank' rel='noreferrer'
                                                                         className='font-bold text-white text-lg'>White
                                Paper</a></Link>
                        </nav>
                    </div>

                    <button onClick={() => setShowSidebar(!showSidebar)} aria-label="toggle menu"
                            aria-controls="primary-nav"
                            className="-mr-3 hamburger z-100 xl:hidden">
                        {showSidebar ?

                            <svg fill="#fff" className=" hamburger-close" xmlns="http://www.w3.org/2000/svg"
                                 width="36"
                                 height="36" viewBox="0 0 36 36">
                                <path
                                    d="M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z"/>
                            </svg>
                            :
                            <svg fill="#fff" className="hamburger-open" xmlns="http://www.w3.org/2000/svg"
                                 width="36" height="36"
                                 viewBox="0 0 36 36">
                                <path d="M4 27h28v-3H4v3zm0-8h28v-3H4v3zM4 8v3h28V8H4z"/>
                            </svg>
                        }

                    </button>
                </div>
            </header>
        </>
    )

}

export default Header;
