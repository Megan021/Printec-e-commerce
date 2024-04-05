// import React from 'react'
import { FiUploadCloud } from "react-icons/fi";
import Banner from "../components/Banner"
import Navbar from "../components/Navbar"

const ProductDetail = () => {
    return (
        <div>
            <Navbar />
            <Banner title="Product" titleTwo="product detail" />
            <div className="container py-14 lg:py-24 lg:flex gap-8 px-4 lg:px-0">
                <div className="flex-1 ">
                    <img src="images/bags.jpg" className="rounded-3xl" />
                </div>


                <div className="flex-1">
                    <h3 className="font-semibold uppercase text-green-400 text-xs mt-4 lg:mt-0">In Stock</h3>
                    <h2 className="font-bold text-3xl py-4">Single-Color Paper Bags</h2>
                    <p className="text-3xl font-semibold pb-3">$ 15.50</p> <hr className="border border-gray-200" />
                    <p className="text-xs font-light py-8">Quis quo sed tempore temporibus nostrum quam omnis rerum. Voluptatem cum laudantium necessitatibus cupiditate omnis. Odio esse animi illo dignissimos. Facere dolor dignissimos voluptatem.</p>

                    <div>
                        <h2>Uplaod Design</h2>
                        {/* <div className=" gap-2 justify-center items-center text-center text-xs px-6 py-5 border rounded-2xl border-dashed border-gray-300 my-7">
                            <h1>
                                <FiUploadCloud className="text-xl" /> Drag and Drop File Here or <br />
                            </h1>
                                <span className="mt-6 mx-2 py-2 px-6 bg-black text-white rounded-full">Browse Files</span>
                        </div> */}

                        <div className="text-center text-xs px-6 py-5 border rounded-2xl border-dashed border-gray-300 my-7 lg:mb-12">
                            <i className="flex justify-center"><FiUploadCloud className="text-3xl" /> </i>
                            <h2 className="pt-2">Drag and Drop File Here or</h2>
                            <button className="mt-6 mx-2 py-2 px-6 bg-black text-white rounded-full">Browse Files</button>
                        </div>
                    </div>

                    <div className="lg:flex gap-3 justify-center items-center">
                        <div className="flex justify-center lg:mb-0 mb-5">
                            <button className="py-2 px-5 bg-gray-300 rounded-full">
                                + 1 -
                            </button>
                        </div>

                        <div className="py-2 flex justify-center lg:px-32 bg-black text-white rounded-full">
                            <button className="">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail