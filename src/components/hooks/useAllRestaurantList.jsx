import { useState, useEffect } from "react";
import { ALL_RES_CDN } from "../../constants";
import Shimmer from "../Shimmer";
const useAllRestaurantList = () => {
  const [allRestroList, setAllRestroList] = useState([]);
  const [filteredRestroList, setFilteredRestroList] = useState([]);
  const [carouselList, setCarouselList] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  async function fetchRestaurants() {
    try {
      const data = await fetch(ALL_RES_CDN);
      if (!data.ok) {
        throw new Error(<Shimmer />);
      }

      const jsonData = await data.json();
      const restaurant =
        jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      const carousel =
        jsonData?.data?.cards[0]?.card?.card?.imageGridCards?.info;

      setAllRestroList(restaurant);
      setFilteredRestroList(restaurant);
      setCarouselList(carousel);
    } catch (error) {
      console.log("fetch error", error);
      setAllRestroList([]);
      setFilteredRestroList([]);
    }
  }
  return {
    allRestroList,
    filteredRestroList,
    setAllRestroList,
    setFilteredRestroList,
    carouselList,
    setCarouselList,
  };
};
export default useAllRestaurantList;
