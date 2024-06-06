import { IMG_CDN_LINK } from "../constants";
const RestaurantCard = ({
  name,
  cloudinaryImageId,
  avgRating,
  cuisines,
  areaName,
  id,
  slaString,
}) => {
  return (
    <div className="card   w-64 tracking-wide " key={id}>
      <img
        src={IMG_CDN_LINK + cloudinaryImageId}
        alt="food-img"
        className="rounded-2xl w-64 h-40 object-cover"
      />
      <div className="px-2 mt-1">
        <p className="font-semibold text-lg leading-6">{name}</p>
        <p className="text-[16px] font-semibold  ">
          {avgRating + " ⭐ "}{" "}
          <span className="font-normal"> {slaString} </span>
        </p>
        <p className="text-[16px] mt-2 text-gray-600 leading-[19px]">
          {cuisines.join(", ")}
        </p>
        <p className="text-[16px] text-gray-600 leading-[19px]">{areaName}</p>
      </div>
    </div>
  );
};
export default RestaurantCard;
