import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import axios from "axios";

const Wishlist = () => {
  const { token, currency, backendUrl } = useContext(ShopContext);
  const [wishlistProducts, setWishlistProducts] = useState([]);

  useEffect(() => {
    const fetchWishlistItems = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/wishlist`, {
          headers: { token },
        });
        if (response.data.success) {
          setWishlistProducts(response.data.wishlistProducts);
        }
      } catch (error) {
        console.error("Error fetching wishlist items:", error);
      }
    };

    if (token) {
      fetchWishlistItems();
    }
  }, [token, backendUrl]);

  const handleRemoveFromWishlist = async (productId) => {
    try {
      await axios.post(
        `${backendUrl}/api/wishlist/remove`,
        { productId },
        { headers: { token } }
      );
      setWishlistProducts((prev) =>
        prev.filter((product) => product._id !== productId)
      );
    } catch (error) {
      console.error("Error removing product from wishlist:", error);
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-5">My Wishlist</h2>
      {wishlistProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {wishlistProducts.map((product) => (
            <div key={product._id} className="border p-3 rounded">
              <img
                src={product.image[0]}
                alt={product.name}
                className="w-full h-auto mb-2"
              />
              <h3 className="font-bold">{product.name}</h3>
              <p>
                {currency}
                {product.price}
              </p>
              <div className="flex justify-between mt-3">
                <Link
                  to={`/product/${product._id}`}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  View Product
                </Link>
                <button
                  onClick={() => handleRemoveFromWishlist(product._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default Wishlist;
