import DashboardNavbar from "./dashboardNavbar";
import { SEO } from "../../global";
import { GoArrowLeft } from "react-icons/go";
import Image from "../image";
import {
  FaMapMarkerAlt,
  FaStar,
  FaCheckCircle,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { H3 } from "@/components/typography";
import { LuSend, LuSparkles } from "react-icons/lu";
import { useState } from "react";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import Button from "../button";
import { PiVirtualReality } from "react-icons/pi";
import { LiaEnvelope } from "react-icons/lia";

const Productdetails = () => {
  const [reviews] = useState([
    {
      name: "John Doe",
      rating: 4,
      comment: "Great hostel with excellent amenities!",
    },
    {
      name: "Jane Smith",
      rating: 5,
      comment: "Affordable and well-maintained.",
    },
  ]);

  return (
    <>
      <SEO title="AccomX | Hostel Details" />
      <div>
        <DashboardNavbar />
        <div className="flex flex-col gap-2 w-full p-2">
          {/* Back Button */}
          <div className="p-3">
            <GoArrowLeft className="size-6 cursor-pointer" />
          </div>
          {/* Hostel Details */}
          <div className="flex p-2">
            {/* Image Gallery */}
            <div className="w-1/2">
              <Image src="https://placehold.co/600x400" />
            </div>
            {/* Hostel Information */}
            <div className="flex flex-col w-1/2 gap-2 p-1">
              <H3>Greenwood Hostel, Lagos</H3>
              <span className="text-xs p-2 w-2/3 text-gray-600">
                Modern hostel with 24/7 power, WiFi, and security. Perfect for
                students and professionals.
              </span>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#8C52FF]" />
                <span className="text-sm">Greenwood Avenue, Oshodi, Lagos</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex gap-2 items-end">
                  <span className="text-2xl">₦500K</span>
                  <span className="text-sm text-gray-500 line-through">
                    ₦1.2M
                  </span>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 size-6" />
                  ))}
                </div>
              </div>
              <div className="text-xs h-4 flex items-center gap-1 w-1/4 whitespace-nowrap bg-[#a78bfa60] rounded-full p-1 px-2 text-[#8C52FF]">
                <LuSparkles />
                <span>
                  AVAILABLE ROOMS: <b>10</b>
                </span>
              </div>
              {/* Amenities */}
              <div className="flex flex-wrap gap-2 mt-2">
                {[
                  "WiFi",
                  "24/7 Electricity",
                  "Security",
                  "Water Supply",
                  "Kitchen",
                ].map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1 bg-gray-100 p-2 rounded-lg text-sm"
                  >
                    <FaCheckCircle className="text-[#8C52FF]" /> {amenity}
                  </div>
                ))}
              </div>
              {/* Agent Details */}
            </div>
          </div>
          <div className=" flex w-full items-center">
            <div className="p-2 w-2/3">
              <span className="font-semibold font-Sora">Hostel Location</span>

              <iframe
                title="hostel-location"
                className="w-full h-64 rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126902.23318132247!2d3.3216!3d6.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93b9e94d3899%3A0xb7b99f2e1f6b1f8!2sLagos!5e0!3m2!1sen!2sng!4v1633700142192!5m2!1sen!2sng"
                loading="lazy"
              ></iframe>
            </div>
            <div className="w-1/3">
              <span className="font-semibold font-Sora">Agent Details</span>
              <div className=" p-3 border rounded-lg  h-64 flex flex-col gap-2">
                <h4 className="text-lg flex items-center gap-2 ">
                  <span className=" text-sm">Abdullahi Olaiwon</span>
                  <div className="">
                    <RiVerifiedBadgeLine className="text-[#8C52FF] size-4" />
                  </div>
                </h4>
                <div className="flex items-center gap-2 text-sm mt-2">
                  <FaPhone className="text-green-500" /> +234 812 345 6789
                </div>
                <div className="flex items-center gap-2 text-sm mt-1">
                  <FaWhatsapp className="text-green-500" /> Chat on WhatsApp
                </div>
                <div className="flex items-center gap-2 text-sm mt-1">
                  <LiaEnvelope className="text-gray-500" />{" "}
                  johnrealtor@email.com
                </div>
              </div>
            </div>
          </div>
          <div className="p-2">
            <h3 className="text-lg font-semibold">User Reviews</h3>
            <div className="mt-2">
              {reviews.map((review, index) => (
                <div key={index} className="p-2 border-b">
                  <h4 className="font-semibold">{review.name}</h4>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 size-4" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Call to Action */}
          <div className="p-2 flex gap-3 w-full sticky bottom-0 bg-gray-100 rounded-t-md">
            <Button className="border-[#8C52FF] w-1/2 border text-[#8C52FF] bg-white rounded-md font-medium flex items-center gap-2 px-4 py-2 shadow-md">
              <PiVirtualReality className="size-5" />
              <span>Take a Virtual Tour</span>
            </Button>
            <Button className="bg-[#8C52FF] w-1/2 text-white rounded-md font-medium flex items-center gap-2 px-4 py-2 shadow-md">
              <LuSend className="size-5" />
              <span> Book Now</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productdetails;
