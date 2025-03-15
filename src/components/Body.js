import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect, use } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedLabel } from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredListOfRes, setFilteredListOfRes] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  // console.log("rendered");

  const fetchData = async () => {
    const data = await fetch(
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0843007&lng=80.2704622&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0066625&lng=80.2206369&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    const json = await data.json();
    // console.log(json.data.cards);

    const slicedList = json?.data?.cards.slice(3);
    console.log(slicedList);
    setListOfRestaurant(slicedList);
    setFilteredListOfRes(slicedList);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false) {
    return (
      <h1>
        Ooops!!! Looks like you are offline bro!!! Come with strong Internet!!!
      </h1>
    );
  }

  if (listOfRestaurant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="">
      <div className="flex justify-center">
        <div className="m-4 border-2 border-black p-1 hover:cursor-pointer bg-[#DF9755]">
          <button
            onClick={() => {
              const filteredList = listOfRestaurant.filter(
                (res) => res.card.card.info.avgRating >= 4.4
              );

              setFilteredListOfRes(filteredList);
              // console.log(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>

        <div className="m-4 p-1 px-4">
          <input
            className="border-2 border-gray-200 w-64"
            type="text"
            placeholder="Search Food or Restaurant"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <button
            className="mx-5 p-1 border border-black px-4 bg-gray-100"
            onClick={() => {
              // console.log(searchInput);
              const filteredList = listOfRestaurant.filter((res) =>
                res.card.card.info.name
                  .toLowerCase()
                  .includes(searchInput.toLowerCase())
              );

              setFilteredListOfRes(filteredList);
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="m-2 flex flex-wrap">
        {filteredListOfRes.map((restaurant) => (
          <Link
            key={restaurant.card.card.info.id}
            to={"/restaurants/" + restaurant.card.card.info.id}
          >
            {restaurant.card.card.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
