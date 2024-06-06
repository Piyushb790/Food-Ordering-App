import { useParams } from "react-router-dom";
import { IMG_CDN_LINK } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "./hooks/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItem } from "./Redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RestaurantMenu = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    notify();
  };

  const itemsQuantity = (item) => {
    dispatch(itemsQuantity(item));
  };

  const notify = () => toast.success("Item Added To Cart ❤");

  const { restroDetails, restroMenu } = useRestaurantMenu(id);

  if (!restroDetails) return <Shimmer />;

  return (
    <div className="res-menu flex gap-36 items-start mt-12">
      <div className="bg-[#FF7F50]  p-5 rounded-lg">
        <h1 className="font-semibold text-xl text-center pb-2">
          {restroDetails?.name}
        </h1>
        <img
          src={IMG_CDN_LINK + restroDetails?.cloudinaryImageId}
          alt="No Image"
          className="w-64 mt-1"
        />

        <div className="mt-2 text-center">
          <p className="font-semibold">{restroDetails?.costForTwoMessage}</p>
          <p className="text-sm"> {restroDetails?.locality}</p>
          <p className="text-sm">{restroDetails?.totalRatingsString}</p>
          <p className="text-xs">Restaurant id: {id}</p>
        </div>
      </div>

      <div className=" w-4/6">
        <h1 className="text-3xl font-semibold">Restaurant Menu</h1>
        <ul>
          {restroMenu?.card?.length === 0 ? (
            <Shimmer />
          ) : (
            restroMenu.map((item) => (
              <div
                className="flex justify-between border-b-2 pb-3   my-4 gap-x-4 mt-16"
                key={item?.card?.info?.id}
              >
                <div>
                  <li>{item?.card?.info?.name}</li>

                  <li>
                    ₹
                    {item?.card?.info?.price / 100 ||
                      item?.card?.info?.defaultPrice / 100}
                  </li>
                  <li>
                    ⭐{item?.card?.info?.ratings?.aggregatedRating?.rating} (
                    {item?.card?.info?.ratings?.aggregatedRating
                      ?.ratingCountV2 || "no reviews"}
                    )
                  </li>
                </div>

                <div className="relative">
                  <img
                    src={IMG_CDN_LINK + item?.card?.info?.imageId}
                    className="  w-32"
                  />
                  <button
                    className="bg-white text-green-700 rounded-md font-semibold w-12 h-8 absolute right-10 bottom-0.5"
                    onClick={() => {
                      handleAddItem(item);
                    }}
                  >
                    Add
                  </button>

                  <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                    transition:Bounce
                  />
                </div>
              </div>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
