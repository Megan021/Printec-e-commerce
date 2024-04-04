import { RxArrowTopRight } from "react-icons/rx";
import Hero1 from "../assets/hero.png";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  return (
    <div className="bg-[#DAF1F6]">
      <div className="flex lg:h-[35rem] ">

        <div className="flex-1 relative ">
          <div className="lg:w-[50%] mx-auto text-center lg:mt-44 py-14 lg:py-0 px-4 lg:px-0">
            <h2 className="font-bold text-3xl lg:text-4xl tracking-normal">The leader in quality custom T-Shirts</h2>
            <p className="text-sm font-light py-4 lg:py-5 lg:pb-8">Turn your ideas into premium products that leave a lasting impression</p>
            <div className="flex justify-center group">
              <button className="flex items-center gap-2 py-3 px-6 group-hover:bg-black transition duration-200 border-2 bg-[#7000FE] text-white rounded-full text-sm">Shop Now <RxArrowTopRight className="group-hover:rotate-45 transition duration-200" /></button>
            </div>
          </div>

          <div className="">
            <motion.div
              animate={{ x: [0, 20, 20, 0] }}
              transition={{ repeat: Infinity, type: "tween", duration: 5 }}>
              <img src="images/element/element1.png" className="absolute hidden lg:block  lg:bottom-44  lg:right-24" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 20, 0] }}
              transition={{ repeat: Infinity, type: "tween", duration: 5, delay:1 }}>
              <img src="images/element/element2.png" className="absolute md:translate-x-[37rem] translate-x-[18rem] -translate-y-[8rem] lg:translate-x-[11rem] lg:-translate-y-[3rem]" />
            </motion.div>

            <motion.div
              animate={{ x: [0, 20, 20, 0] }}
              transition={{ repeat: Infinity, type: "tween", duration: 5 }}>
              <img src="images/element/scircle.png" className="absolute translate-x-[2rem] md:translate-x-[7rem] md:-translate-y-[14em] -translate-y-[17em] lg:translate-x-[9rem] lg:-translate-y-[16rem]  w-[2%]" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 20, 0] }}
              transition={{ repeat: Infinity, type: "tween", duration: 5 }}>
              <img src="images/element/scircle.png" className="absolute translate-x-[1rem] md:translate-x-[12rem] -translate-y-[6rem]  lg:translate-x-[34rem] lg:-translate-y-[3rem]" />
            </motion.div>
          </div>
        </div>

        <div className="flex-1 hidden lg:block md:hidden relative overflow-hidden">
          <motion.div
          animate={{y:[1,20,20,1]}}
          // initial={{scale:0}}
          transition={{repeat:Infinity, type:"tween", duration:2}}
          data-aos="fade-down">
          <img src="images/element/bcircle.png" className="absolute scale-x-[-1] w-[80%] top-12 " />
          </motion.div>
          <div data-aos="fade-up">
          <img src={Hero1} className="w-[70%] absolute top-28" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero