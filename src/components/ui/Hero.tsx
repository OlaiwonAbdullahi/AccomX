import { GoArrowUpRight } from "react-icons/go";
import { PiSparkleLight } from "react-icons/pi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { LuUsers } from "react-icons/lu";
import Button from "./button";
import Image from "./image";
import HeroImage from "./SVG/HeroImage.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div className=" flex flex-col justify-center items-center h-auto gap-5 bg-white font-Sora p-5">
        <h1 className="  text-3xl md:text-5xl  text-[#8C52FF] mt-20 text-center">
          Smart & Secure Hostel Living,Simplified.
        </h1>
        <p className="text-black text-sm md:text-base w-full md:w1/2 text-center">
          AccomX simplifies hostel living with AI-powered management, secure
          payments, smart matching, and seamless communication for students,
          landlords, and agents.
        </p>
        <div className=" flex md:justify-around justify-center  flex-wrap gap-8 w-full text-sm  mx-auto">
          <div className=" flex items-center gap-2">
            <div className=" text-[#8C52FF] text-xl">
              <RiSecurePaymentLine />
            </div>
            Secure Transactions
          </div>
          <div className=" flex items-center gap-2">
            <div className=" text-[#8C52FF] text-xl">
              <PiSparkleLight />
            </div>
            Smart Automation
          </div>
          <div className=" flex items-center gap-2">
            <div className=" text-[#8C52FF] text-xl">
              <LuUsers />
            </div>
            Personalized Experience
          </div>
        </div>
        <div className="btn flex gap-6">
          <div className="">
            {" "}
            <Link to="signup">
              <Button className=" bg-[#8C52FF] text-white rounded-full font-extralight text-sm hover:bg-white hover:text-[#8C52FF] hover: border-[#8C52FF] hover:border">
                Get Started <GoArrowUpRight />
              </Button>
            </Link>
          </div>
          <div className="">
            {" "}
            <Button className=" border border-[#8C52FF] bg-white text-[#8C52FF] hover:text-white hover:bg-[#8C52FF] hover:border-white rounded-full font-extralight text-sm">
              Book A Virtual Tour
            </Button>
          </div>
        </div>
        <div className="">
          <Image src={HeroImage}></Image>
        </div>
      </div>
    </div>
  );
};

export default Hero;
