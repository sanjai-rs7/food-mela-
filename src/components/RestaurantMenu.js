import { use, useState } from "react";
import Shimmer from "./Shimmer";
import RecommendSection from "./RecommendSection";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(3);
  const changeShowIndex = (ind) => {
    setShowIndex(ind);
  };
  if (resInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    avgRating,
    cuisines,
    costForTwoMessage,
    totalRatingsString,
    cloudinaryImageId,
    locality,
  } = resInfo?.cards[2]?.card?.card?.info;

  const { address } = resInfo?.cards[2]?.card?.card?.info?.labels[1]?.message;
  const { minDeliveryTime, maxDeliveryTime } =
    resInfo?.cards[2]?.card?.card?.info?.sla;

  //   console.log(resInfo?.cards[2]?.card?.card?.info);

  const { cards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;

  const itemCards = cards.filter((c) => {
    return (
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });

  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards);
  // console.log(itemCards);

  return (
    <div className="flex flex-col items-center">
      <div className="border-2 border-black text-center w-96 p-4 m-4 bg-[#EDF4C2]">
        <div className="font-bold text-xl pb-2">
          <h1>{name}</h1>
        </div>
        <div className="content">
          <div className="rating-price flex justify-between">
            <span className="rating">
              {avgRating + " rated" + "(" + totalRatingsString + ")"}
            </span>
            <span className="price">{costForTwoMessage}</span>
          </div>
          <div className="cuisines flex items-start">
            <span>{cuisines.join(", ")}</span>
          </div>
          <div className="details flex justify-between">
            <span className="outlet">
              <b>Outlet</b> {locality}
            </span>
            <span className="time">
              {minDeliveryTime + "-" + maxDeliveryTime + " mins"}
            </span>
          </div>
        </div>
      </div>

      <div className="menu-list">
        {itemCards.map((item, index) => (
          <RecommendSection
            key={index}
            itemInfo={item}
            index={index}
            showIndex={showIndex}
            setShowIndex={changeShowIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
