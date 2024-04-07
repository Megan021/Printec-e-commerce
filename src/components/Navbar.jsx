// import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import PropTypes from "prop-types";
import { motion } from "framer-motion"

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
}

const Navbar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    // const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
    };

    const NavLink = ({ to, children }) => {
        const isActive = location.pathname === to;
        const isBlogDetailPage = location.pathname.startsWith('/blog-detail');
        const isServiceDetailPage = location.pathname.startsWith('/product-detail');
        // Apply active styling to /blog if on /blog-detail page
        const isBlogActive = isBlogDetailPage && to === '/blog';
        const isServiceActive = isServiceDetailPage && to === '/shop';
        return (
            <Link to={to}>
                <li className={(isActive || isBlogActive || isServiceActive) ? 'text-[#7000FE]' : ''}>{children}</li>
            </Link>
        );
    };

    return (
        <div className="">
            <div className="flex justify-between items-center px-7 shadow h-[5.5rem] bg-white">

                <div className="md:hidden text-2xl">
                    <button onClick={() => setIsOpen(isOpen => !isOpen)}><BiMenuAltLeft /></button>

                    <motion.nav
                        animate={isOpen ? "open" : "closed"}
                        variants={variants}
                        className="z-[999] md:hidden duration-500 fixed top-0 left-0 h-screen w-[100%] bg-white shadow-lg">
                        <div className='flex justify-between py-7 px-4 w-[100%] mx-auto shadow'>
                            <div className="w-[55%]">
                                <Link to='/' onClick={closeMenu}>
                                    <h2 className="text-2xl font-bold">Printec</h2>
                                </Link>
                            </div>
                            <button onClick={closeMenu}><CgClose className="text-2xl" /></button>
                        </div>
                        <hr />
                        <ul className="flex flex-col text-center px-5 leading-[3.3rem] pt-9 pb-3 text-base">
                            <NavLink to='/' onClick={closeMenu}>HOME</NavLink>
                            <NavLink to='/shop' onClick={closeMenu}>SHOP</NavLink>
                            <NavLink to='/about' onClick={closeMenu}>ABOUT</NavLink>
                            <NavLink to='/blog' onClick={closeMenu}>BLOG</NavLink>
                            <NavLink to='/contact' onClick={closeMenu}>CONTACT</NavLink>
                        </ul>
                    </motion.nav>

                </div>

                <div>
                    <Link to="/">
                        <h2 className="text-2xl font-bold">Printec</h2>
                    </Link>
                </div>

                <div className="md:hidden text-2xl">
                    <button><CiShoppingCart /></button>
                </div>

                <div className="hidden md:block">
                    <ul className="flex gap-8 font-semibold text-sm">
                        <NavLink to='/'><li>Home</li></NavLink>
                        <NavLink to='/shop'><li>Shop</li></NavLink>
                        <NavLink to='/about'><li>About</li></NavLink>
                        <NavLink to='/blog'><li>Blog</li></NavLink>
                        <NavLink to='/contact'><li>Contact</li></NavLink>
                    </ul>
                </div>

                <div className="hidden lg:flex gap-3 text-xl font-semibold">
                    <i><CiSearch /></i>
                    <i><CiUser /></i>
                    <i><CiShoppingCart /></i>
                </div>
            </div>
        </div>
    )
};

Navbar.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Navbar