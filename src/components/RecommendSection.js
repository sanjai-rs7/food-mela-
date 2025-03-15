import { useState } from "react";
import ItemList from "./ItemList";

const RecommendSection = (props) => {
  // console.log(props);
  const { itemInfo, index, showIndex, setShowIndex } = props;
  const { title } = itemInfo?.card?.card;
  const itemCards = itemInfo?.card?.card?.itemCards;
  // console.log(itemCards);
  const [isDropDown, setIsDropDown] = useState(false);

  // "▼" : "▲"
  return (
    <div
      className="my-2 p-4 w-[800px] rounded-lg border-2 border-black  bg-gray-200 shadow-2xl"
      onClick={() => {
        isDropDown === false ? setIsDropDown(true) : setIsDropDown(false);
        if (showIndex === index) {
          setShowIndex(null);
        } else {
          setShowIndex(index);
        }
        // isDropDown === "▲" ? setIsDropDown("▼") : setIsDropDown("▲");
      }}
    >
      <div className="flex justify-between">
        <h2 className="font-bold">
          {title} ({itemCards.length})
        </h2>
        <span
          className={`dropdown-button transform transition-transform duration-400 ${
            isDropDown ? "rotate-180" : "rotate-0"
          }`}
        >
          {/* {isDropDown === false ? "▼" : "▲"} */}▼
        </span>
      </div>
      {showIndex == index ? <ItemList itemCards={itemCards} /> : <div></div>}
    </div>
  );
};

export default RecommendSection;
