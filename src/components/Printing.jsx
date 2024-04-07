// import React from 'react'
import { RxArrowTopRight } from "react-icons/rx";
import { FaBoxOpen } from "react-icons/fa";

const Printing = () => {
  return (
    <div>
        <div className="container lg:flex py-12 lg:py-5 lg:pb-20 px-4 lg:px-0 ">

            <div className="flex-1 my-auto pb-8 lg:pb-0">
                <div className="lg:w-[71%]">
                <h3 className="text-sm uppercase font-medium text-[#7000FE]">let's get printing</h3>
                <h2 className="text-4xl font-medium py-4 tracking-tight">Reasons to get <span className="text-[#7000FE]">printing started</span> with us</h2>
                <p className="text-sm font-light">We have all the equipment, know-how and every thing you will need to receive fast, reliable printing services with high quality results. Chat live with us today to get things moving.</p>
                <div className="group">
                <button className="p-3 px-5 bg-[#7000FE] transition duration-300 rounded-full text-white flex gap-2 items-center group-hover:bg-[#8500FE] text-sm mt-7">Get In Touch <RxArrowTopRight className="group-hover:rotate-45 transition duration-300" /></button>
                </div>
                </div>
            </div>

            <div className="h-[33rem] bg-no-repeat flex-1 relative">
                <div className="">
                    <img src="images/printing.png" className="lg:w-[90%] absolute right-0" />
                </div>
                <div className="absolute bottom-0 border bg-white w-[60%] lg:w-[40%] shadow-lg rounded-2xl p-4 px-6">
                    <i className="text-5xl flex justify-center my-5 p-3 w-[40%] mx-auto"><FaBoxOpen /></i>
                    <h2 className="font-medium text-center pb-4">Banner Design</h2>
                    <p className="text-xs text-center font-light pb-5">Your customer receives their order with your brand attached to it</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Printing