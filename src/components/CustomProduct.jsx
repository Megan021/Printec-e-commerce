// import React from 'react'
import { RxArrowTopRight } from "react-icons/rx";

const CustomProduct = () => {
    return (
        <div>
            <div className="h-[50vh] md:h-[30vh] lg:h-[55vh] bg-[url('./assets/footer2.jpg')] flex bg-center bg-cover bg-no-repeat justify-center text-center items-center text-white">
                <div className="group md:w-[60%] lg:w-[27%]">
                    <h3 className="uppercase font-semibold text-xs pb-5">100% Solid Printing</h3>
                    <p className="font-semibold text-2xl px-5 md:text-4xl pb-9">Ready to create some custom products?</p>
                    <div className="flex justify-center ">
                    <button className="p-3 px-6 border-2 transition duration-300 group-hover:bg-white group-hover:text-black  border-white rounded-full flex gap-2 items-center">Explore More <RxArrowTopRight className="group-hover:rotate-45 transition duration-300" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomProduct