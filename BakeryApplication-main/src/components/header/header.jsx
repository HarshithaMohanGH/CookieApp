//import React from 'react'
import { Link,NavLink } from 'react-router-dom'


function Header(){
    return(
        <header className='shadow sticky z-50 top-0' > 
        <nav className='bg-gray-200 border-yellow-200 px-4 lg:px-6 py-2.5'>
            <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
                <Link to='/' className='flex items-center'>
                <img src="https://www.dolceandbiscotti.com/cdn/shop/files/dolce-and-biscotti-logo.png?v=1657883345"
                            className="mr-3 h-32"
                            alt="Logo"
                        />

                </Link>

                <div className="flex items-center lg:order-2">
                        
                        <Link
                            to="/customize"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Customize My Order!! 
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 
                                        duration-200 border-b 
                                        border-gray-100 
                                        ${isActive ? 
                                            "text-white-700":
                                            "text-blue-700" }
                                        lg:hover:bg-transparent 
                                        lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Welcome to Biscotti
                                    
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/About"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 
                                        duration-200 border-b 
                                        border-gray-100 
                                        ${isActive ? 
                                            "text-orange-700":
                                            "text-gray-700" }
                                        lg:hover:bg-transparent 
                                        lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About Biscotti
                                </NavLink>
                            </li>

                            


                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header