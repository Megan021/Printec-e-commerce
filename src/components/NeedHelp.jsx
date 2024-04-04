// import React from 'react'
import { RxArrowTopRight } from "react-icons/rx";

const NeedHelp = () => {
    return (
        <div className="bg-[#EDEFF0] lg:py-16 py-12">
            <div className="container flex gap-8 px-4 lg:px-0">
                <div className="hidden md:block w-[170%]">
                    <img src="/images/NeedHelp.png" className="" />
                </div>

                <div className=" items-center">
                    <div className="lg:w-[80%]">
                    <h3 className="text-sm font-medium uppercase text-[#7000FE] lg:mt-24">need any helps</h3>
                    <h2 className="text-4xl font-medium py-4 tracking-tighter">Always ready to <span className="text-[#7000FE]">print your dream</span> works</h2>
                    <p className="text-sm font-light pb-8">Being one of the leading online printing services in Canada, we offer one of Canada’s largest assortment of Print Products and we’re always testing new, unique products to add to our catalog.</p>
                    <div className="group">
                    <button className="flex gap-2 items-center py-2 px-6 rounded-full group-hover:bg-[#8500FE] bg-[#7000FE] text-white">Meet with us <RxArrowTopRight className="group-hover:rotate-45 transition duration-300" /></button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NeedHelp