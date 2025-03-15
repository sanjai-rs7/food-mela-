import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // console.log(props);
  // const { resName, text, rating, del_time } = props;
  const { resData } = props;
  // console.log(resData);
  const { name, areaName, cuisines, costForTwo, avgRating, cloudinaryImageId } =
    resData?.card?.card?.info;
  const { deliveryTime } = resData?.card?.card?.info?.sla;

  return (
    <div className="p-4 m-4 w-[220px] bg-[#fafde7] rounded-xl hover:border-[1px] border-black">
      <img
        className="rounded-lg h-[100px] w-[220px] object-cover"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-semibold py-2">{name}</h3>
      <div className="card-details">
        <h4>{areaName}</h4>
        <h4 className="cuisine-list">{cuisines.slice(0, 3).join(",")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating}</h4>
        <h4>{deliveryTime}</h4>
      </div>
    </div>
  );
};

// Higher order component, this takes a functional component as input and returns a functino component.
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="bg-gray-950 rounded-lg text-white absolute mx-5 my-2 p-1 text-xs">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
