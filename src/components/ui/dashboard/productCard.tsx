import { GoHeart } from "react-icons/go";
import Image from "../image";
import Button from "../button";

const ProductCard = () => {
  return (
    <div className="w-72 border border-gray-200 rounded-xl shadow-lg p-4 flex flex-col gap-4">
      {/* Image Container */}
      <div className="w-64 h-64 border border-gray-200 rounded-xl rounded-b-none overflow-hidden">
        <Image
          src=""
          alt="Product Image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title & Favorite Icon */}
      <div className="flex justify-between items-center w-full">
        <h2 className="font-sora text-lg font-semibold">2 Bedroom Flat</h2>
        <GoHeart className="size-5 text-gray-500 hover:text-[#7b3de8] cursor-pointer" />
      </div>

      {/* Description & Price */}
      <div className="flex justify-between items-center w-full">
        <p className="text-xs text-gray-500">Lorem ipsum dolor sit amet.</p>
        <span className="font-bold text-2xl font-sora">₦500k</span>
      </div>

      {/* CTA Button */}
      <Button
        type="submit"
        className="w-full bg-[#8C52FF] text-white font-medium py-2 rounded-md mt-2 hover:bg-[#7b3de8]"
      >
        Place A Bid
      </Button>
    </div>
  );
};

export default ProductCard;
