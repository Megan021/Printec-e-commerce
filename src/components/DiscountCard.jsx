// import React from 'react'
import { RxArrowTopRight } from "react-icons/rx";
import Discount1 from "../assets/discount1.jpg";
import Discount2 from "../assets/discount2.jpg";

const DiscountCard = () => {
  return (
    <div>
        <div className="container lg:flex gap-7 py-16 px-4 lg:px-0">
            
            <div className="group relative flex-1 transition duration-300 overflow-hidden bg-no-repeat text-white rounded-2xl px-10 py-16  h-[19rem]">
              <img src={Discount1} className="absolute top-0 left-0 group-hover:scale-105 z-[222] transition duration-300 h-[19rem] w-full" />
              <div className="absolute z-[333]">
                <h3 className="text-sm uppercase font-medium pb-3">flat 25% off</h3>
                <h2 className="text-3xl font-semibold pb-5 w-[70%]">Make T-Shirt Design</h2>
                <button className="flex gap-2 items-center border-2 border-white p-2 px-5 rounded-full hover:bg-white hover:text-black duration-300">Shop Now <RxArrowTopRight className="hover:rotate-45  transition duration-300" /></button>
              </div>
            </div>
            
            <div className="group relative flex-1 transition duration-300 overflow-hidden bg-no-repeat text-white rounded-2xl px-10 py-16 h-[19rem] mt-6 lg:mt-0">
              <img src={Discount2} className="absolute top-0 left-0 group-hover:scale-105 z-[222] transition duration-300 h-[19rem] w-full" />
              <div className="absolute z-[333]">
                <h3 className="text-sm uppercase font-medium pb-3">flat 25% off</h3>
                <h2 className="text-3xl font-semibold pb-5 w-[70%]">Cardboard Packagr Box</h2>
                <button className="flex gap-2 items-center border-2 border-white p-2 px-5 rounded-full hover:bg-white hover:text-black duration-300">Shop Now <RxArrowTopRight className="hover:rotate-45  transition duration-300" /></button>
              </div>
            </div>

            {/* <div className="group flex-1 transition duration-300 bg-[url('./assets/discount2.jpg')] bg-cover hover:scale-105 bg-no-repeat text-white rounded-2xl px-12 py-16">
                <h3 className="text-sm uppercase font-medium pb-3 ">flat 25% off</h3>
                <h2 className="text-3xl font-semibold pb-5 w-[45%]">Cardboard Packagr Box</h2>
                <button className="flex gap-2 items-center border-2 border-white p-2 px-5 rounded-full">Shop Now <RxArrowTopRight className="group-hover:rotate-45 transition duration-300" /></button>
            </div> */}
        </div>
    </div>
  )
}

export default DiscountCard