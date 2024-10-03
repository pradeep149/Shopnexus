import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Slider from "react-slick";
import Title from "./Title";
import ProductItem from "./ProductItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const shuffledProducts = [...products].sort(() => 0.5 - Math.random());
    setBestSeller(shuffledProducts.slice(0, 15));
  }, [products]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3500,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic iure
          unde eum ad quia ducimus eos ipsa in, animi deleniti fugiat tempora
          explicabo, cum voluptatum repellendus quas, sed vero culpa!
        </p>
      </div>
      <Slider {...settings}>
        {bestSeller.map((item, index) => (
          <div key={index}>
            <ProductItem
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BestSeller;
