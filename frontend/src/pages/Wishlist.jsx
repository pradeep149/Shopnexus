import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const {
    products,
    currency,
    wishlistItems,
    updateQuantity,
    removeFromWishlist,
    addToCart,
    navigate,
  } = useContext(ShopContext);

  const [wishlistData, setWishlistData] = useState([]);
  const [size, setSize] = useState("");

  useEffect(() => {
    if (products.length > 0) {
      setWishlistData(wishlistItems);
    }
  }, [wishlistItems, products]);
  console.log(wishlistData);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"WISHLIST"} />
      </div>

      {wishlistData ? (
        <div>
          {wishlistData.map((item, index) => {
            const productData = products.find((product) => product._id == item);
            console.log(productData);

            return (
              <div
                key={index}
                className="py-4 border-t border-b text-gray-700 flex justify-between items-center gap-4"
              >
                <div className="flex items-start gap-6">
                  <Link
                    onClick={() => scrollTo(0, 0)}
                    className="text-gray-700 cursor-pointer"
                    to={`/product/${productData._id}`}
                  >
                    <img
                      className="w-16 sm:w-20 hover:scale-110 transition ease-in-out"
                      src={productData.image[0]}
                      alt=""
                    />
                  </Link>

                  <div>
                    <p className="text-xs sm:text-lg font-medium">
                      {productData.name}
                    </p>
                    <div className="flex items-center gap-5 mt-2">
                      <p>
                        {currency}
                        {productData.price}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 my-8">
                  <p>Select Size</p>
                  <div className="flex gap-2">
                    {productData.sizes.map((item, index) => (
                      <button
                        onClick={() => setSize(item)}
                        className={`border py-2 px-4 bg-gray-100 ${
                          item === size ? "border-orange-500" : ""
                        }`}
                        key={index}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between gap-10 items-center">
                  <button
                    onClick={() => {
                      addToCart(productData._id, size);
                    }}
                    className="bg-[#6EC207] text-white px-6 py-2 text-sm active:bg-gray-700 hover:bg-[#117554] hover:text-base duration-400 rounded"
                  >
                    ADD TO CART
                  </button>

                  <img
                    onClick={() => removeFromWishlist(item)}
                    className="w-4 mr-4 sm:w-5 cursor-pointer hover:w-6"
                    src={assets.bin_icon}
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12">
          <p>Your wishlist is empty</p>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
