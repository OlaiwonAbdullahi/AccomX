import { useEffect, useState } from "react";
import ProductCard from "./productCard";

interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  longitude: number;
  latitude: number;
  price: string;
}

const Listing = () => {
  // Explicitly type the state as an array of Product
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await fetch(
          "https://67e56ea718194932a5860813.mockapi.io/listings"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        const data: Product[] = await response.json(); // Type assertion
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAllProducts();
  }, []);

  return (
    <div className="px-4 flex flex-wrap gap-6 justify-center">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            description={product.description}
            longitude={product.longitude}
            latitude={product.latitude}
            price={product.price}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Listing;
