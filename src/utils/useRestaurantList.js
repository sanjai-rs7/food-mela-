import { useState, useEffect } from "react";

const useRestaurantList = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0843007&lng=80.2704622&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0066625&lng=80.2206369&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    const json = await data.json();
    // console.log(json.data.cards);

    const slicedList = json?.data?.cards.slice(3);
    // console.log(slicedList);
    setListOfRestaurant(slicedList);
  };

  return listOfRestaurant;
};

export default useRestaurantList;
