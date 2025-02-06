import { useEffect, useState } from "react";
import { RES_MENU_CDN } from "../../constants";

const useRestaurantMenu = (id) => {
  const [restroDetails, setRestroDetails] = useState(null);
  const [restroMenu, setRestroMenu] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, [id]);

  async function getRestaurantInfo() {
    const data = await fetch(RES_MENU_CDN + id);
    const jsonData = await data.json();
    setRestroDetails(jsonData?.data?.cards[2]?.card?.card?.info);
    setRestroMenu(
      jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.itemCards ||
        jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
          ?.card?.card?.itemCards ||
        jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]
          ?.card?.card?.itemCards
    );
  }
  return { restroDetails, restroMenu };
};
export default useRestaurantMenu;
