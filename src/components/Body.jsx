import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "./hooks/useOnline";
import useAllRestaurantList from "./hooks/useAllRestaurantList";
import SearchContainer from "./SeachContainer";
import FoodCarousel from "./FoodCarousel";

const Body = () => {
  const {
    allRestroList,
    filteredRestroList,
    setAllRestroList,
    setFilteredRestroList,
    carouselList,
  } = useAllRestaurantList();

  const online = useOnline();

  if (!online) {
    return (
      <h1 className="text-2xl  my-36 ">
        🔴 Offline, please check our internet connection 🦕
      </h1>
    );
  }

  return allRestroList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="gap-y-10    ">
      <FoodCarousel />
      <SearchContainer
        allResList={allRestroList}
        setFilterResList={setFilteredRestroList}
      />

      <div className="res-list flex flex-wrap gap-x-9 gap-y-8  justify-around">
        {filteredRestroList?.length === 0 ? (
          <h1 className="text-xl text-left">No Restaurant Found</h1>
        ) : (
          filteredRestroList.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
              >
                <RestaurantCard
                  {...restaurant?.info}
                  {...restaurant?.info?.sla}
                />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Body;
