// import React from 'react'
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RxArrowTopRight } from "react-icons/rx";
import { IoIosArrowDropup } from "react-icons/io";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  return (
    <div className="bg-[#F4F6FA]">
        <div className="container py-14 lg:py-20 px-4 lg:px-0 text-sm lg:flex md:grid grid-cols-3 justify-between border-b">
            <div className="lg:w-[20%] col-span-3">
                <h2 className="font-bold text-xl pb-5">Printec</h2>
                <p className="leading-[2rem] pb-1">2972 Westheimer Rd. Santa Ana, Illinois 85486 support@example.com</p>
                <number className="font-semibold">+9801234567</number>

                <div className="flex gap-2 pt-5">
                    <i className="border rounded-full border-gray-400 p-2 text-xs"><FaFacebookF /></i>
                    <i className="border rounded-full border-gray-400 p-2 text-xs"><FaXTwitter /></i>
                    <i className="border rounded-full border-gray-400 p-2 text-xs"><FaInstagram /></i>
                </div>
            </div>

            <div>
                <h2 className="font-semibold pb-5 text-base lg:mt-0 mt-8">Information</h2>
                <ul className="leading-[2rem]">
                    <li>Help Center</li>
                    <li>Shipping</li>
                    <li>Returns</li>
                    <li>Policies</li>
                    <li>Gift Cards</li>
                </ul>
            </div>

            <div>
                <h2 className="font-semibold pb-5 text-base lg:mt-0 mt-8">Useful Links</h2>
                <ul className="leading-[2rem]">
                    <li>Home</li>
                    <li>About</li>
                    <li>Shop</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div>
                <h2 className="font-semibold pb-5 text-base lg:mt-0 mt-8">About Us</h2>
                <ul className="leading-[2rem]">
                    <li>Our Story</li>
                    <li>Contacts</li>
                    <li>Affiliate Program</li>
                    <li>Careers</li>
                </ul>
            </div>

            <div className="lg:w-[23%] group col-span-2">
                <h2 className="font-semibold pb-5 text-base lg:mt-0 mt-8">Newsletter</h2>
                <p className="leading-[1.7rem]">Subscribe our newsletter for hints, tips and the latest product news.</p>
                <input type="text" placeholder="Your Email" className="p-3 px-4 border rounded-full w-full my-3" />
                <button className="p-3 px-5 bg-[#7000FE] transition duration-300 rounded-full text-white flex gap-2 items-center group-hover:bg-[#8500FE] ">Subscribe <RxArrowTopRight className="group-hover:rotate-45 transition duration-300" /></button>
            </div>

        </div>

            <div className="lg:flex px-4 lg:px-0 text-center lg:text-left justify-between items-center container h-[13vh] text-sm">
                <div className="lg:pt-0 pt-5">
                    <p>Copyright © 2023 Printec. All rights reserved</p>
                </div>
                <div className="flex justify-center lg:mt-0 mt-4">
                    <button onClick={scrollToTop} className="flex gap-2 items-center ">Back to top <IoIosArrowDropup className="text-xl text-[#7000FE] " /></button>
                </div>
            </div>
    </div>
  )
}

export default Footer