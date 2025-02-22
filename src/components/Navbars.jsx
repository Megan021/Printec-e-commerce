// import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";
import PropTypes from "prop-types";

const Navbars = () => {
    const location = useLocation();

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
    <div>
        <div className="flex justify-between items-center px-7 shadow h-[13vh] bg-white">

            <div className="lg:hidden text-2xl">
                <button><BiMenuAltLeft /></button>
            </div>

            <div>
                <h2 className="text-2xl font-bold">Printec</h2>
            </div>

            <div className="lg:hidden text-2xl">
                <button><CiShoppingCart /></button>
            </div>

            <div className="hidden lg:block">
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

Navbars.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Navbars