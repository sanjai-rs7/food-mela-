import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemCard = (props) => {
  const { item } = props;
  const { name, imageId } = item?.card?.info;
  let { price, description } = item?.card?.info;
  if (isNaN(price) || price == undefined) {
    price = item?.card?.info?.variantsV2?.pricingModels[0]?.price;
  }
  const { rating, ratingCountV2 } = item?.card?.info?.ratings?.aggregatedRating;
  const dispatch = useDispatch();
  const updateCartItems = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="border-b-2 my-3 p-2 border-black flex justify-between">
      <div className="w-9/12">
        <h1 className="font-bold text-base">{name}</h1>
        <h1 className="font-semibold">₹ {price / 100}</h1>
        <h2>
          ★ {rating} ({ratingCountV2})
        </h2>
        <span>{description}</span>
      </div>
      <div className="w-3/12 flex justity-end">
        <button
          className="bg-green-500 absolute m-2 rounded-sm p-0.5"
          onClick={(e) => {
            e.stopPropagation();
            updateCartItems(item);
          }}
        >
          Add+
        </button>
        <img
          src={CDN_URL + imageId}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://design102.blog.gov.uk/wp-content/uploads/sites/163/2022/01/D102-Blog-post_Alt-text_main-image.png";
          }}
          className="w-[200px] h-[130px] rounded-lg object-cover"
        ></img>
      </div>
    </div>
  );
};

export default ItemCard;
