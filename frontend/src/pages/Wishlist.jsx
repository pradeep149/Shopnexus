import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const Wishlist = () => {
  const {
    products,
    currency,
    wishlistItems,
    updateQuantity,
    removeFromWishlist,
  } = useContext(ShopContext);

  const [wishlistData, setWishlistData] = useState([]);

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
                className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
              >
                <div className="flex items-start gap-6">
                  <img
                    className="w-16 sm:w-20"
                    src={productData.image[0]}
                    alt=""
                  />
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
                <img
                  onClick={() => removeFromWishlist(item)}
                  className="w-4 mr-4 sm:w-5 cursor-pointer"
                  src={assets.bin_icon}
                  alt=""
                />
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
