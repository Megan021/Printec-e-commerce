// import React from 'react'
import Banner from "../components/Banner"
import Navbar from "../components/Navbar"
import ProductComp from "../components/ProductComp";

const Shop = () => {
  const products = [1,1,1,1,1,1,1,1,1,1,1,1];

  return (
    <div>
      <Navbar />
      <Banner title='shop' titleTwo='shop' />

      <div className="py-16 bg-[#F4F6FA]">
        <div className="container text-center">
          <div className="md:w-[60%] lg:w-[40%] mx-auto px-4 lg:px-0">
            <h2 className="text-4xl font-semibold text-[#7000FE] pb-3">Products</h2>
            <p className="text-xs font-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum nulla quam libero temporibus quis magnam?</p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 pt-12">
            {products.map((index, product) => (
              <ProductComp key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop