// import React from 'react'
import { RxArrowTopRight } from "react-icons/rx";
import { IoMdCheckmark } from "react-icons/io";

const WhatWeDo = () => {
    return (
        <div className="lg:py-12">
            <div className="container lg:flex gap-16 px-3 lg:px-0">

                <div className="hidden lg:block relative flex-1">
                    <img src="images/whatwedo1.jpg" className="absolute w-[80%] rounded-2xl" />
                    <img src="images/whatwedo2.jpg" className="absolute w-[60%] rounded-2xl border bottom-0 right-0 shadow-lg" />
                    <img src="images/whatwedo3.png" className="absolute w-[10%] right-0 top-16" />
                </div>

                <div className="flex-1 py-7 lg:py-16">
                    <div className="lg:w-[83%]">
                        <h2 className="text-[#7000FE] uppercase text-sm font-medium ">what we do</h2>
                        <h2 className="text-4xl font-medium pt-4">Create ready-for- <span className="text-[#7000FE]">print designs</span> with hundreds of free assets</h2>
                        <p className="text-xs font-light py-6">The easiest way to create professional designs for free!choose from our ever changing library of free mockups, designs, videos and logos.</p>

                        <ul className="text-sm font-medium leading-[2rem]">
                            <li className="flex gap-2 items-center"><IoMdCheckmark className="text-xl text-[#7000FE] rounded-full shadow p-1" />500,000+ customisable products</li>
                            <li className="flex gap-2 items-center"><IoMdCheckmark className="text-xl text-[#7000FE] rounded-full shadow p-1" />Local printing and global dropshipping</li>
                            <li className="flex gap-2 items-center"><IoMdCheckmark className="text-xl text-[#7000FE] rounded-full shadow p-1" />Eco-friendly ecommerce</li>
                            <li className="flex gap-2 items-center"><IoMdCheckmark className="text-xl text-[#7000FE] rounded-full shadow p-1" />100% free to use</li>
                            <li className="flex gap-2 items-center"><IoMdCheckmark className="text-xl text-[#7000FE] rounded-full shadow p-1" />Online, all the time</li>
                        </ul>
                        <div className="group">
                        <button className="p-3 px-5 bg-[#7000FE] transition duration-300 rounded-full text-white flex gap-2 items-center group-hover:bg-[#8500FE] text-sm mt-8 lg:mt-12">Learn moew <RxArrowTopRight className="group-hover:rotate-45 transition duration-200" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo