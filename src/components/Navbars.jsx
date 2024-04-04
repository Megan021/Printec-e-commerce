// import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";

const Navbars = () => {
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
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/shop'><li>Shop</li></Link>
                    <Link to='/about'><li>About</li></Link>
                    <Link to='/blog'><li>Blog</li></Link>
                    <Link to='/contact'><li>Contact</li></Link>
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
}

export default Navbars