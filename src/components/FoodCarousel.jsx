import React from "react";
import useAllRestaurantList from "./hooks/useAllRestaurantList";
import { IMG_CDN_LINK } from "../constants";
import "../CSS/custom.css";
const FoodCarousel = () => {
  const { carouselList } = useAllRestaurantList();
  return (
    <>
      <h1 className="my-10 text-2xl font-bold">What's on your mind?</h1>
      <div className="flex overflow-x-auto  scrollbar">
        {carouselList.map((item) => (
          <img
            src={IMG_CDN_LINK + item?.imageId}
            className="w-36 h-44 "
            alt="img"
            key={item?.id}
          />
        ))}
      </div>
    </>
  );
};

export default FoodCarousel;
