import { RxArrowTopRight } from "react-icons/rx";
import Hero1 from "../assets/hero.png"
const Hero = () => {
  return (
    <div className="bg-[#DAF1F6]">
        <div className="flex h-[35rem] ">
            <div className="flex-1 border border-black">
              <div className="w-[50%] mx-auto text-center mt-44">
                <h2 className="font-bold text-4xl tracking-normal">The leader in quality custom T-Shirts</h2>
                <p className="text-sm font-light py-5 pb-8">Turn your ideas into premium products that leave a lasting impression</p>
                <div className="flex justify-center group">
                <button className="flex items-center gap-2 py-3 px-6 group-hover:bg-black transition duration-200 border-2 bg-[#7000FE] text-white rounded-full text-sm">Shop Now <RxArrowTopRight className="group-hover:rotate-45 transition duration-200"/></button>
                </div>
              </div>
            </div>
            <div className="flex-1 border border-black relative">
                <img src={Hero1} className="w-[70%] absolute bottom-0" />
            </div>
        </div>
    </div>
  )
}

export default Hero