import { GoHeart } from "react-icons/go";
import Image from "../image";
import Button from "../button";

const ProductCard = ({
  name,
  image,
  description,

  price,
}) => {
  return (
    <div className="w-72 border border-gray-200 rounded-xl shadow-lg p-4 flex flex-col gap-4">
      {/* Image Container */}
      <div className="w-64 h-64 border border-gray-200 rounded-xl rounded-b-none overflow-hidden">
        <Image
          src={image || "https://placehold.co/600x400"} // Provide a fallback image if `image` is empty
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title & Favorite Icon */}
      <div className="flex justify-between items-center w-full">
        <h2 className="font-sora text-lg font-semibold">{name}</h2>
        <GoHeart className="size-5 text-gray-500 hover:text-[#7b3de8] cursor-pointer" />
      </div>

      {/* Description & Price */}
      <div className="text-xs text-gray-500">{description}</div>

      {/* Price */}
      <div className="flex justify-between items-center w-full">
        <span className="font-bold text-2xl font-sora">{price}</span>
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
