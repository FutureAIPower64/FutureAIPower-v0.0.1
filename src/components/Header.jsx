import React, { useState } from 'react';
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="dark:bg-black dark:text-white text-black duration-300">
            <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center">
                    <a href="#" className="text-xl font-bold">
                        Logo
                    </a>
                </div>
                <div className="hidden md:flex md:items-center md:space-x-4">
                    <a href="#" className="hover:text-gray-300">
                        AI Tools
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        AI News
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        Blog
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        Contact Us
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        Favourites
                    </a>
                </div>
                <div className="flex items-center">
                    <div className="relative md:block hidden">
                        <input type="text" className="dark:bg-gray-700 duration-300 dark:text-white px-4 py-1 rounded w-64 outline-none ring-1 ring-gray-200" placeholder="Search your tools..." />
                    </div>
                    <div className="ml-4 md:block hidden">
                        <img
                            src="/user-logo.png"
                            alt="User Logo"
                            className="h-8 w-8 rounded-full"
                        />
                    </div>
                </div>
                <div className="md:hidden">
                    <button
                        type="button"
                        className="text-gray-300 hover:text-white focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="h-6 w-6 fill-current"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5h18a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2zm0 6h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 6h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2z"
                            />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Offcanvas Menu */}
            <div
                className={`md:hidden fixed inset-0 z-10 transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'
                    }`}
            >
                <div
                    className="dark:bg-black bg-opacity-50 inset-0 fixed transition-opacity duration-300"
                    onClick={toggleMenu}
                ></div>
                <div
                    className={`dark:bg-black  bg-white text-black dark:text-white w-64 h-full p-4 fixed right-0 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <div className="flex justify-between my-2">
                    <div className="ml-4">
                            <img
                                src="/user-logo.png"
                                alt="User Logo"
                                className="h-8 w-8 rounded-full"
                            />
                        </div>
                        <button
                            type="button"
                            className="text-gray-300 hover:text-white focus:outline-none"
                            onClick={toggleMenu}
                        >
                            <svg
                                className="h-6 w-6 fill-current"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex items-center justify-center ">
                        <div className="relative py-2">
                            <input type="text" className="dark:bg-gray-700 dark:text-white duration-300 px-4 py-1 rounded w-full outline-none ring-1 ring-gray-200" placeholder="Search your tools..." />
                        </div>
                        
                    </div>
                    <div className="mt-8 space-y-4">
                        <a href="#" className="block text-gray-700 hover:text-white">
                            AI Tools
                        </a>
                        <a href="#" className="block text-gray-700 hover:text-white">
                            AI News
                        </a>
                        <a href="#" className="block text-gray-700 hover:text-white">
                            Blog
                        </a>
                        <a href="#" className="block text-gray-700 hover:text-white">
                            Contact Us
                        </a>
                        <a href="#" className="block text-gray-700 hover:text-white">
                            Favourites
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;