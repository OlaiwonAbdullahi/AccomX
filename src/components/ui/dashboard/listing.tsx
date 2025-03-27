import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Listing = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await fetch(
          "https://67e56ea718194932a5860813.mockapi.io/listings"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        const data = await response.json();
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchAllProducts();
  }, []);

  return (
    <div className="px-4 flex flex-wrap gap-6">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name} // Adjust as needed
            image={product.image}
            description={product.description}
            longitude={product.longitude}
            latitude={product.latitude}
            price={product.price} // You can update this with dynamic pricing if available
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Listing;
