// import React from 'react'
import { RxArrowTopRight } from "react-icons/rx";
import { GoDotFill } from "react-icons/go";

const AboutComp = () => {
  return (
    <div className="py-8 lg:py-16 px-4 lg:px-0">
        <div className="container lg:flex lg:flex-row flex-col-reverse gap-12">
            <div className="lg:w-[60%] mb-12 lg:mb-0">
                <img src="images/about.png" alt="" />
            </div>

            <div className="lg:w-[29%] lg:py-16">
                <h2 className="text-[#7000FE] uppercase text-sm font-medium ">about printing</h2>
                <h2 className="text-4xl font-medium pt-4">Sell print on <span className="text-[#7000FE]">demand</span> products worldwide</h2>
                <p className="text-sm font-light py-6">Turn digital images into physical products with Printes – print locally, scale globally.</p>

                <ul className="text-sm font-medium leading-[1.5rem]">
                    <li className="flex gap-2 items-center"><GoDotFill className="text-[7px]"/>500,000+ customisable products</li>
                    <li className="flex gap-2 items-center"><GoDotFill className="text-[7px]"/>Local printing and global dropshipping</li>
                    <li className="flex gap-2 items-center"><GoDotFill className="text-[7px]"/>Eco-friendly ecommerce</li>
                    <li className="flex gap-2 items-center"><GoDotFill className="text-[7px]"/>100% free to use</li>
                    <li className="flex gap-2 items-center"><GoDotFill className="text-[7px]"/>Online, all the time</li>
                </ul>
                <div className="group">
                <button className="p-3 px-5 bg-[#7000FE] transition duration-300 rounded-full text-white flex gap-2 items-center group-hover:bg-[#8500FE] text-sm mt-8 lg:mt-12">See our products <RxArrowTopRight className="group-hover:rotate-45 transition duration-300" /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutComp