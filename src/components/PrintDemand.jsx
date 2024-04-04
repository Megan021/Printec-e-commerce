// import React from 'react'
import { RxArrowTopRight } from "react-icons/rx";

const PrintDemand = () => {
  return (
    <div className="py-12">
        <div className="text-center text-white h-[20rem] lg:h-[27rem] bg-center border border-black bg-[url('./assets/printdemandbg.jpg')] bg-cover">
            <p className="font-medium text-sm pt-16 lg:pt-24">Printed and shipped on demand!</p>
            <div className="lg:w-[27%] mx-auto px-4 lg:px-0">
            <h2 className="text-2xl lg:text-4xl font-semibold py-4 pb-10">Ready to buy in bulk & save up to 30%?</h2>
            </div>
            <div className="text-center flex justify-center">
            <button className="flex gap-2 items-center py-3 text-sm px-5 border-2 border-white rounded-full">Explore More <RxArrowTopRight /></button>
            </div>
        </div>
    </div>
  )
}

export default PrintDemand